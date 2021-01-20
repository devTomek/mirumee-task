import React, { FC, useEffect, useMemo, useState } from "react";
import { IPlanet } from "../../api/planet/types";
import CollapsibleCard from "../shared/collapsibleCard/CollapsibleCard";
import Table from "./table/Table";

interface IProps {
	title: string;
	planets: IPlanet[];
}

const Movie: FC<IProps> = ({ title, planets }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	useEffect(() => {});

	return (
		<CollapsibleCard title={title} onClick={toggle} isOpen={isOpen}>
			{/* <Table data={rows} columns={columns} /> */}
		</CollapsibleCard>
	);
};

export default Movie;
