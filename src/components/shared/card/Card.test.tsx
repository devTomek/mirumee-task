import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
	it("should render children", () => {
		render(<Card>ImInCard</Card>);
		expect(screen.getByText(/ImInCard/)).toBeInTheDocument();
	});
});
