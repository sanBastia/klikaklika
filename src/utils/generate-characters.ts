import { faker } from '../libs';
import { CharactersArray } from '../types';

export function generateCharactersArray() {
	return faker.lorem
		.paragraphs(2)
		.trim()
		.split('')
		.map((char) => [char, 0]) as CharactersArray;
}

// Refactored function if needed

export function generateWhenCorrect(
	charactersArray: CharactersArray,
	indexPosition: number
) {
	return charactersArray.map((charState, index) => {
		if (index === indexPosition) {
			return [charState[0], 1]; // set to correct
		}
		return charState;
	});
}

export function generateWhenInCorrect(
	charactersArray: CharactersArray,
	indexPosition: number
) {
	return charactersArray.map((charState, index) => {
		if (index === indexPosition) {
			return [charState[0], -1]; // set to correct
		}
		return charState;
	});
}

export function generateWhenDelete(
	charactersArray: CharactersArray,
	indexPosition: number
) {
	return charactersArray.map((charState, index) => {
		if (index === indexPosition) {
			return [charState[0], 0]; // set to correct
		}
		return charState;
	});
}
