import React, { FC } from "react";
import Button from "../../../shared/button/Button";

interface IProps {
	planets: string[];
}

const ChosenPlanets: FC<IProps> = ({ planets }) => {
	return (
		<div className="chosen-planets">
			{planets.map((planet) => (
				<Button key={planet} type="button">
					{planet}
				</Button>
			))}
		</div>
	);
};

export default ChosenPlanets;
