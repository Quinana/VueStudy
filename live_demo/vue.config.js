const path = require('path')
const webpack = require('webpack')

module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production' ? '/bcmp-web/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/bcmp-web/' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'bcmp-web' : 'dist',
  lintOnSave: true,
  productionSourceMap: false,

  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 9005,
    https: false,
    hotOnly: false,
    proxy: null
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  chainWebpack: config => {
    config.module
      .rule('swf')
      .test(/\.swf$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10000
      })
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/baseStyle/var.scss'),
        path.resolve(__dirname, './src/assets/baseStyle/mixin.scss')
      ]
    }
  }
}
