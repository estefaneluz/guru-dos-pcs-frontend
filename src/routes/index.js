import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from '../pages/home';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact element={<Home />} />
			</Switch>
		</Router>
	);
}
