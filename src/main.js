import {
	createApp
} from 'vue'
import App from './App.vue'
// createApp 函数创建一个应用实例
const app = createApp(App)
// import Element from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css';
import router from './router'
import vuexs from './store'

/* axios */
// import api from './api/api.js'
// app.config.globalProperties.$axios = api
// app.provide('global',{
// 	axios
// })
// Vue.prototype.$http = api;

/* swiper */
import 'swiper/dist/css/swiper.min.css';
/* 重置样式 */
import './assets/css/reset.min.css'
/* animate.css */
import 'animate.css'
/* jquery */
import 'jquery'
/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* 头部组件 */
import Header from './components/Header'
app.component('Header', Header)

/* 尾部组件 */
import Footer from './components/Footer'
app.component('Footer', Footer)
/* 回到顶部 */
import GoTop from './components/GoTop'
app.component('GoTop', GoTop)

app.use(router).use(vuexs).mount('#app')
