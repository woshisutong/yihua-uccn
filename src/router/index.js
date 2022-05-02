import {
	createRouter,
	createWebHistory
} from 'vue-router'

import PageView from '@/views/PageView'
import HomePage from '@/views/HomePage'
import Service from '@/views/Service'

const router = createRouter({
	history: createWebHistory(),
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
	}, {
		path: '/service',
		name: 'service',
		component: Service,
		meta: {
			title: '相关服务'
		}
	}],

})

export default router
