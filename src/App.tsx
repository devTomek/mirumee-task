import React, { FC } from "react";
import logo from "./assets/LOGO.svg";
import "./App.scss";
import Container from "./components/shared/container/Container";
import Movies from "./components/movies/Movies";
import Divider from "./components/shared/divider/Divider";
import AddMovie from "./components/addMovie/AddMovie";
import { useTranslation } from "react-i18next";

const App: FC = () => {
	const { t } = useTranslation();

	return (
		<div className="app">
			<Container>
				<img src={logo} alt="logo" className="logo" />
				<Movies />
				<Divider />
				<AddMovie />
				<div className="footer">
					<p>{t("copyright")}</p>
				</div>
			</Container>
		</div>
	);
};

export default App;
