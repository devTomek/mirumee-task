import { render, screen } from "@testing-library/react";
import Divider from "./Divider";

describe("Divider", () => {
	it("should render", () => {
		render(<Divider />);
		expect(screen.getByTestId(/divider/)).toBeInTheDocument();
	});
});
