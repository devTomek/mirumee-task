import { render, screen } from "@testing-library/react";
import React from "react";
import Container from "./Container";

describe("Container", () => {
	it("should render children", () => {
		render(<Container>ImInContainer</Container>);
		expect(screen.getByText(/ImInContainer/)).toBeInTheDocument();
	});
});
