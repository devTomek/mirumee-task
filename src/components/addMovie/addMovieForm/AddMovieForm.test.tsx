import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddMovieForm from "./AddMovieForm";
import { act } from "react-dom/test-utils";

jest.mock("react-i18next", () => ({
	useTranslation: () => ({
		t: (text: string) => text,
	}),
}));

describe("AddMovieForm", () => {
	it("should render 2 inputs and button", () => {
		render(<AddMovieForm updateMovie={jest.fn()} />);
		expect(screen.getByPlaceholderText(/enterMovieTitle/)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/searchPlanet/)).toBeInTheDocument();
		expect(screen.getByText(/addMovie/)).toBeInTheDocument();
	});

	it("should render spinner and planets dropdown", async () => {
		render(<AddMovieForm updateMovie={jest.fn()} />);
		act(async () => {
			userEvent.type(screen.getByPlaceholderText(/searchPlanet/), "t");
			expect(screen.getByTestId(/spinner/)).toBeInTheDocument();
			expect(await screen.findByTestId(/planets-dropdown/)).toBeInTheDocument();
		});
	});

	it("should render chosen planets component", async () => {
		render(<AddMovieForm updateMovie={jest.fn()} />);
		act(async () => {
			userEvent.type(screen.getByPlaceholderText(/searchPlanet/), "t");
			userEvent.click(await screen.findByText(/Tatooine/));
			expect(screen.getByTestId(/chosen-planets/)).toBeInTheDocument();
		});
	});

	it("should clear form after submit", async () => {
		render(<AddMovieForm updateMovie={jest.fn()} />);
		act(async () => {
			userEvent.type(screen.getByPlaceholderText(/enterMovieTitle/), "t");
			userEvent.type(screen.getByPlaceholderText(/searchPlanet/), "t");
			userEvent.click(await screen.findByText(/Tatooine/));
			userEvent.click(screen.getByText(/addMovie/));
		});
		expect(screen.getByPlaceholderText(/enterMovieTitle/).textContent).toEqual(
			""
		);
		expect(screen.getByPlaceholderText(/searchPlanet/).textContent).toEqual("");
		expect(screen.queryByText(/Tatooing/)).not.toBeInTheDocument();
	});
});
