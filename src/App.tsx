import { useState } from 'react';
import { Navigation } from './components';
import {
	generateCharactersArray,
	GenerateTimer,
	generateWhenCorrect,
} from './utils';

import { clsx } from 'clsx';
import { useKeyPressed } from './hooks';

function App() {
	const [indexPosition, setIndexPosition] = useState<number>(0);
	const [charactersArray, setCharactersArray] = useState(
		generateCharactersArray()
	);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(60);

	const [wordCount, setWordCount] = useState(0);
	const [wpm, setWpm] = useState<string>();

	const twIsSpace = 'tracking-wide typewriter';
	const twIsCorrect = 'tracking-wide text-gray-700 font-normal';
	const twIsActive = 'tracking-wide typewriter';
	const twIsWrong = 'tracking-wide text-red-700 font-bold';

	useKeyPressed((key) => {
		if (key !== charactersArray[indexPosition][0] && key === 'Backspace') {
			if (indexPosition > 0) {
				setIndexPosition(indexPosition - 1);

				setCharactersArray(
					charactersArray.map((charState, index) => {
						if (index + 1 === indexPosition) {
							return [charState[0], 2]; // set to backspace
						}
						return charState;
					})
				);
			}
		}

		if (key === charactersArray[indexPosition][0]) {
			// Key is the same within array of ["x", 0]
			setWordCount(wordCount + 1);

			setIndexPosition(indexPosition + 1);
			setCharactersArray(
				charactersArray.map((charState, index) => {
					if (index === indexPosition) {
						return [charState[0], 1]; // set to correct
					}
					return charState;
				})
			);
		}

		// Key is not the same
		if (key !== charactersArray[indexPosition][0] && key !== 'Backspace') {
			setIndexPosition(indexPosition + 1);
			setCharactersArray(
				charactersArray.map((charState, index) => {
					if (index === indexPosition) {
						return [charState[0], -1]; // set to wrong/typo
					}
					return charState;
				})
			);
		}
	});

	return (
		<div className="flex justify-center h-screen p-6 bg-orange-50">
			<div className="max-w-6xl">
				<Navigation />

				<div className="mx-auto p-4 m-4">
					<p className="text-2xl leading-loose tracking-wider">
						{charactersArray.map((charState, index) => {
							const currentPosition = indexPosition === index;

							return (
								<span
									key={index}
									className={clsx(
										// is active
										currentPosition && twIsActive,
										// is space
										currentPosition &&
											charState[0] === ' ' &&
											twIsSpace,
										// is correct
										charState[1] === 1 && twIsCorrect,
										// is wrong/typo
										charState[1] === -1 && twIsWrong,
										charState[1] === 2 && 'text-black'
									)}
								>
									{charState[0]}
								</span>
							);
						})}
					</p>
				</div>
				{/* <div>
					{minutes === 0 && seconds === 0 ? (
						'TIMEOUT'
					) : (
						<h1>
							{' '}
							{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
						</h1>
					)}
				</div> */}
				<div>
					<GenerateTimer />
				</div>
			</div>
		</div>
	);
}

export default App;
