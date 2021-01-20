import React, { FC, useState } from "react";
import CollapsibleCard from "../shared/collapsibleCard/CollapsibleCard";

interface IProps {
	title: string;
}

const Movie: FC<IProps> = ({ title }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<CollapsibleCard title={title} onClick={toggle} isOpen={isOpen}>
			<div>{title} adhkdajsdhkjashkjdhkjashdjhaskdhjkashjkd</div>
			<div>{title} adhkdajsdhkjashkjdhkjashdjhaskdhjkashjkd</div>
			<div>{title} adhkdajsdhkjashkjdhkjashdjhaskdhjkashjkd</div>
		</CollapsibleCard>
	);
};

export default Movie;
