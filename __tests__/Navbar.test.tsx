import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar component", () => {
	it("renders correctly", () => {
		render(<Navbar />);

		const nav = screen.getByRole("navigation");
		expect(nav).toBeInTheDocument();
	});
});
