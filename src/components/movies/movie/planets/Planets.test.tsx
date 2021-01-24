import React from "react";
import { act, render, screen } from "@testing-library/react";
import Planets from "./Planets";

jest.mock("react-i18next", () => ({
	useTranslation: () => ({
		t: jest.fn(),
	}),
}));

jest.mock("../../../../api/planet/planet", () => ({
	getPlanet: jest.fn(),
}));

describe("Planets", () => {
	it("should render spinner on loading and then table of planets on big screen", async () => {
		let planetUrls: string[] = [];
		act(() => {
			planetUrls = ["url1"];
		});
		render(<Planets planetUrls={planetUrls} />);
		expect(screen.getByTestId(/spinner/)).toBeInTheDocument();
		expect(await screen.findByTestId(/planets-table/)).toBeInTheDocument();
	});
});
