import { FunctionComponent, useEffect, useState } from 'react';

interface useKeyPressedProps {
	(myCallback: string): void;
}

export const useKeyPressed: FunctionComponent<useKeyPressedProps> = (
	callback
) => {
	const [keyPressed, setKeyPressed] = useState(null);

	useEffect(() => {
		const downHandler = ({ key }: any) => {
			if (keyPressed !== key && key.length === 1) {
				setKeyPressed(key);
				callback && callback(key);
			}
		};

		const upHandler = () => {
			setKeyPressed(null);
		};

		window.addEventListener('keydown', downHandler);
		window.addEventListener('keyup', upHandler);

		return () => {
			window.removeEventListener('keydown', downHandler);
			window.removeEventListener('keyup', upHandler);
		};
	});
	return keyPressed;
};
