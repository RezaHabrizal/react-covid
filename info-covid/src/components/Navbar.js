import { useState } from 'react'
import ToggleDarkMode from './DarkModeToggle'
import { Link } from 'react-router-dom'
import { logout } from '../store/action'
import { useDispatch } from 'react-redux'

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const dispatch = useDispatch()

	const handleToggle = () => {
		setToggleMenu(!toggleMenu)
	}

	const handleLogout = () => {
		dispatch(logout())
		localStorage.removeItem('access_token')
	}

	return (
		<header className="sticky top-0 z-50 bg-gray-300 border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 dark:bg-gray-800">
			<div className="flex items-center justify-between mb-4 md:mb-0">
				<h1 className="leading-none text-2xl">
					<div className="font-mono font-extrabold no-underline">
						<span className="text-yellow-400">I</span>
						<span className="text-blue-500">N</span>
						<span className="text-yellow-400">F</span>
						<span className="text-blue-400">O</span>
						<span className="dark:text-white">COVID - 19</span>
					</div>
				</h1>
			</div>
			<ToggleDarkMode />
			<div className="block md:hidden">
				<button
					onClick={() => handleToggle()}
					className="flex items-center rounded mb-2 mt-2 px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-purple-600 focus:ring-opacity-60"
				>
					<svg
						className="fill-current h-4 w-4"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<nav>
				<ul
					className={
						toggleMenu
							? 'list-reset font-mono md:flex hidden md:items-center dark:text-gray-200'
							: 'list-reset font-mono md:flex md:items-center dark:text-gray-200'
					}
				>
					<li className="md:ml-4">
						<Link to={'/'}>
							<div className="block no-underline hover:underline py-2 text-grey-darkest md:border-none md:p-0">
								Home Page
							</div>
						</Link>
					</li>
					<li className="md:ml-4">
						<Link to={'/detail-province'}>
							<div className="border-t block no-underline hover:underline py-2 text-grey-darkest md:border-none md:p-0">
								Kasus by Provinsi
							</div>
						</Link>
					</li>
					<li className="md:ml-4">
						<button
							onClick={() => handleLogout()}
							className="border-t block no-underline hover:underline py-2 text-grey-darkest md:border-none md:p-0"
						>
							Log Out
						</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
