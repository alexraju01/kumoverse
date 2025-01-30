import Navbar from "@/components/Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
	it("renders the Navbar component", () => {
		render(<Navbar />);

		// Check if the Navbar component is rendered
		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});

	it("renders the logo with the correct link and image", () => {
		render(<Navbar />);

		// Check if the logo link is present
		const logoLink = screen.getByRole("link", { name: "Logo" });
		expect(logoLink).toHaveAttribute("href", "/");

		// Check if the logo image is present
		const logoImage = screen.getByAltText("Logo");
		expect(logoImage).toBeInTheDocument();
	});
});
