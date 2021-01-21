import React, { FC, useEffect, useState } from "react";
import "./Planets.scss";
import { Column } from "react-table";
import { getPlanet } from "../../../../api/planet/planet";
import { IPlanet } from "../../../../api/planet/types";
import Table from "./table/Table";

interface IProps {
	planetUrls: string[];
}

const Planets: FC<IProps> = ({ planetUrls }) => {
	const [planets, setPlanets] = useState<IPlanet[]>([]);
	const [columns, setColumns] = useState<Column<IPlanet>[]>([]);

	useEffect(() => {
		const planetPromises = planetUrls.map((url) => {
			const urlParts = url.split("/");
			const lastPartIndex = urlParts.length - 1;
			const id = urlParts[lastPartIndex] || urlParts[lastPartIndex - 1];
			return getPlanet(id);
		});
		Promise.all(planetPromises as Promise<IPlanet>[]).then((res) => {
			setPlanets(res || []);
		});
	}, [planetUrls]);

	useEffect(() => {
		const planet = planets[0];
		if (planet) {
			// @ts-ignore
			const cols: Column<IPlanet>[] = Object.keys(planet).map((column) => ({
				Header: column,
				accessor: column,
			}));
			setColumns(cols);
		}
	}, [planets]);

	return (
		<div className="planets">
			<Table data={planets} columns={columns} />
		</div>
	);
};

export default Planets;
