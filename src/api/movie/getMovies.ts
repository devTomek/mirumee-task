import { get } from "../api";
import { IMovie } from "./types";

export const getMovies = async (): Promise<IMovie[] | undefined> => {
	const movies = await get<IMovie[]>("https://swapi.dev/api/films");
	return movies?.map(({ planets, title }) => ({ planets, title }));
};
