// removing newline tag or "/n"
export function getTrimWords(words: string) {
	return words.replace(/(\r\n|\n|\r)/gm, '').split('');
}
