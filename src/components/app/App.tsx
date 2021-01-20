import React, { FC, useEffect, useState } from "react";
import logo from "../../assets/LOGO.svg";
import "./App.scss";
import { IMovie } from "../../api/movie/types";
import Movie from "../movie/Movie";
import Container from "../shared/container/Container";

const App: FC = () => {
	const [movies, setMovies] = useState<IMovie[]>([]);

	useEffect(() => {
		const moviesArr = [];
		for (let i = 0; i <= 6; i++) {
			moviesArr.push({ title: `cardNumber${i}` });
		}
		setMovies(moviesArr);
	}, []);

	return (
		<div className="app">
			<Container>
				<img src={logo} alt="logo" className="logo" />
				{movies.map(({ title }) => (
					<Movie key={title} title={title} />
				))}
			</Container>
		</div>
	);
};

export default App;
