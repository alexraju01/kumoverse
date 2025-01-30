import { render } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";

describe("Tailwind class duplication test", () => {
	const checkForDuplicateTailwindClasses = (component) => {
		const { container } = render(component);
		const allElements = container.querySelectorAll("*");

		const classOccurrences = new Map();
		const MIN_CLASS_LENGTH = 20; // Threshold to ignore short utility classes

		allElements.forEach((element) => {
			const className = element.getAttribute("class");

			if (className) {
				// Normalize by trimming and removing extra spaces
				const normalizedClass = className.trim().replace(/\s+/g, " ");

				// Ignore short class names
				if (normalizedClass.length < MIN_CLASS_LENGTH) {
					return;
				}

				// Track occurrences
				classOccurrences.set(normalizedClass, (classOccurrences.get(normalizedClass) || 0) + 1);
			}
		});

		// Find duplicate class strings
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
	};

	it("Navbar should not contain duplicate long Tailwind class strings.", () => {
		checkForDuplicateTailwindClasses(<Navbar />);
	});

	it("Schedule should not contain duplicate long Tailwind class strings.", () => {
		checkForDuplicateTailwindClasses(<Schedule />);
	});
});
