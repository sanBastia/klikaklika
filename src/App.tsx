import React, { useEffect, useState } from 'react';
import { useKeyPressed, generateWords } from './libs';

const generatedWords = generateWords();
function App() {
	const [words, setWords] = useState(generatedWords);
	const [wordsPosition, setWordsPosition] = useState(0);

	const [wordsArray, setWordsArray] = useState<string[]>([]);

	useKeyPressed((key) => {
		if (key === wordsArray[wordsPosition]) {
			setWordsPosition(wordsPosition + 1);
		}
	});

	useEffect(() => {
		setWordsArray(words.replace(/(\r\n|\n|\r)/gm, '').split(''));
	}, []);

	const stylingWords = (item: any, index: any) => {
		if (wordsPosition === index && item === ' ') {
			return 'border-solid border-2 border-b w-2 border-red-700';
		}
		if (wordsPosition === index) {
			return 'text-red-700 font-extrabold';
		} else if (wordsPosition < index) {
			return 'text-gray-400 font-bold';
		} else {
			return 'text-black';
		}
	};

	return (
		<div className="flex justify-center p-6">
			<div className="max-w-5xl">
				<h1 className="text-5xl font-bold underline mb-8">
					klika klika:
				</h1>
				<p className="text-4xl leading-relaxed tracking-wider">
					{wordsArray.map((item, index) => {
						const active = stylingWords(item, index);

						return (
							<span className={active} key={index}>
								{item}
							</span>
						);
					})}
				</p>

				{/* <pre>{JSON.stringify(wordsArray)}</pre> */}
			</div>
		</div>
	);
}

export default App;
