import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChosenPlanets from "./ChosenPlanets";
import { mockPlanets } from "../../../../testUtils";
import { act } from "react-dom/test-utils";

describe("ChosenPlanets", () => {
	it("should render planets", () => {
		render(<ChosenPlanets onClick={jest.fn()} planets={mockPlanets} />);
		expect(screen.getByText(/planet 1/)).toBeInTheDocument();
		expect(screen.getByText(/planet 2/)).toBeInTheDocument();
	});

	it("should pass planet into onClick", () => {
		const onClick = jest.fn();
		render(<ChosenPlanets onClick={onClick} planets={mockPlanets} />);
		act(() => {
			userEvent.click(screen.getByText(/planet 1/));
		});
		expect(onClick).toHaveBeenCalledWith(mockPlanets[0]);
	});
});
