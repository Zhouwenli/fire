module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
     ? './'
     : '/',
 lintOnSave:false,
 devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
  //   proxy: {  //配置代理
  //       //跨域设置
  //     "/api": {
  //       target: process.env.VUE_APP_API_URL,   //请求源地址
  //       ws: true,       //是否代理
  //       changeOrigin: true,  //是否跨域
  //     },
  //     "/statics": {
  //       target: process.env.VUE_APP_BASE_URL,   //请求源地址
  //       ws: true,       //是否代理
  //       changeOrigin: true,  //是否跨域
  //     }
  //   }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
