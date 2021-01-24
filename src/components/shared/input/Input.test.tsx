import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
	it("should render", async () => {
		render(<Input onChange={jest.fn()} value="" />);
		expect(screen.getByTestId("input")).toBeInTheDocument();
	});

	it("should render with label", () => {
		render(<Input onChange={jest.fn()} value="" label="label" />);
		expect(screen.getByText(/label/)).toBeInTheDocument();
	});

	it("should render with errorText", () => {
		render(<Input onChange={jest.fn()} value="" errorText="errorText" />);
		expect(screen.getByText(/errorText/)).toBeInTheDocument();
	});

	it("should render with icon", () => {
		render(<Input onChange={jest.fn()} value="" icon="icon" />);
		expect(screen.getByAltText(/input-icon/)).toBeInTheDocument();
	});
});
