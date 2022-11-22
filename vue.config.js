const { defineConfig } = require('@vue/cli-service')
const pkg = require('./package.json')

const devServer = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  port: pkg.hakushin?.port || 3200,
  proxy: {},
  host: '0.0.0.0',
}

module.exports = defineConfig({
  transpileDependencies: true,
  devServer,
})
