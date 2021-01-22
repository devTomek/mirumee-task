import React, { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../shared/input/Input";
import { useTranslation } from "react-i18next";
import search from "../../../assets/SEARCH.svg";
import Button from "../../shared/button/Button";
import "./AddMovieForm.scss";

Yup.addMethod(Yup.string, "capitalLetter", function () {
	return this.transform(function (value, originalValue) {
		console.log({ value, originalValue });
		return "";
	});
});

const AddMovieForm: FC = () => {
	const { t } = useTranslation();
	const formik = useFormik({
		initialValues: {
			title: "",
			addPlanet: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.matches(
					/^[A-Z][a-z0-9_-]{3,19}$/,
					`${t("mustStartWithCapitalLetter")}.`
				)
				.required(t("Required")),
			addPlanet: Yup.string()
				.min(3, `${t("atLeastThreeCharacters")}.`)
				.required(t("Required")),
		}),
	});

	return (
		<div className="add-movie-form">
			<form onSubmit={formik.handleSubmit}>
				<div className="input-wrapper">
					<Input
						id="title"
						name="title"
						onChange={formik.handleChange}
						value={formik.values.title}
						placeholder={t("enterMovieTitle")}
						label={t("movieTitle")}
						errorText={
							formik.touched.title && formik.errors.title
								? formik.errors.title
								: ""
						}
					/>
				</div>
				<div className="input-wrapper">
					<Input
						id="addPlanet"
						name="addPlanet"
						onChange={formik.handleChange}
						value={formik.values.addPlanet}
						placeholder={t("searchPlanet")}
						label={t("addPlanet")}
						icon={search}
						errorText={
							formik.touched.addPlanet && formik.errors.addPlanet
								? formik.errors.addPlanet
								: ""
						}
					/>
				</div>
				<div className="button-wrapper">
					<Button type="submit">{t("addMovie")}</Button>
				</div>
			</form>
		</div>
	);
};

export default AddMovieForm;
