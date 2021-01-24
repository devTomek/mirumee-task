import React from "react";
import { render, screen } from "@testing-library/react";
import PlanetsSmallScreen from "./PlanetsSmallScreen";
import { mockPlanets } from "../../../../../testUtils";

jest.mock("react-i18next", () => ({
	useTranslation: () => ({
		t: jest.fn(),
	}),
}));

describe("PlanetsSmallScreen", () => {
	it("should render planets data", () => {
		render(<PlanetsSmallScreen planets={mockPlanets} />);
		expect(screen.getByText(/planet 1/)).toBeInTheDocument();
		expect(screen.getByText(/climate 1/)).toBeInTheDocument();
		expect(screen.getByText(/diameter 1/)).toBeInTheDocument();
		expect(screen.getByText(/orbital period 1/)).toBeInTheDocument();
		expect(screen.getByText(/population 1/)).toBeInTheDocument();
		expect(screen.getByText(/rotation period 1/)).toBeInTheDocument();
		expect(screen.getByText(/surface water 1/)).toBeInTheDocument();
		expect(screen.getByText(/url 2/)).toBeInTheDocument();
		expect(screen.getByText(/planet 2/)).toBeInTheDocument();
		expect(screen.getByText(/climate 2/)).toBeInTheDocument();
		expect(screen.getByText(/diameter 2/)).toBeInTheDocument();
		expect(screen.getByText(/orbital period 2/)).toBeInTheDocument();
		expect(screen.getByText(/population 2/)).toBeInTheDocument();
		expect(screen.getByText(/rotation period 2/)).toBeInTheDocument();
		expect(screen.getByText(/surface water 2/)).toBeInTheDocument();
		expect(screen.getByText(/url 2/)).toBeInTheDocument();
	});
});
