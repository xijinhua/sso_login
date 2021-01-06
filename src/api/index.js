import urls from './urls'
import axios from './http.js'
/** 
调用:
this.api(params,isFormData,id).then(res).catch()....
参数:   
params: Object(参数) eg:{ticker:000001.OF,name:'华夏xxxxx基金'},若无参数,有id,需填写：null
isFormData:Boolean(是否为表单提交)，默认为false
id:String or Number (主要适合restful 接口)，eg：url是这种：/api/v1/get_ticker_list/:id
 */
let apis = {}
for (let key in urls) {
	let { method, url, config } = urls[key]
	apis[key] = function(params, isFormData = false, id) {
		let newParams = {}
		if (params && isFormData) {
			//form-data 判断
			newParams = new FormData()
			for (let i in params) {
				newParams.append(i, params[i])
			}
		} else {
			newParams = params
		}
		if (method === 'post' || method === 'put') {
			try {
				if (typeof id == 'string' || typeof id == 'number') {
					return axios[method](`${url}/${id}`, newParams, config)
				} else {
					return axios[method](url, newParams, config)
				}
			} catch (e) {
				return e
			}
		} else {
			try {
				if (typeof id == 'string' || typeof id == 'number') {
					return axios[method](`${url}/${id}`, {
						params: newParams,
					})
				} else {
					return axios[method](`${url}`, { params: newParams })
				}
			} catch (e) {
				return e
			}
		}
	}
}
export default apis
