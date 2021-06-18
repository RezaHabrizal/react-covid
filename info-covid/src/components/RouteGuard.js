import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export default function RouteGuard({ component: Component, auth, ...rest }) {
	const isAuthenticated = useSelector((state) => state.isAuthenticated)
	return (
		<Route
			{...rest}
			render={({ location }) => {
				return isAuthenticated === true ? (
					<Component></Component>
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}}
		/>
	)
}
