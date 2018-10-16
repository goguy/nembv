const router = require('express').Router();

const test = require('./test');
const data = require('./data');

router.use('/test', test);
router.use('/data', data);

router.all('*', (req, res) => {
    res.status(404).send({ success: false, msg: `unknown uri ${req.path}` });
});
  

module.exports = router;