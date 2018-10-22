import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueCookie from 'vue-cookie'
import Hello from '@/components/page/Hello'
import index from '@/components/page/index'
import intro from '@/components/page/intro'
import e404 from '@/components/page/e404'
import sign from '@/components/page/sign'
import register from '@/components/page/register'
import company from '@/components/page/setting/company'
import group from '@/components/page/setting/group'
import talk from '@/components/page/board/talk'
import qna from '@/components/page/board/qna'
import test from '@/components/page/dev/test'
import cfg from '../../static/cfg'

Vue.use(Router)

const checkAuth = (to, from, next) => {
  // const token = VueCookie.get('token');
  //
  // if (token) {
  //   // axios.post()
  //   return next();
  // }
  //
  // next({
  //   path: '/sign',
  //   query: { redirect: to.fullPath },
  // });
  axios.post(`${cfg.path.api}page`, { page: to.path })
    .then((res) => {
      // throw new Error('test');
      // if (!res.data.success) return next(false); // throw new Error('api');
      // console.log(from.path);
      if (!res.data.d) return next(false)
      next()
    })
    .catch(() => {
      // console.log(err);
      // if (err.message === 'api') {
      //   return next(false);
      // }
      next('/sign')
      // if (VueCookie.get('token')) VueCookie.delete('token');
      // next('/sign');
      // return location.href = '/#/sign';
    })
}

const redirectPath = (to, from, next) => {
  // if (VueCookie.get('token')) return next('/'); // location.href = '/#/';
  VueCookie.delete('token')
  next()
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'intro',
          component: intro,
          beforeEnter: checkAuth,
          meta: {
            title: 'NEMBV introduce',
            breadcrumb: [{
              text: 'Welcome',
              href: '/'
            }]
          }
        },
        {
          path: '/company',
          name: 'company',
          component: company,
          beforeEnter: checkAuth,
          meta: {
            title: '회사 관리',
            breadcrumb: [{
              text: '환경설정 > 회사 관리',
              href: '/'
            }]
          }
        },
        {
          path: '/group',
          name: 'group',
          component: group,
          beforeEnter: checkAuth,
          meta: {
            title: '그룹 관리',
            breadcrumb: [{
              text: '환경설정 > 그룹 관리',
              href: '/'
            }]
          }
        },
        {
          path: '/talk',
          name: 'talk',
          component: talk,
          beforeEnter: checkAuth,
          meta: {
            title: '잡담',
            breadcrumb: [{
              text: '게시판 > 잡담',
              href: '/'
            }]
          }
        },
        {
          path: '/qna',
          name: 'qna',
          component: qna,
          beforeEnter: checkAuth,
          meta: {
            title: 'Q&A',
            breadcrumb: [{
              text: '게시판 > Q&A',
              href: '/'
            }]
          }
        },
        {
          path: '/test',
          name: 'test',
          component: test,
          beforeEnter: checkAuth,
          meta: {
            title: 'test',
            breadcrumb: [{
              text: '개발자 > test',
              href: '/'
            }]
          }
        }
      ]
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign,
      beforeEnter: redirectPath
    },

    {
      path: '/register',
      name: 'register',
      component: register,
      beforeEnter: redirectPath
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      beforeEnter: redirectPath
    },
    {
      path: '*',
      name: 'e404',
      component: e404
    }
  ]
})
