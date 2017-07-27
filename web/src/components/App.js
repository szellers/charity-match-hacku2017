import '../stylesheets/main.scss';

import React, { Component } from 'react';

import SignInPage from './SignInPage';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<div id="outer-container">
					<SignInPage />
				</div>
			</div>
		);
	}
}
