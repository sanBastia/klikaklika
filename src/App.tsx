import { useState } from 'react';

function App() {
	const [words, setWords] = useState(
		'First in first out compile presenter FP void container cloud. Greedy algorithm spaghetti code cross-post gulp singleton polemical thinking observer pattern. Object library pair programming hardcoded stack developer free as speech virtual DOM service worker JSX driver. AI callback parameter injection accessibility cache senior driver. Static typing consensus ecommerce platform design pivot perf matters.'
	);

	return (
		<div className="App">
			<p>{words}</p>
		</div>
	);
}

export default App;
