import React, { FC } from "react";
import CancellableButton from "../../../shared/cancellableButton/CancellableButton";
import "./ChosenPlanets.scss";

interface IProps {
	planets: string[];
	onClick: (planet: string) => void;
}

const ChosenPlanets: FC<IProps> = ({ planets, onClick }) => {
	return (
		<div className="chosen-planets">
			{planets.map((planet) => (
				<div key={planet} className="button-wrapper">
					<CancellableButton type="button" onClick={() => onClick(planet)}>
						{planet}
					</CancellableButton>
				</div>
			))}
		</div>
	);
};

export default ChosenPlanets;
