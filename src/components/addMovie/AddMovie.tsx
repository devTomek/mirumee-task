import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { IMovie } from "../../api/movie/types";
import CollapsibleCard from "../shared/collapsibleCard/CollapsibleCard";
import AddMovieForm from "./addMovieForm/AddMovieForm";

interface IProps {
	updateMovies: (prevMovies: IMovie[]) => void;
}

const AddMovie: FC<IProps> = ({ updateMovies }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);

	return (
		<CollapsibleCard isOpen={isOpen} onClick={toggle} title={t("addMovie")}>
			<AddMovieForm updateMovies={updateMovies} />
		</CollapsibleCard>
	);
};

export default AddMovie;
