import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import { useSelector } from 'react-redux'
import { COLUMNS } from './Column'

export default function PaginationTable() {
	const dataProvince = useSelector((state) => state.provinceData)

	const columns = useMemo(() => COLUMNS, [])
	const data = useMemo(() => dataProvince, [])

	const tableInstance = useTable(
		{
			columns,
			data,
		},
		usePagination
	)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		prepareRow,
	} = tableInstance

	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
								})}
							</tr>
						)
					})}
					<tr>
						<td></td>
					</tr>
				</tbody>
			</table>
			<div>
				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
					previousPage
				</button>
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					nextPage
				</button>
			</div>
		</>
	)
}
