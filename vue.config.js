// vue.config.js
module.exports = {
  // 修改的配置
  devServer: {
    proxy: {
      '/music_api': {
        target: 'http://tingapi.ting.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/music_api': ''
        }
      }
    }
  }
}
