import axios from './http.js'
import jwtDecode from 'jwt-decode'
const qs = require('qs')
export default class Keycloak {
	option = null
	constructor(option) {
		this.option = option
	}
	static init(option) {
		return new Keycloak(option)
	}
	login = ({ username, password }) => {
		let { base_url, realm, client_id, client_secret } = this.option
		const url = `${base_url}/auth/realms/${realm}/protocol/openid-connect/token`
		const data = {
			username,
			password,
			grant_type: 'password',
			client_id,
			client_secret,
		}
		return new Promise((resolve, reject) => {
			axios
				.post(url, qs.stringify(data), {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				})
				.then((res) => {
					try {
						if ('access_token' in res) {
							sessionStorage.setItem('t_id', res.access_token)
							sessionStorage.setItem('r_id', res.refresh_token)
							let username = jwtDecode(res.access_token)
								.preferred_username
							sessionStorage.setItem('username', username)
							resolve(true)
						} else {
							resolve(false)
						}
					} catch (error) {
						reject(false)
					}
				})
				.catch((error) => {
					reject(error)
				})
		})
	}
	logout = () => {
		sessionStorage.clear()
		if (window && window.location.href.indexOf('login') === -1) {
			window.location.href = '/login?redirect=' + window.location.href
		}
	}
	refresh = (refresh_token) => {
		let { base_url, realm, client_id, client_secret } = this.option
		const url = `${base_url}/auth/realms/${realm}/protocol/openid-connect/token`
		const data = {
			grant_type: 'refresh_token',
			client_id,
			client_secret,
			refresh_token: refresh_token,
		}
		return new Promise((resolve, reject) => {
			axios
				.post(url, qs.stringify(data), {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				})
				.then((res) => {
					try {
						if ('access_token' in res) {
							sessionStorage.setItem('t_id', res.access_token)
							sessionStorage.setItem('r_id', res.refresh_token)
							let username = jwtDecode(res.access_token)
								.preferred_username
							sessionStorage.setItem('username', username)
							resolve(true)
						} else {
							resolve(false)
						}
					} catch (error) {
						reject(false)
					}
				})
				.catch((error) => {
					console.log(error)
				})
		})
	}
}
