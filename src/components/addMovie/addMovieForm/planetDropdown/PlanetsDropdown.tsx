import React, { FC, useEffect, useRef, useState } from "react";
import { getPlanets } from "../../../../api/planet/planet";
import Dropdown from "../../../shared/dropdown/Dropdown";
import { IDropdownOption } from "../../../shared/dropdown/types";

interface IProps {
	searchValue: string;
	setChosenPlanets: (prevChosenPlanets: string[]) => void;
}

const PlanetsDropdown: FC<IProps> = ({ searchValue, setChosenPlanets }) => {
	const searchTimeoutRef = useRef<NodeJS.Timeout>();
	const [planetOptions, setPlanetOptions] = useState<IDropdownOption[]>([]);

	useEffect(() => {
		if (!searchValue) return;

		if (searchTimeoutRef.current) {
			clearTimeout(searchTimeoutRef.current);
		}
		const getPlanetsData = () =>
			getPlanets(searchValue).then((res) => {
				const options = res?.map(({ name, url }) => ({
					label: name,
					value: url || "",
				}));
				setPlanetOptions(options || []);
			});
		searchTimeoutRef.current = setTimeout(getPlanetsData, 500);

		return () => {
			if (searchTimeoutRef.current) {
				clearTimeout(searchTimeoutRef.current);
			}
		};
	}, [searchValue]);

	const handleDropdownChange = (option: IDropdownOption) => {
		// @ts-ignore
		setChosenPlanets((prevChosenPlanets) => [
			...prevChosenPlanets,
			option.value,
		]);
	};

	return <Dropdown options={planetOptions} onChange={handleDropdownChange} />;
};

export default PlanetsDropdown;
