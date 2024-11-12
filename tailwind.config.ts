import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// background: "var(--background)",
				// foreground: "var(--foreground)",

				primary: "#0E0E0E", // Example: Main background color, replace with exact shade
				accent: "#8B5CF6", // Example: Purple accent color (similar to the play button)
				textPrimary: "#FFFFFF", // Example: Main text color (white)
				textSecondary: "#AAAAAA", // Example: Secondary text color (light gray)
				bgSecondary: "#1F1F1F", // Example: Secondary background for cards or sections
				// You can add more colors based on the UI elements observed
				borderGray: "#303030", // Example: Borders or outlines
				navbarBackground: "#1C1C1C",
			},
		},
	},
	plugins: [],
} satisfies Config;
