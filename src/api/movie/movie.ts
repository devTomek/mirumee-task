import { get } from "../api";
import { IMovie } from "./types";

export const MOVIES_URL = "/films";

export const getMovies = () => get<IMovie[]>(MOVIES_URL);

export const setMoviesInStorage = (movies: IMovie[]) => {
	return localStorage.setItem("movies", JSON.stringify(movies));
};

export const setMovieInStorage = (movie: IMovie) => {
	const movies = getMoviesFromStorage();
	if (movies) {
		localStorage.setItem("movies", JSON.stringify([...movies, movie]));
	}
};

export const getMoviesFromStorage = (): IMovie[] | undefined => {
	const moviesStr = localStorage.getItem("movies");
	if (moviesStr) {
		return JSON.parse(moviesStr);
	}
};
