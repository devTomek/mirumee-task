import React, { FC } from "react";
import "./Spinner.scss";
import spinner from "../../../assets/SPINNER.svg";

const Spinner: FC = () => {
	return (
		<div className="spinner">
			<img src={spinner} alt="spinner" />
		</div>
	);
};

export default Spinner;
