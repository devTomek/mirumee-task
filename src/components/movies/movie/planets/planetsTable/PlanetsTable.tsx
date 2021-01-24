import React, { FC } from "react";
import "./PlanetsTable.scss";
import { Column, useSortBy, useTable } from "react-table";
import { IPlanet } from "../../../../../api/planet/types";

interface IProps {
	data: IPlanet[];
	columns: Column<IPlanet>[];
}

const PlanetsTable: FC<IProps> = ({ data, columns }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data }, useSortBy);

	//▼ ▲
	return (
		<div data-testid="planets-table" className="planets-table">
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								// @ts-ignore
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									<div className="header-content">
										{column.render("Header")}
										<span className="arrow">
											{/* @ts-ignore */}
											{column.isSorted ? (
												// @ts-ignore
												column.isSortedDesc ? (
													<>
														<div className="arrow-up">▲</div>
														<div className="arrow-down teal">▼</div>
													</>
												) : (
													<>
														<div className="arrow-up teal">▲</div>
														<div className="arrow-down">▼</div>
													</>
												)
											) : (
												<>
													<div className="arrow-up">▲</div>
													<div className="arrow-down">▼</div>
												</>
											)}
										</span>
									</div>
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
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default PlanetsTable;
