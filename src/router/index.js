import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const contact = r => require.ensure([], () => r(require('@/page/contact')), 'contact');
const content = r => require.ensure([], () => r(require('@/page/content')), 'content');


const routes = [
	{
		path: '/',
		component: home,
		redirect: '/content',
		children: [	{
			path: 'contact',
			name: 'contact',
			component: contact
		},
		{
			path: 'content',
			name: 'content',
			component: content
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
