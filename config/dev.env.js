'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //添加了一个name，进行页面的区分，此添加可有可无
  name:'"dev"'
})

