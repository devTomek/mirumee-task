import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../shared/input/Input";
import { useTranslation } from "react-i18next";
import search from "../../../assets/SEARCH.svg";
import Button from "../../shared/button/Button";
import "./AddMovieForm.scss";
import PlanetsDropdown from "./planetDropdown/PlanetsDropdown";
import ChosenPlanets from "./chosenPlanets/ChosenPlanets";
import { IMovie } from "../../../api/movie/types";

const AddMovieForm: FC = () => {
	const { t } = useTranslation();
	const [chosenPlanets, setChosenPlanets] = useState<string[]>([]);
	const [chosenPlanet, setChosenPlanet] = useState("");
	const formik = useFormik({
		initialValues: {
			movieTitle: "",
			planet: "",
		},
		onSubmit: (values) => {
			const movie: IMovie = {
				title: values.movieTitle,
				planets: chosenPlanets,
			};
			alert(JSON.stringify(movie, null, 2));
			setChosenPlanets([]);
			formik.resetForm();
		},
		validationSchema: Yup.object({
			movieTitle: Yup.string()
				.test(
					"is-capital-letter",
					`${t("mustStartWithCapitalLetter")}.`,
					function () {
						// @ts-ignore
						return !!this.originalValue?.slice(0, 1).match(/[A-Z]/);
					}
				)
				.min(3, `${t("atLeastThreeCharacters")}.`)
				.required(t("required")),
		}),
	});
	const buttonDisabled =
		!!(formik.touched.movieTitle && formik.errors.movieTitle) ||
		!!(formik.touched.planet && formik.errors.planet);

	useEffect(() => {
		if (!chosenPlanet) return;

		setChosenPlanets((prevChosenPlanets) => {
			const isAlreadyThere = (prevChosenPlanet: string) => {
				return prevChosenPlanet === chosenPlanet;
			};
			if (!prevChosenPlanets.some(isAlreadyThere)) {
				return [...prevChosenPlanets, chosenPlanet];
			} else {
				return prevChosenPlanets;
			}
		});
	}, [chosenPlanet]);

	const clearPlanetInput = () => {
		formik.setFieldValue("planet", "");
	};

	const removePlanet = (planet: string) => {
		setChosenPlanets((prevChosenPlanets) => {
			const index = prevChosenPlanets.findIndex(
				(prevChosenPlanet) => prevChosenPlanet === planet
			);
			const clone = [...prevChosenPlanets];
			clone.splice(index, 1);
			return clone;
		});
	};

	return (
		<div className="add-movie-form">
			<form onSubmit={formik.handleSubmit} autoComplete="off">
				<div className="input-wrapper">
					<Input
						id="movieTitle"
						name="movieTitle"
						onChange={formik.handleChange}
						value={formik.values.movieTitle}
						placeholder={t("enterMovieTitle")}
						label={t("movieTitle")}
						errorText={
							formik.touched.movieTitle && formik.errors.movieTitle
								? formik.errors.movieTitle
								: ""
						}
					/>
				</div>
				{chosenPlanets.length > 0 ? (
					<ChosenPlanets planets={chosenPlanets} onClick={removePlanet} />
				) : null}
				<div className="input-wrapper planet-input">
					<Input
						id="planet"
						name="planet"
						onChange={formik.handleChange}
						value={formik.values.planet}
						placeholder={t("searchPlanet")}
						label={t("addPlanet")}
						icon={search}
						errorText={
							formik.touched.planet && chosenPlanets.length <= 0
								? t("required")
								: ""
						}
					/>
					<PlanetsDropdown
						searchValue={formik.values.planet}
						setChosenPlanet={setChosenPlanet}
						clearPlanetInput={clearPlanetInput}
					/>
				</div>
				<div className="button-wrapper">
					<Button disabled={buttonDisabled} type="submit">
						{t("addMovie")}
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AddMovieForm;
