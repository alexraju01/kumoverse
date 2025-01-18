import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar component", () => {
	it("renders correctly", () => {
		render(<Navbar />);

		const nav = screen.getByRole("navigation");
		expect(nav).toBeInTheDocument();
	});

	it("should not contain duplicate inline styles in the Navbar component", () => {
		const { container } = render(<Navbar />);
		const allElements = container.querySelectorAll("*");

		const styleMap = new Map();

		allElements.forEach((element) => {
			const className = element.getAttribute("class");

			if (className) {
				// Check for existing styles
				if (styleMap.has(className)) {
					styleMap.set(className, styleMap.get(className) + 1);
				} else {
					styleMap.set(className, 1);
				}
			}
		});

		// Filter duplicates
		const duplicates = Array.from(styleMap.entries()).filter(([, count]) => count > 1);

		if (duplicates.length > 0) {
			console.warn("Duplicate inline styles detected:", duplicates);
			// throw new Error(
			// 	"Duplicate inline styles found. Please consolidate them into reusable classes."
			// );
		}

		expect(duplicates.length).toBe(0);
	});
});
