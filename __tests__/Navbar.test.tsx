import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";

describe("Navbar component", () => {
	it("renders correctly", () => {
		render(<Navbar />);
		const nav = screen.getByRole("navigation");
		expect(nav).toBeInTheDocument();
	});

	it("should not contain duplicate long Tailwind class strings", () => {
		const { container } = render(<Navbar />);
		const allElements = container.querySelectorAll("*");

		const classOccurrences = new Map();
		const MIN_CLASS_LENGTH = 20; // Threshold: Only flag classes longer than 20 characters

		allElements.forEach((element) => {
			const className = element.getAttribute("class");

			if (className) {
				// Normalize by trimming and removing extra spaces
				const normalizedClass = className.trim().replace(/\s+/g, " ");

				// Ignore short class names (likely utility or reusable classes)
				if (normalizedClass.length < MIN_CLASS_LENGTH) {
					return;
				}

				// Track occurrences of long classes
				classOccurrences.set(normalizedClass, (classOccurrences.get(normalizedClass) || 0) + 1);
			}
		});

		// Detect duplicate long Tailwind class strings
		const duplicates = Array.from(classOccurrences.entries()).filter(([, count]) => count > 1);

		if (duplicates.length > 0) {
			console.error("Duplicate inline styles detected:", duplicates);
			throw new Error(
				`Duplicate inline styles found. Please consolidate them into reusable Tailwind classes. Duplicates: ${JSON.stringify(
					duplicates,
					null,
					2
				)}`
			);
		}

		expect(duplicates.length).toBe(0);
	});
});
