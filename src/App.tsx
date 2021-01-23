import React, { FC, useEffect, useState } from "react";
import logo from "./assets/LOGO.svg";
import "./App.scss";
import Container from "./components/shared/container/Container";
import Movies from "./components/movies/Movies";
import Divider from "./components/shared/divider/Divider";
import AddMovie from "./components/addMovie/AddMovie";
import { useTranslation } from "react-i18next";
import { getMovies } from "./api/movie/movie";
import { IMovie } from "./api/movie/types";

const App: FC = () => {
	const { t } = useTranslation();
	const [movies, setMovies] = useState<IMovie[]>([]);

	useEffect(() => {
		getMovies().then((movies) => {
			setMovies(movies || []);
		});
	}, []);

	return (
		<div className="app">
			<Container>
				<img src={logo} alt="logo" className="logo" />
				<Movies movies={movies} />
				<Divider />
				<AddMovie updateMovies={setMovies} />
				<div className="footer">
					<p>{t("copyright")}</p>
				</div>
			</Container>
		</div>
	);
};

export default App;
