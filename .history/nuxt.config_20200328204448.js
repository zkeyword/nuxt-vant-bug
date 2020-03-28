const { resolve } = require('path')

module.exports = {
  mode: 'universal',
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f4d420' },
  /*
   ** Global CSS
   */
  css: [],

  /*
   ** server
   */
  // server: {
  //   port: 3000,
  //   host: '0.0.0.0'
  // },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vant', '@/plugins/svgIcon', '@/plugins/element-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/router'
  ],
  routerModule: {
    path: 'pages'
  },
  styleResources: {
    stylus: './assets/stylus/lib/mixin.styl'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // 排除 nuxt 原配置的影响,Nuxt 默认有vue-loader,会处理svg,img等
      // 找到匹配.svg的规则,然后将存放svg文件的目录排除
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))
      svgRule.exclude = [resolve(__dirname, 'assets/svg')]

      // 添加loader规则
      config.module.rules.push({
        test: /\.svg$/, // 匹配.svg
        include: [resolve(__dirname, 'assets/svg')], // 将存放svg的目录加入到loader处理目录
        use: [
          { loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' } }
        ]
      })
    },

    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant'
          },
          'vant'
        ],
        [
          'import',
          {
            libraryName: 'element-ui'
          },
          'element-ui'
        ]
      ]
    },

    // 剥离css
    extractCSS: { allChunks: process.env.NODE_ENV !== 'development' },

    publicPath: `${
      process.env.NODE_ENV_OSS === 'test'
        ? 'https://chandashi-mobile-test.oss-cn-shanghai.aliyuncs.com/www/'
        : 'https://chandashi-mobile.oss-cn-shanghai.aliyuncs.com/www/'
    }`
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }

  // router: {
  //   // router 的滚动行为
  //   //   scrollBehavior(to, from, savedPosition) {
  //   //     // savedPosition 只有在 popstate 导航（如按浏览器的返回按钮）时可以获取。
  //   //     if (savedPosition) {
  //   //       return savedPosition
  //   //     } else {
  //   //       let position = { x: 0, y: 0 }
  //   //       // 目标页面子组件少于两个
  //   //       if (to.matched.length < 2) {
  //   //         // 滚动至页面顶部
  //   //         position = { x: 0, y: 0 }
  //   //       } else if (
  //   //         to.matched.some((r) => r.components.default.options.scrollToTop)
  //   //       ) {
  //   //         // 如果目标页面子组件中存在配置了scrollToTop为true
  //   //         position = { x: 0, y: 0 }
  //   //       }
  //   //       // 如果目标页面的url有锚点,  则滚动至锚点所在的位置
  //   //       if (to.hash) {
  //   //         position = { selector: to.hash }
  //   //       }
  //   //       return position
  //   //     }
  //   //   }
  // }
}
