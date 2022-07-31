import React, { useEffect, useState } from 'react';
import { useKeyPressed, generateWords } from './libs';
import { faker } from '@faker-js/faker';

function App() {
	const [words, setWords] = useState(generateWords());
	const [wordsPosition, setWordsPosition] = useState(0);

	const [wordsArray, setWordsArray] = useState<string[]>([]);

	useKeyPressed((key) => {
		if (key === wordsArray[wordsPosition]) {
			setWordsPosition(wordsPosition + 1);
		} else {
			console.log('tetooot');
		}
	});

	useEffect(() => {
		setWordsArray(words.split(''));
	}, [words]);

	return (
		<div className="flex justify-center p-6">
			<div className="max-w-5xl">
				<h1 className="text-5xl font-bold underline mb-8">
					klika klika:
				</h1>
				<p className="text-4xl leading-relaxed tracking-wider">
					{wordsArray.map((item, index) => {
						const active =
							wordsPosition === index
								? 'text-red-700 font-extrabold'
								: 'text-black';

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
