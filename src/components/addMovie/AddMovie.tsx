import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { IMovie } from "../../api/movie/types";
import CollapsibleCard from "../shared/collapsibleCard/CollapsibleCard";
import AddMovieForm from "./addMovieForm/AddMovieForm";

interface IProps {
	updateMovie: (prevMovie: IMovie) => void;
}

const AddMovie: FC<IProps> = ({ updateMovie }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);

	return (
		<span data-testid="add-movie">
			<CollapsibleCard isOpen={isOpen} onClick={toggle} title={t("addMovie")}>
				<AddMovieForm updateMovie={updateMovie} />
			</CollapsibleCard>
		</span>
	);
};

export default AddMovie;
