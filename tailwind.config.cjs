/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			dynapuff: ['DynaPuff', 'cursive'], // Ensure fonts with spaces have " " surrounding it.
		},
	},
	plugins: [],
});
