import { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';

interface GenerateTimerProps {}

export const GenerateTimer: FunctionComponent<GenerateTimerProps> = () => {
	const initialMinute = 0,
		initialSeconds = 60;
	const [minutes, setMinutes] = useState(initialMinute);
	const [seconds, setSeconds] = useState(initialSeconds);
	useEffect(() => {
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(myInterval);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<div>
			{minutes === 0 && seconds === 0 ? (
				'TIMEOUT'
			) : (
				<h1>
					{' '}
					{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
				</h1>
			)}
		</div>
	);
};
