import React, { useEffect, useState } from 'react';
import { Navigation } from './components';
import { useKeyPressed, generateWords, getTrimWords } from './libs';

const generatedWords = generateWords();

function App() {
	const [words, setWords] = useState(generatedWords);
	const [wordsPosition, setWordsPosition] = useState<number>(0);
	const [typoCheck, setTypoCheck] = useState<number[]>([]);
	const [wordsArray, setWordsArray] = useState<string[]>([]);

	useKeyPressed((key) => {
		if (key === wordsArray[wordsPosition]) {
			setWordsPosition(wordsPosition + 1);
		}
		if (key !== wordsArray[wordsPosition]) {
			setTypoCheck((curTypoCheck) => [
				...curTypoCheck,
				wordsArray.indexOf(wordsArray[wordsPosition]),
			]);
		}
	});

	useEffect(() => {
		setWordsArray(getTrimWords(words));
	}, []);

	const stylingWords = (item: any, index: number) => {
		if (wordsPosition === index && item === ' ') {
			return 'border-solid border-2 border-b w-2 border-blue-700';
		}
		if (wordsPosition > index) {
			return 'text-gray-400 font-bold';
		}
		if (wordsPosition === index) {
			return 'text-blue-700 font-extrabold';
		}
		return 'text-black';
	};

	return (
		<div className="flex justify-center p-6">
			<div className="max-w-4xl">
				<Navigation />
				<div className="mx-auto p-4 m-4">
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
				</div>
				{/* <pre>{JSON.stringify(wordsArray)}</pre> */}
			</div>
		</div>
	);
}

export default App;
