import React, { FC } from "react";
import logo from "./assets/LOGO.svg";
import "./App.scss";
import Container from "./components/shared/container/Container";
import Movies from "./components/movies/Movies";

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
