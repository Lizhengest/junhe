import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'
import store from './store/'



Vue.use(ElementUI);
console.log(ElementUI);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	render: h => h(App)
})
