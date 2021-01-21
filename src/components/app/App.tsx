import React, { FC, useEffect, useState } from "react";
import logo from "../../assets/LOGO.svg";
import "./App.scss";
import { IMovie } from "../../api/movie/types";
import Movie from "../movie/Movie";
import Container from "../shared/container/Container";
import { getMovies } from "../../api/movie/movie";

const App: FC = () => {
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
				{movies.map(({ title, planets }) => (
					<Movie key={title} title={title} planetUrls={planets} />
				))}
			</Container>
		</div>
	);
};

export default App;
