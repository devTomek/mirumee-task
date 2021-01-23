import React, { FC } from "react";
import "./MagicDropdown.scss";

interface IProps {
	planetNames: string[];
	onClick: (planetName: string) => void;
}

const MagicDropdown: FC<IProps> = ({ planetNames, onClick }) => {
	return (
		<div className="magic-dropdown">
			{planetNames.map((planetName) => (
				<div
					key={planetName}
					className="planet-name"
					onClick={() => onClick(planetName)}
				>
					{planetName}
				</div>
			))}
		</div>
	);
};

export default MagicDropdown;
