import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { mockMovies } from "./testUtils";

jest.mock("react-i18next", () => ({
	useTranslation: () => ({
		t: jest.fn(),
	}),
}));

jest.mock("./api/movie/movie", () => ({
	getMovies: () => new Promise((res) => res(mockMovies)),
	getMoviesFromStorage: () => mockMovies,
}));

describe("App", () => {
	it("should render application structure", async () => {
		render(<App />);
		expect(screen.getByAltText(/logo/)).toBeInTheDocument();
		expect(await screen.findByText(/Movie 1/)).toBeInTheDocument();
		expect(await screen.findByText(/Movie 2/)).toBeInTheDocument();
		expect(screen.getByTestId(/divider/)).toBeInTheDocument();
		expect(screen.getByTestId(/add-movie/)).toBeInTheDocument();
		expect(screen.getByTestId(/footer/)).toBeInTheDocument();
	});
});
