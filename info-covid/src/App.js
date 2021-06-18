import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DataProvince from './pages/DataProvince'
function App() {
	// const [data, setData] = useState(null)
	// const [loading, setLoading] = useState(false)

	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/detail" component={DataProvince} />
			</Switch>
		</Router>
	)
}

export default App
