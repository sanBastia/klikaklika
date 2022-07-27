import { useEffect, useState } from 'react';

function App() {
	const [words, setWords] = useState(
		'First in first out compile presenter FP void container cloud. Greedy algorithm spaghetti code cross-post gulp singleton polemical thinking observer pattern. Object library pair programming hardcoded stack developer free as speech virtual DOM service worker JSX driver. AI callback parameter injection accessibility cache senior driver. Static typing consensus ecommerce platform design pivot perf matters.'
	);

	const [wordsPosition, setWordsPosition] = useState(0);

	const [wordsArray, setWordsArray] = useState<string[]>([]);

	useEffect(() => {
		setWordsArray(words.split(''));
		setWordsPosition(0);
	}, [words, wordsPosition]);

	return (
		<div className="flex justify-center p-6">
			<div className="max-w-5xl">
				<h1 className="text-5xl font-bold underline mb-8">
					klika klika
				</h1>
				<p className="text-4xl leading-relaxed tracking-wider">
					{wordsArray.map((item, index) => {
						const active =
							wordsPosition === index
								? 'text-red-700 font-bold'
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
