import axios from 'axios'

export function fetchMonthly() {
	return function (dispatch) {
		dispatch({ type: 'LOAD_DATA', payload: true })
		let monthly = {
			Maret: 0,
			April: 0,
			Mei: 0,
			Juni: 0,
			Juli: 0,
			Agustus: 0,
			September: 0,
			Oktober: 0,
			November: 0,
			Desember: 0,
		}
		let result = []
		axios({
			url: 'https://api.covid19api.com/country/indonesia/status/confirmed?from=2020-03-02T00:00:00Z&to=2020-12-31T00:00:00Z',
		})
			.then(({ data }) => {
				data.forEach((el) => {
					const date = el.Date.split('T')[0]
					let month = date[5] + date[6] + date[7] + date[8] + date[9]
					switch (month) {
						case '03-31':
							monthly.Maret += +el.Cases
							break
						case '04-30':
							monthly.April += +el.Cases
							break
						case '05-31':
							monthly.Mei += +el.Cases
							break
						case '06-30':
							monthly.Juni += +el.Cases
							break
						case '07-31':
							monthly.Juli += +el.Cases
							break
						case '08-31':
							monthly.Agustus += +el.Cases
							break
						case '09-30':
							monthly.September += +el.Cases
							break
						case '10-31':
							monthly.Oktober += +el.Cases
							break
						case '11-30':
							monthly.November += +el.Cases
							break
						case '12-31':
							monthly.Desember += +el.Cases
							break
					}
				})
				let temp = []
				temp.push(monthly)
				temp.forEach((el) => {
					for (let key in el) {
						result.push(el[key])
					}
				})
				dispatch({ type: 'MONTHLY_VALUE', payload: result })
			})
			.catch((err) => {
				console.log(err)
			})
			.finally(() => {
				dispatch({ type: 'LOAD_DATA', payload: false })
			})
	}
}

export function fetchByProvince() {
	return function (dispatch) {
		dispatch({ type: 'LOAD_DATA', payload: true })
		let result = []
		axios({
			url: 'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
		})
			.then(({ data }) => {
				data.features.forEach((el) => {
					result.push(el.attributes)
				})
				dispatch({ type: 'PROVINCE_DATA', payload: result })
			})
			.catch((err) => {
				console.log(err)
			})
			.finally(() => {
				dispatch({ type: 'LOAD_DATA', payload: false })
			})
	}
}

export function login(email, password, token) {
	return function (dispatch) {
		axios({
			url: 'https://ayodhya-dev.qlue.id/api/auths/login',
			method: 'POST',
			data: {
				email,
				password,
				fcm_token: token,
			},
		})
			.then(({ data }) => {
				localStorage.setItem('access_token', data.token.access_token)
				dispatch({ type: 'LOGIN' })
			})
			.catch(console.log)
	}
}

export function authenticated() {
	return function (dispatch) {
		dispatch({ type: 'AUTHENTICATED' })
	}
}

export function logout() {
	return function (dispatch) {
		dispatch({ type: 'LOGOUT' })
	}
}
