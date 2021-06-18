import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchByProvince } from '../store/action'
import PaginationTable from '../components/PaginationTable'

export default function DetailPage() {
	const data = useSelector((state) => state.provinceData)
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
			<PaginationTable />
		</>
	)
}
