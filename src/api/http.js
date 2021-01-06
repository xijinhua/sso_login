import axios from 'axios'
import { white_list } from '@/assets/js/const'
axios.defaults.withCredentials = false
// http request 拦截器
axios.interceptors.request.use(
	(config) => {
		return config
	},
	() => {
		return Promise.reject({ msg: '请求服务出错！' })
	}
)

// http response 拦截器
axios.interceptors.response.use(
	(response) => {
		if (response.status === 200) {
			return response.data
		} else {
			return response
		}
	},
	(error) => {
		if (error.response) {
			switch (error.response.status) {
				case 403:
					break
				case 401:
					break
			}
		}
		return Promise.reject({ msg: '请求服务出错！' })
	}
)

export default axios
