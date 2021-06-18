import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { fetchMonthly } from '../store/action'
import { useHistory } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function HomePage() {
	const dispatch = useDispatch()
	const loading = useSelector((state) => state.loading)
	const monthlyValue = useSelector((state) => state.monthlyValue)
	const history = useHistory()
	useEffect(() => {
		dispatch(fetchMonthly())
	}, [])

	if (loading) {
		return <h1>Loading......</h1>
	}

	const dataGraph = {
		labels: [
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		datasets: [
			{
				label: 'Cases In Indonesia 2020',
				data: monthlyValue,
				fill: false,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
				tension: 0.1,
			},
		],
	}

	return (
		<>
			<Navbar />
			<Card />
			<div className="mt-50 flex justify-center">
				<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 dark:text-white dark:bg-gray-800">
					<Bar data={dataGraph} />
				</div>
			</div>
		</>
	)
}
