import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let initalState = {
	provinceData: [],
	loading: false,
	monthlyData: [],
	monthlyValue: [],
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
		default:
			return state
	}
}

let store = createStore(reducer, applyMiddleware(thunk))

export default store
