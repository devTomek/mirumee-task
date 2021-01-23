import React, { FC } from "react";
import { IPlanet } from "../../../../api/planet/types";
import CancellableButton from "../../../shared/cancellableButton/CancellableButton";
import "./ChosenPlanets.scss";

interface IProps {
	planets: IPlanet[];
	onClick: (planet: IPlanet) => void;
}

const ChosenPlanets: FC<IProps> = ({ planets, onClick }) => {
	return (
		<div className="chosen-planets">
			{planets.map((planet) => (
				<div key={planet.name} className="button-wrapper">
					<CancellableButton type="button" onClick={() => onClick(planet)}>
						{planet.name}
					</CancellableButton>
				</div>
			))}
		</div>
	);
};

export default ChosenPlanets;
