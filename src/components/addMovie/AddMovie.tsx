import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import CollapsibleCard from "../shared/collapsibleCard/CollapsibleCard";
import AddMovieForm from "./addMovieForm/AddMovieForm";

const AddMovie: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();

	const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);

	return (
		<CollapsibleCard isOpen={isOpen} onClick={toggle} title={t("addMovie")}>
			<AddMovieForm />
		</CollapsibleCard>
	);
};

export default AddMovie;
