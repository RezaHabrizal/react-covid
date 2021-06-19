import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let initalState = {
	provinceData: [],
	loading: false,
	monthlyData: [],
	monthlyValue: [],
	isAuthenticated: false,
	provinceGeo: [],
}

function reducer(state = initalState, action) {
	const { type, payload } = action
	switch (type) {
		case 'PROVINCE_DATA':
			return { ...state, provinceData: payload }
		case 'LOAD_DATA':
			return { ...state, loading: payload }
		case 'MONTHLY_DATA':
			return { ...state, monthlyData: payload }
		case 'MONTHLY_VALUE':
			return { ...state, monthlyValue: payload }
		case 'LOGIN':
			return { ...state, isAuthenticated: true }
		case 'AUTHENTICATED':
			return { ...state, isAuthenticated: true }
		case 'LOGOUT':
			return { ...state, isAuthenticated: false }
		case 'PROVINCE_GEOMETRY':
			return { ...state, provinceGeo: payload }
		default:
			return state
	}
}

let store = createStore(reducer, applyMiddleware(thunk))

export default store
