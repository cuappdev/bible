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
    'block-scoped-var': 'error',
    'class-methods-use-this': 1, // warning when class method doesn't use 'this'
    'comma-dangle': [
      'warn',
      'always-multiline'
    ],
    'consistent-return': 'error',
    'indent': [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    'max-len': [ // max line lengths
      'warn',
      80
    ],
    'no-unused-expressions': 'warn', // checks for unused var, exprs, etc.
    'no-unused-vars': 1,
    'no-useless-concat': 'warn',
    'quotes': [ // single quotes only
      'error',
      'single'
    ],
    'react/jsx-no-undef': 2,
    'react/jsx-uses-vars': 1,
    'semi': [
      'error',
      'always'
    ],
    'strict': 0
  }
};
