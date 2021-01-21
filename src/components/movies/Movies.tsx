import React, { FC, useEffect, useState } from "react";
import { getMovies } from "../../api/movie/movie";
import { IMovie } from "../../api/movie/types";
import Movie from "./movie/Movie";

const Movies: FC = () => {
	const [movies, setMovies] = useState<IMovie[]>([]);

	useEffect(() => {
		getMovies().then((movies) => {
			setMovies(movies || []);
		});
	}, []);

	return (
		<>
			{movies.map(({ title, planets }) => (
				<Movie key={title} title={title} planetUrls={planets} />
			))}
		</>
	);
};

export default Movies;
