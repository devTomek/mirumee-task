import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Movie from "./Movie";

jest.mock("react-i18next", () => ({
	useTranslation: () => ({
		t: jest.fn(),
	}),
}));

describe("Movie", () => {
	it("should render collapsed movie", () => {
		render(<Movie title="Planet 1" planetUrls={["url1", "url2"]} />);
		expect(screen.getByText(/Planet 1/)).toBeInTheDocument();
	});

	it("should render and unmount planets component", () => {
		render(<Movie title="Planet 1" planetUrls={["url1", "url2"]} />);
		const openButton = screen.getByRole("button");
		userEvent.click(openButton);
		expect(screen.getByTestId(/spinner/)).toBeInTheDocument();
		expect(screen.getByTestId(/planets/)).toBeInTheDocument();
		userEvent.click(openButton);
		expect(screen.queryByTestId(/planets/)).not.toBeInTheDocument();
	});
});
