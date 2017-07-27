import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import SignInPage from './components/SignInPage';
import MainPage from './components/MainPage';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={App}>
			<Route path="/signin" component={SignInPage} />
			<Route path="/main" component={MainPage} />
		</Route>
	</Router>
);

export default Routes;
