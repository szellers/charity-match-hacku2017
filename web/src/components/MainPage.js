mport React, { Component } from 'react';

import SignIn from './SignIn';

export default class MainPage extends Component {
	render() {
		return (
			<div id="main-container">
				<MainPageNavBar />
				<MainPageSearchResults />
			</div>

		);
	}
}
