import { faker } from '@faker-js/faker';

export function generateWords() {
	let words = faker.lorem.paragraphs(2);
	return words;
}
