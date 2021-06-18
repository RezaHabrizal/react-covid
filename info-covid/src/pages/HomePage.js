import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { fetchMonthly } from '../store/action'
import { useHistory } from 'react-router-dom'

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
				label: 'Cases',
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

	const goDetail = () => {
		history.push('/detail')
	}

	return (
		<>
			<Bar height={75} data={dataGraph} />
			<button onClick={() => goDetail()}>DATA BY POVINSI</button>
		</>
	)
}
