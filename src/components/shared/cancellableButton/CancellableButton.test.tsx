import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import CancellableButton from "./CancellableButton";

describe("CancellableButton", () => {
	it("should render with cross", () => {
		render(<CancellableButton onClick={jest.fn()}>ClickMe</CancellableButton>);
		expect(screen.getByText(/ClickMe/)).toBeInTheDocument();
		expect(screen.getByTestId(/cross/)).toBeInTheDocument();
	});

	it("should click when click", () => {
		const onClick = jest.fn();
		render(<CancellableButton onClick={onClick}>ClickMe</CancellableButton>);
		act(() => {
			userEvent.click(screen.getByText(/ClickMe/));
			expect(onClick).toHaveBeenCalled();
		});
	});
});
