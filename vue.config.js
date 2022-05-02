const path = require('path');

module.exports = {
	lintOnSave: false,
	// 配置 webpack-dev-server 行为。
	devServer: {
		// open: process.platform === 'darwin',
		host: '192.168.1.6',
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
