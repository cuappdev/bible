module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true,
    'jquery': true,
    'jest': true
  },
  'extends': [
    'semistandard',
    'airbnb'
  ],
  'parserOptions': {
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'strict': 0,
    'comma-dangle': [
      'warn',
      'never'
    ],
    'indent': [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    'max-len': [
      'warn',
      80
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'react/jsx-no-undef': 2,
    'react/jsx-uses-vars': 1,
    'no-unused-vars': 1,
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'warn',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'class-methods-use-this': [1, { "exceptMethods": [] }]
  }
};
