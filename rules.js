/* -*- tab-width: 2 -*- */
'use strict';

const origConfig = require('eslint-config-nodejs-pmb/rules.js');

const config = {
  ...origConfig,
  rules: {
    ...origConfig.rules,
    'no-var': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'spaced-comment': 'off',
    'vars-on-top': 'off',
  },
};

module.exports = config;
