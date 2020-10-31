'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./sitEnv.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //添加了一个page，进行页面的区分，此添加可有可无
  'page':'"sit"'
})
