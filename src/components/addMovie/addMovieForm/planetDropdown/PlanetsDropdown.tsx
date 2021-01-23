import React, { FC, useEffect, useRef, useState } from "react";
import { getPlanets } from "../../../../api/planet/planet";
import { IPlanet } from "../../../../api/planet/types";
import Spinner from "../../../shared/spinner/Spinner";
import MagicDropdown from "./magicDropdown/MagicDropdown";
import "./PlanetsDropdown.scss";

interface IProps {
	searchValue: string;
	setChosenPlanet: (prevChosenPlanet: IPlanet) => void;
	clearPlanetInput: () => void;
}

const PlanetsDropdown: FC<IProps> = ({
	searchValue,
	setChosenPlanet,
	clearPlanetInput,
}) => {
	const searchTimeoutRef = useRef<NodeJS.Timeout>();
	const [planets, setPlanets] = useState<IPlanet[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!searchValue) {
			setPlanets([]);
			setIsLoading(false);
			return;
		}

		if (searchTimeoutRef.current) {
			clearTimeout(searchTimeoutRef.current);
		}
		setIsLoading(true);
		const getPlanetsData = () =>
			getPlanets(searchValue).then((res) => {
				setPlanets(res || []);
				setIsLoading(false);
			});
		searchTimeoutRef.current = setTimeout(getPlanetsData, 500);

		return () => {
			if (searchTimeoutRef.current) {
				clearTimeout(searchTimeoutRef.current);
			}
		};
	}, [searchValue]);

	const onPlanetSelect = (planet: IPlanet) => {
		setChosenPlanet(planet);
		setPlanets([]);
		clearPlanetInput();
	};

	if (isLoading)
		return (
			<div className="spinner-wrapper">
				<Spinner />
			</div>
		);

	if (planets.length <= 0) return null;

	return <MagicDropdown planets={planets} onClick={onPlanetSelect} />;
};

export default PlanetsDropdown;
