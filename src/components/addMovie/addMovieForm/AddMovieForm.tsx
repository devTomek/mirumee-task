import React, { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../shared/input/Input";
import { useTranslation } from "react-i18next";
import search from "../../../assets/SEARCH.svg";
import Button from "../../shared/button/Button";
import "./AddMovieForm.scss";

const AddMovieForm: FC = () => {
	const { t } = useTranslation();
	const formik = useFormik({
		initialValues: {
			movieTitle: "",
			planet: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
		validationSchema: Yup.object({
			movieTitle: Yup.string()
				.test("test-name", `${t("mustStartWithCapitalLetter")}.`, function () {
					// @ts-ignore
					return !!this.originalValue?.slice(0, 1).match(/[A-Z]/);
				})
				.min(3, `${t("atLeastThreeCharacters")}.`)
				.required(t("Required")),
			planet: Yup.string().required(t("Required")),
		}),
	});
	const buttonDisabled =
		!!(formik.touched.movieTitle && formik.errors.movieTitle) ||
		!!(formik.touched.planet && formik.errors.planet);

	return (
		<div className="add-movie-form">
			<form onSubmit={formik.handleSubmit}>
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
				<div className="input-wrapper">
					<Input
						id="planet"
						name="planet"
						onChange={formik.handleChange}
						value={formik.values.planet}
						placeholder={t("searchPlanet")}
						label={t("addPlanet")}
						icon={search}
						errorText={
							formik.touched.planet && formik.errors.planet
								? formik.errors.planet
								: ""
						}
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
