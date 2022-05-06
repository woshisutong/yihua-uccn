import {
	createRouter,
	createWebHistory,
	createWebHashHistory
} from 'vue-router'
// import routes from "./routes";
import PageView from '@/views/PageView'
import HomePage from '@/views/HomePage'


const router = createRouter({
	// history: createWebHashHistory(),//修改后
	history: createWebHashHistory(process.env.BASE_URL),//带#
	// history: createWebHistory(process.env.BASE_URL),//不带# 但是刷新就404
	routes: [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/',
		name: 'PageView',
		component: PageView,
		children: [{
			path: '/home',
			name: 'home',
			component: HomePage,
		}]
	}],

})

export default router
