import Vue from 'vue'
import App from './App.vue'
import "reset.css";
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
import router from './router'
import datetimePicker from './components/datetimePicker.vue'
import './assets/common.styl';
// Vue.use(VueRouter)
Vue.use(YDUI);
Vue.component('datetimePicker',datetimePicker)

import common from './assets/js/common.js'; //引入公共方法
Vue.prototype.common = common;

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
	
	//微信登录时打开
	// let user_token = localStorage.getItem('user_token')
	// user_token = JSON.parse(user_token);
	
	// if(!user_token && to.path != '/'){
	// 	// 第一次进入项目
	// 	// holdno.cookie.set('beforeLoginUrl', to.fullPath) // 保存用户进入的url		
	// 	var back_url = 'http://sys.yiliaoke.net/ylk/dist/index.html#' + to.fullPath
	// 	localStorage.setItem("back_url", back_url);
	// 	next('/')
	// 	return false
	// }
	//微信登录时打开
	next()
})

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
// 