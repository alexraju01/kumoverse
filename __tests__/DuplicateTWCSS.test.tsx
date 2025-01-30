import { render } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";

describe("Tailwind class duplication test", () => {
	const checkForDuplicateTailwindClasses = (component: React.ReactElement): void => {
		const { container } = render(component);
		const allElements = container.querySelectorAll("*");

		const classOccurrences = new Map<string, number>();
		const MIN_CLASS_LENGTH = 20; // Ignore short class names

		allElements.forEach((element) => {
			const className = element.getAttribute("class");

			if (className) {
				// Normalize: trim & remove extra spaces
				const normalizedClass = className.trim().replace(/\s+/g, " ");

				// Ignore short class names (utility classes)
				if (normalizedClass.length < MIN_CLASS_LENGTH) {
					return;
				}

				// Track occurrences of class strings
				classOccurrences.set(normalizedClass, (classOccurrences.get(normalizedClass) || 0) + 1);
			}
		});

		// Find duplicate class strings
		const duplicates = Array.from(classOccurrences.entries()).filter(([, count]) => count > 1);

		if (duplicates.length > 0) {
			console.error("Duplicate inline styles detected:", duplicates);
			throw new Error(
				`Duplicate inline styles found. Consolidate them into reusable Tailwind classes. Duplicates: ${JSON.stringify(
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
