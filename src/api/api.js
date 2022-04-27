import axios from 'axios'
// import qs from 'qs'

const apiHost = process.env.API_HOST
/* axios配置 */
axios.defaults.retry = 5 /* 重试请求次数 */
axios.defaults.retryDelay = 600 /* 请求延迟 */
axios.defaults.timeout = 30000 /* 响应超时时间 */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' /* 配置请求头 */
axios.defaults.baseURL = apiHost /* 配置接口地址 */



/* POST传参序列化(添加请求拦截器) */
axios.interceptors.request.use((config) => {
	/* 在发送请求之前做某件事 */
	// console.log(config)
	return config
}, (error) => {
	console.log(error)
	return Promise.reject(error)
})

/* 返回状态判断(添加响应拦截器) */
axios.interceptors.response.use((res) => {
	/* 对响应数据做些事 */
	// if (!res.data.success) {
	// 	return Promise.reject(res)
	// }
	// if (sessionStorage.getItem('token')) {  /* 在header上添加token */
	// res.headers.Authorization = sessionStorage.getItem('token')
	// }
	// console.log(res)
	return res
}, (error) => {
	// console.log(error)
	return Promise.reject(error)
})

/* 返回一个Promise(发送post请求) */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, {
				data: params
			})
			.then(response => {
				resolve(response.data)
			}, err => {
				reject(err)
			})
			.catch((error) => {
				console.log(error)
				reject(error)
			})
	})
}

/* 返回一个Promise(发送get请求) */
export function get(url, param) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
				params: param
			})
			.then(response => {
				resolve(response.data)
			}, err => {
				reject(err)
			})
			.catch((error) => {
				reject(error)
			})
	})
}
