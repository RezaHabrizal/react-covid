import { login } from '../store/action'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [token, setToken] = useState('')
	const isAuthenticated = useSelector((state) => state.isAuthenticated)

	if (isAuthenticated) {
		return <Redirect to={'/'} />
	}

	const handleLogin = () => {
		dispatch(login(email, password, token))
	}

	return (
		<div className="min-h-screen min-w-screen flex items-center justify-center bg-yellow-100">
			<div className="flex flex-col shadow-xl">
				<div className="py-6 px-14 bg-gradient-to-tr from-pink-500 to-pink-300 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
					<h2 className="text-white text-xs uppercase">
						don't miss out the latest info-covid
					</h2>
					<h4 className="text-white text-center font-bold text-xl">
						Free Information
						<br />
						Up Forward
					</h4>
				</div>
				<div className="flex flex-col py-6 px-8 space-y-5 bg-white">
					<input
						type="email"
						placeholder="Enter your email address"
						className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Enter your password"
						className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Enter your token"
						className="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent"
						value={token}
						onChange={(e) => setToken(e.target.value)}
					/>
					<button
						onClick={() => handleLogin()}
						className="w-full py-3 bg-pink-400 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-lg"
					>
						Sign In
					</button>
				</div>
			</div>
		</div>
	)
}
