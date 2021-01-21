import React, { FC } from "react";
import logo from "../../assets/LOGO.svg";
import "./App.scss";
import Container from "../shared/container/Container";
import Movies from "../movies/Movies";

const App: FC = () => {
	return (
		<div className="app">
			<Container>
				<img src={logo} alt="logo" className="logo" />
				<Movies />
			</Container>
		</div>
	);
};

export default App;
