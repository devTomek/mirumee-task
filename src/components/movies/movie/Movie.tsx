import React, { FC, useState } from "react";
import CollapsibleCard from "../../shared/collapsibleCard/CollapsibleCard";
import Planets from "./planets/Planets";

interface IProps {
	title: string;
	planetUrls: string[];
}

const Movie: FC<IProps> = ({ title, planetUrls }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<CollapsibleCard title={title} onClick={toggle} isOpen={isOpen}>
			<Planets planetUrls={planetUrls} />
		</CollapsibleCard>
	);
};

export default Movie;
