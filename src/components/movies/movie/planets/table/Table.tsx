import React, { FC } from "react";
import { Column, useSortBy, useTable } from "react-table";
import { IPlanet } from "../../../../../api/planet/types";

interface IProps {
	data: IPlanet[];
	columns: Column<IPlanet>[];
}

const Table: FC<IProps> = ({ data, columns }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data }, useSortBy);

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							// @ts-ignore
							<th {...column.getHeaderProps(column.getSortByToggleProps())}>
								{column.render("Header")}
								<span>
									{/* @ts-ignore */}
									{column.isSorted
										? // @ts-ignore
										  column.isSortedDesc
											? " 🔽"
											: " 🔼"
										: ""}
								</span>
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
