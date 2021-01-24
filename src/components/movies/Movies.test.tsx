import React from "react";
import { render, screen } from "@testing-library/react";
import Movies from "./Movies";
import { mockMovies } from "../../testUtils";

describe("Movies", () => {
	it("should render movies", () => {
		render(<Movies movies={mockMovies} />);
		expect(screen.getByText(/Movie 1/)).toBeInTheDocument();
		expect(screen.getByText(/Movie 2/)).toBeInTheDocument();
	});
});
