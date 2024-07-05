import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './Header.jsx';
import './style.css';
import React from "react";
import ChecklistPage from "./ChecklistPage";

const NotFound: React.FC = () => <div>Not found</div>

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={ChecklistPage} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));

window.addEventListener('beforeunload', function (e) {
	let incompleteTasks = Array.from(document.querySelectorAll('input.task-check'))
		.filter(elm => !elm.checked);
	
	if (incompleteTasks.length > 0) {
		e.preventDefault()
		e.returnValue = ''
	}
})

document.querySelector('#darkswitch').addEventListener('change', (e) => {
	const dark = e.target.checked
	document.documentElement.className = dark ? 'dark' : ''
	document.documentElement.style.backgroundColor = dark ? 'black' : 'white'
})