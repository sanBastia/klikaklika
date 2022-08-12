/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			nunito: ['nunito', 'sans-serif'],
			dynapuff: ['DynaPuff', 'cursive'], // Ensure fonts with spaces have " " surrounding it.
		},
	},
	plugins: [],
};
