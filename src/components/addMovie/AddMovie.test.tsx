import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddMovie from "./AddMovie";

jest.mock("react-i18next", () => ({
	useTranslation: () => ({
		t: () => "Add Movie",
	}),
}));

describe("AddMovie", () => {
	it("should render collapsed add movie component", () => {
		render(<AddMovie updateMovie={jest.fn()} />);
		expect(screen.getByText(/Add Movie/)).toBeInTheDocument();
	});

	it("should render and unmount add movie form", () => {
		render(<AddMovie updateMovie={jest.fn()} />);
		const openButton = screen.getByRole("button");
		userEvent.click(openButton);
		expect(screen.getByTestId(/add-movie-form/)).toBeInTheDocument();
		userEvent.click(openButton);
		expect(screen.queryByTestId(/add-movie-form/)).not.toBeInTheDocument();
	});
});
