import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchByProvince } from '../store/action'
import PaginationTable from '../components/PaginationTable'
import Navbar from '../components/Navbar'

export default function DetailPage() {
	const dispatch = useDispatch()
	const loading = useSelector((state) => state.loading)
	useEffect(() => {
		dispatch(fetchByProvince())
	}, [])

	if (loading) {
		return <h1>Loading......</h1>
	}

	return (
		<>
			<Navbar />
			<PaginationTable />
		</>
	)
}
