/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				coffee: {
					dark: "#3B2F2F",
					roast: "#6F4E37",
					crema: "#C4A484",
					latte: "#F5E6D3",
          caramel: "#D97706",
					mint: "#6B9F7A",

				},
			},

			fontFamily: {
				cafe: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
