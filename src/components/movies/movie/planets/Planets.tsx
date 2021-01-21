import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
	const { t } = useTranslation();

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
				Header: t(column),
				accessor: column,
			}));
			setColumns(cols);
		}
	}, [planets, t]);

	return <Table data={planets} columns={columns} />;
};

export default Planets;
