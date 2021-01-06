import Vue from 'vue'
import App from './App.vue'
//引入keycloak
import Keycloak from '@/api/keycloak'
let keycloak = Keycloak.init({
	base_url: process.env.VUE_APP_KEYCLOCK_CONFIG_URL,
	client_id: process.env.VUE_APP_KEYCLOCK_FRONTEND_CLIENTID,
	client_secret: process.env.VUE_APP_KEYCLOCK_CLIENT_SECRET,
	realm: process.env.VUE_APP_KEYCLOCK_CONFIG_REALME,
})
Vue.prototype.$keycloak = keycloak
//引入axios
import apis from '@/api/index.js'
//引入icon
import '@/assets/css/iconfont/iconfont.css'
import '@/assets/css/common.scss'
Vue.config.productionTip = false
Vue.prototype.apis = apis
new Vue({
	render: (h) => h(App),
}).$mount('#app')
