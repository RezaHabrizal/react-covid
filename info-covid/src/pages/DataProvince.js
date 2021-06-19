import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchByProvince } from '../store/action'
import PaginationTable from '../components/PaginationTable'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'

export default function DetailPage() {
	const dispatch = useDispatch()
	const loading = useSelector((state) => state.loading)
	useEffect(() => {
		dispatch(fetchByProvince())
	}, [])

	if (loading) {
		return <Loading />
	}

	return (
		<>
			<Navbar />
			<PaginationTable />
		</>
	)
}
