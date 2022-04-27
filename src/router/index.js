import {
	createRouter,
	createWebHistory
} from 'vue-router'

import PageView from '@/views/PageView'
import HomePage from '@/views/HomePage'
import CompanyIntroduction from '@/views/CompanyIntroduction'
import JobChance from '@/views/JobChance'
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
		path: '/companyintroduction',
		name: 'companyintroduction',
		component: CompanyIntroduction,
		meta: {
			title: '公司介绍'
		}
	}, {
		path: '/jobchance',
		name: 'jobchance',
		component: JobChance,
		meta: {
			title: '工作机会'
		}
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
