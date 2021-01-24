import React from "react";
import { render, screen } from "@testing-library/react";
import CollapsibleCard from "./CollapsibleCard";

describe("CollapsibleCard", () => {
	it("should render collapsed card", () => {
		render(
			<CollapsibleCard isOpen={false} onClick={jest.fn()} title="title">
				ImInCard
			</CollapsibleCard>
		);
		expect(screen.getByText(/title/)).toBeInTheDocument();
		expect(screen.getByAltText(/arrowButton/)).toBeInTheDocument();
		expect(screen.queryByText(/ImInCard/)).not.toBeInTheDocument();
	});

	it("should render open card", () => {
		render(
			<CollapsibleCard isOpen={true} onClick={jest.fn()} title="title">
				ImInCard
			</CollapsibleCard>
		);
		expect(screen.getByText(/title/)).toBeInTheDocument();
		expect(screen.getByAltText(/arrowButton/)).toBeInTheDocument();
		expect(screen.queryByText(/ImInCard/)).toBeInTheDocument();
	});
});
