import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));

window.addEventListener('beforeunload', function (e) {
	if (Array.from(document.querySelectorAll('input.task-check'))
		.filter(elm => !elm.checked)
		.length > 0) {
		e.preventDefault()
		e.returnValue = ''
	}
})

document.querySelector('#darkswitch').addEventListener('change', (e) => {
	const dark = e.target.checked
	document.documentElement.className = dark ? 'dark' : ''
	document.documentElement.style.backgroundColor = dark ? 'black' : 'white'
})