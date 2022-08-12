import { Fragment, FunctionComponent, useState } from 'react';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from '@material-tailwind/react';
import { FaQuestion } from 'react-icons/fa';

interface DialogComponentProps {}
export const DialogComponent: FunctionComponent<DialogComponentProps> = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(!open);
	return (
		<Fragment>
			<Button onClick={handleOpen} variant="text">
				<FaQuestion size={'2em'} />
			</Button>
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>
					Welcome to{' '}
					<p className="font-bold font-dynapuff text-4xl">Klica</p>
				</DialogHeader>
				<DialogBody divider>
					this is a simple typing experience,but it still on
					development
				</DialogBody>
				<DialogFooter>
					<Button
						variant="text"
						color="red"
						onClick={handleOpen}
						className="mr-1"
					>
						<span>Cancel</span>
					</Button>
					<Button
						variant="gradient"
						color="green"
						onClick={handleOpen}
					>
						<span>Confirm</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</Fragment>
	);
};
