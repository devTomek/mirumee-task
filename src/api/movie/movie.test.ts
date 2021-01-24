import { mockMovies } from "../../testUtils";
import {
	getMovies,
	getMoviesFromStorage,
	setMovieInStorage,
	setMoviesInStorage,
} from "./movie";
import { IMovie } from "./types";

jest.mock("../api", () => ({
	get: () => mockMovies,
}));

describe("getMovies", () => {
	it("should return movies", () => {
		expect(getMovies()).toEqual(mockMovies);
	});
});

describe("local storage", () => {
	beforeEach(() => {
		localStorage.setItem("movies", JSON.stringify(mockMovies));
	});

	describe("setMoviesInStorage", () => {
		it("should save movies in local storage", () => {
			localStorage.setItem("movies", "");
			setMoviesInStorage(mockMovies);
			expect(globalThis.localStorage.movies).toEqual(
				JSON.stringify(mockMovies)
			);
		});
	});

	describe("setMovieInStorage", () => {
		it("should save movie in local storage", () => {
			const movie = { title: "new movie", planets: ["url1", "url2"] };
			setMovieInStorage(movie);
			const movies: IMovie[] = JSON.parse(globalThis.localStorage.movies);
			const index = movies.findIndex((mov) => mov.title === movie.title);
			expect(movies[index]).toEqual(movie);
		});
	});

	describe("getMoviesFromStorage", () => {
		it("should return movies from local storage", () => {
			expect(getMoviesFromStorage()).toEqual(mockMovies);
		});
	});
});
