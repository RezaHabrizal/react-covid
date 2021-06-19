import '../App.css'
import logo from '../logo.svg'

export default function Loading() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h5 className="text-gray-800">Loading...</h5>
			</header>
		</div>
	)
}
