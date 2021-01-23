import React, { FC } from "react";
import { IMovie } from "../../api/movie/types";
import Movie from "./movie/Movie";

interface IProps {
	movies: IMovie[];
}

const Movies: FC<IProps> = ({ movies }) => {
	return (
		<>
			{movies.map(({ title, planets }) => (
				<Movie key={title} title={title} planetUrls={planets} />
			))}
		</>
	);
};

export default Movies;
