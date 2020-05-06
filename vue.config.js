const path = require('path')

module.exports = {
  lintOnSave: true,
  devServer: {
    https: false,
    open: false,
    // 配置多个代理
    proxy: {
      '/api': {
        target: 'https://cn.vuejs.org/',
        ws: true,
        changeOrigin: true
      }
    },
    public: ''
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/public.less')]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', path.join(__dirname, './src'))
  }
}
