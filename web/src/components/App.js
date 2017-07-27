import '../stylesheets/main.scss';

import React, { Component } from 'react';

import MainPage from './MainPage';
import SignInPage from './SignInPage';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<div id="outer-container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
