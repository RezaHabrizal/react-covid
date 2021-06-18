import { useState, useEffect } from 'react'
export default function ToggleDarkMode() {
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		document.querySelector('html').classList.add(theme)
		if (theme === 'light') {
			document.querySelector('html').classList.remove('dark')
		} else {
			document.querySelector('html').classList.remove('light')
		}
	}, [theme])

	const setThemeToggle = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<label className="">
			<input
				className="toggle-checkbox"
				type="checkbox"
				onClick={setThemeToggle}
			></input>
			<div className="toggle-slot" style={{ cursor: 'pointer' }}>
				<div className="sun-icon-wrapper">
					<div
						className="iconify sun-icon"
						data-icon="feather-sun"
						data-inline="false"
					></div>
				</div>
				<div className="toggle-button"></div>
				<div className="moon-icon-wrapper">
					<div
						className="iconify moon-icon"
						data-icon="feather-moon"
						data-inline="false"
					></div>
				</div>
			</div>
		</label>
	)
}
