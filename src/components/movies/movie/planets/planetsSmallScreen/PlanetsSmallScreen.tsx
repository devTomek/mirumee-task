import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { IPlanet } from "../../../../../api/planet/types";
import "./PlanetsSmallScreen.scss";

interface IProps {
	planets: IPlanet[];
}

const PlanetsSmallScreen: FC<IProps> = ({ planets }) => {
	const { t } = useTranslation();

	return (
		<div className="planets-small-screen">
			{planets.map((planet) => (
				<div key={planet.name} className="planet-card">
					{Object.keys(planet).map((planetKey) => (
						<div key={planetKey} className="row">
							<div className="column">{t(planetKey)}</div>
							<div className={`column ${planetKey === "name" ? "teal" : ""}`}>
								{/* @ts-ignore */}
								{planet[planetKey]}
							</div>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default PlanetsSmallScreen;
