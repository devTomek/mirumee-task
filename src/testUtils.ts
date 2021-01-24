import { IMovie } from "./api/movie/types";
import { IPlanet } from "./api/planet/types";

export const mockMovies: IMovie[] = [
	{
		title: "Movie 1",
		planets: ["url1", "url2"],
	},
	{
		title: "Movie 2",
		planets: ["url1", "url2"],
	},
];

export const mockPlanets: IPlanet[] = [
	{
		name: "planet 1",
		climate: "climate 1",
		diameter: "diameter 1",
		orbital_period: "orbital period 1",
		population: "population 1",
		rotation_period: "rotation period 1",
		surface_water: "surface water 1",
		url: "url 1",
	},
	{
		name: "planet 2",
		climate: "climate 2",
		diameter: "diameter 2",
		orbital_period: "orbital period 2",
		population: "population 2",
		rotation_period: "rotation period 2",
		surface_water: "surface water 2",
		url: "url 2",
	},
];
