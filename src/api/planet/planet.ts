import { get } from "../api";
import { IPlanet } from "./types";

export const PLANETS_URL = "/planets";

export const getPlanets = (query = "") => {
	return get<IPlanet[]>(`${PLANETS_URL}/?search=${query}`);
};

export const getPlanet = async (id: string): Promise<IPlanet> => {
	const planet = await get<IPlanet>(`${PLANETS_URL}/${id}`);
	return {
		name: planet?.name || "",
		rotation_period: planet?.rotation_period || "",
		orbital_period: planet?.orbital_period || "",
		diameter: planet?.climate || "",
		climate: planet?.climate || "",
		surface_water: planet?.surface_water || "",
		population: planet?.population || "",
	};
};
