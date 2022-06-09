const path = require('path');

module.exports = {
  /* 部署应用包的基本URL */
  /* baseUrl 从 Vue CLI 3.3 起已弃用 ，请使用publicPath */
  publicPath: process.env.NODE_ENV === "development" ? "./" : "/uccn",
  // publicPath: "/page/",
  /* 生产环境构建文件的目录 defalut: dist */
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "test",
  /* 放置生成的静态文件目录（js css img） */

  assetsDir: "",

  /* 指定生成的index.html 输出路径 相对 default: index.html */

  indexPath: "index.html",

  /* 指定生成文件名中包含hash default: true */

  filenameHashing: true,
	
	
	lintOnSave: false,
	// 配置 webpack-dev-server 行为。
	devServer: {
		// open: process.platform === 'darwin',
		host: '192.168.0.134',
		port: 8080,
		https: false,
		hotOnly: false,
		// 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
		proxy: {
			'/api': {
				/* 目标代理服务器地址 */
				target: 'http://yihua.weiyun.tinyint.cn/api',
				/* 允许跨域 */
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
		// proxy:{ 
		//     '/api': {
		//         /* 目标代理服务器地址 */
		//         target: 'http://xxx',
		//         /* 允许跨域 */
		//         changeOrigin: true,
		//     }
		// },
		before: app => {
			// `app` 是一个 express 实例
		}
	},
	// 三方插件的选项
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: []
		}
	}
}
