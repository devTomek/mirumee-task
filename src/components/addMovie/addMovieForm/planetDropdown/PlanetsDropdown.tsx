import React, { FC, useEffect, useRef, useState } from "react";
import { getPlanets } from "../../../../api/planet/planet";
import Spinner from "../../../shared/spinner/Spinner";
import MagicDropdown from "./magicDropdown/MagicDropdown";

interface IProps {
	searchValue: string;
	// setChosenPlanets: (prevChosenPlanets: string[]) => void;
	setChosenPlanet: (prevChosenPlanet: string) => void;
}

const PlanetsDropdown: FC<IProps> = ({ searchValue, setChosenPlanet }) => {
	const searchTimeoutRef = useRef<NodeJS.Timeout>();
	const [planetNames, setPlanetNames] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!searchValue) {
			setPlanetNames([]);
			setIsLoading(false);
			return;
		}

		if (searchTimeoutRef.current) {
			clearTimeout(searchTimeoutRef.current);
		}
		setIsLoading(true);
		const getPlanetsData = () =>
			getPlanets(searchValue).then((res) => {
				const names = res?.map(({ name }) => name);
				setPlanetNames(names || []);
				setIsLoading(false);
			});
		searchTimeoutRef.current = setTimeout(getPlanetsData, 500);

		return () => {
			if (searchTimeoutRef.current) {
				clearTimeout(searchTimeoutRef.current);
			}
		};
	}, [searchValue]);

	const onPlanetSelect = (planetName: string) => {
		setChosenPlanet(planetName);
	};

	if (isLoading) return <Spinner />;

	if (planetNames.length <= 0) return null;

	return <MagicDropdown planetNames={planetNames} onClick={onPlanetSelect} />;
};

export default PlanetsDropdown;
