import React, { FC } from "react";
import { IPlanet } from "../../../../../api/planet/types";
import "./MagicDropdown.scss";

interface IProps {
	planets: IPlanet[];
	onClick: (planet: IPlanet) => void;
}

const MagicDropdown: FC<IProps> = ({ planets, onClick }) => {
	return (
		<div className="magic-dropdown">
			{planets.map((planet) => (
				<div
					key={planet.name}
					className="planet-name"
					onClick={() => onClick(planet)}
				>
					{planet.name}
				</div>
			))}
		</div>
	);
};

export default MagicDropdown;
