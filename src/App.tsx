import React, { FC, useEffect, useState } from "react";
import logo from "./assets/LOGO.svg";
import "./App.scss";
import Container from "./components/shared/container/Container";
import Movies from "./components/movies/Movies";
import Divider from "./components/shared/divider/Divider";
import AddMovie from "./components/addMovie/AddMovie";
import { useTranslation } from "react-i18next";
import {
	getMovies,
	getMoviesFromStorage,
	setMovieInStorage,
	setMoviesInStorage,
} from "./api/movie/movie";
import { IMovie } from "./api/movie/types";

const App: FC = () => {
	const { t } = useTranslation();
	const [movies, setMovies] = useState<IMovie[]>([]);
	const [moviesToRender, setMoviesToRender] = useState<IMovie[]>([]);

	useEffect(() => {
		getMovies().then((movies) => {
			if (movies) {
				setMovies(movies);

				const cacheMovies = getMoviesFromStorage() || [];
				if (cacheMovies.length <= 0) {
					setMoviesInStorage(movies);
				}
			}
		});
	}, []);

	useEffect(() => {
		const cacheMovies = getMoviesFromStorage() || [];

		if (movies.length > cacheMovies.length) {
			setMoviesInStorage(movies);
		}

		const moviesToRender =
			cacheMovies.length > movies.length ? cacheMovies : movies;
		setMoviesToRender(moviesToRender);
	}, [movies]);

	const updateMovie = (movie: IMovie) => {
		setMovies((prev) => [...prev, movie]);
		setMovieInStorage(movie);
	};

	return (
		<div className="app">
			<Container>
				<img src={logo} alt="logo" className="logo" />
				<Movies movies={moviesToRender} />
				<Divider />
				<AddMovie updateMovie={updateMovie} />
				<div data-testid="footer" className="footer">
					<p>{t("copyright")}</p>
				</div>
			</Container>
		</div>
	);
};

export default App;
