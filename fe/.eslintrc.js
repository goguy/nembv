// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
    'consistent-return': 0, // ['error', { 'treatUndefinedAsUnspecified': false }],
    'no-param-reassign': 0,
    // 'no-undef': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'object-shorthand': 0
  }
}
