import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DataProvince from './pages/DataProvince'
import LoginPage from './pages/LoginPage'
import RouteGuard from './components/RouteGuard'
import React, { useEffect } from 'react'
import { authenticated } from './store/action'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
	const isAuthenticated = store.getState().isAuthenticated

	useEffect(() => {
		if (localStorage.access_token) {
			store.dispatch(authenticated())
		}
	}, [])

	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<RouteGuard
						exact
						path="/"
						component={HomePage}
						auth={isAuthenticated}
					/>
					<RouteGuard
						path="/detail-province"
						component={DataProvince}
						auth={isAuthenticated}
					/>
					<Route path="/login" component={LoginPage} />
				</Switch>
			</Router>
		</Provider>
	)
}

export default App
