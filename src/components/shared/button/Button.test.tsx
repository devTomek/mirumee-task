import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
	it("should render button without props", () => {
		render(<Button>ClickMe</Button>);
		expect(screen.getByText(/ClickMe/)).toBeInTheDocument();
	});

	it("should render button with props", () => {
		render(
			<Button disabled onClick={jest.fn()} type="submit">
				ClickMe
			</Button>
		);
		const expectedButton = document.createElement("button");
		expectedButton.onclick = jest.fn();
		expectedButton.textContent = "ClickMe";
		expectedButton.type = "submit";
		expectedButton.disabled = true;
		expect(screen.getByText(/ClickMe/)).toEqual(expectedButton);
	});

	it("should click when click", () => {
		const onClick = jest.fn();
		render(<Button onClick={onClick}>ClickMe</Button>);
		act(() => {
			userEvent.click(screen.getByText(/ClickMe/));
			expect(onClick).toHaveBeenCalled();
		});
	});
});
