// 引入组件
import Login from './login'

Login.install = (Vue) => Vue.component(Login.name, Login)

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(Login)
}

export default Login
