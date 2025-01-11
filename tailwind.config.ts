import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			// fontFamily: {
			// 	sans: ["var(--font-nunito)", "sans-serif"], // Use Nunito as the default sans-serif
			// },
			backgroundImage: {
				"footer-bg": "url('../../public/bg-footer.jpg')",
			},

			fontSize: {
				base: "12px",
			},
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
				customDark: "#242424",
				itemBackground: "#1c1c1c",
			},

			container: {
				center: true,
				padding: "10px",
				screens: {
					xl: "1800px", // Custom max width for xl and larger
				},
			},
		},
		screens: {
			sm: "640px", // Default Tailwind `sm`
			md: "996px", // Default Tailwind `md`
			lg: "1200px", // Custom `lg`
			xl: "1449.98px", // Custom `xl`
		},
	},
	plugins: [],
} satisfies Config;
