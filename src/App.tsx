import React, { FC } from "react";
import logo from "./assets/LOGO.svg";
import "./App.scss";
import Container from "./components/shared/container/Container";
import Movies from "./components/movies/Movies";
import Divider from "./components/shared/divider/Divider";

const App: FC = () => {
	return (
		<div className="app">
			<Container>
				<img src={logo} alt="logo" className="logo" />
				<Movies />
				<Divider />
			</Container>
		</div>
	);
};

export default App;
