module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				NeueThin: ["NeueThin", "sans-serif"],
				NeueLight: ["NeueLight", "sans-serif"],
				NeueBold: ["NeueBold", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
