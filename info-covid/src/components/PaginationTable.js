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
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table className="min-w-full leading-normal" {...getTableProps()}>
						<thead>
							{headerGroups.map((headerGroup) => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((column) => (
										<th
											className="dark:bg-gray-800 dark:text-white px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
											{...column.getHeaderProps()}
										>
											{column.render('Header')}
										</th>
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
											return (
												<td
													className="dark:bg-gray-800 dark:text-white px-5 py-5 border-b border-gray-200 bg-white text-sm"
													{...cell.getCellProps()}
												>
													{cell.render('Cell')}
												</td>
											)
										})}
									</tr>
								)
							})}
							<tr>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
				<div className="inline-flex mt-2 xs:mt-0">
					<button
						onClick={() => previousPage()}
						disabled={!canPreviousPage}
						className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l mr-2 dark:bg-gray-800 dark:text-white"
					>
						Prev
					</button>
					<button
						onClick={() => nextPage()}
						disabled={!canNextPage}
						className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r dark:bg-gray-800 dark:text-white"
					>
						Next
					</button>
				</div>
			</div>
		</>
	)
}
