import { FunctionComponent } from 'react';
import { TiKeyboard, TiCog } from 'react-icons/ti';
import { DialogComponent } from './index';

interface NavigationProps {}

export const Navigation: FunctionComponent<NavigationProps> = () => {
	return (
		<header className="border-b-4 border-black">
			<div className="max-w-screen-xl p-4 mx-auto">
				<div className="flex items-center justify-between space-x-4 lg:space-x-10">
					<div className="flex lg:w-0 lg:flex-1">
						<a
							className="px-5 py-2 text-sm font-medium rounded-lg"
							href=""
						>
							<TiKeyboard size={'5em'} />
						</a>
					</div>

					<nav className="hidden space-x-8 text-sm font-medium md:flex">
						<h1 className="font-bold font-dynapuff text-4xl ">
							KLICA
						</h1>
					</nav>

					<div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
						<DialogComponent />
						<a
							className="px-5 py-2 text-sm font-medium marker:rounded-lg"
							href=""
						>
							<TiCog size={'2.8em'} />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};
