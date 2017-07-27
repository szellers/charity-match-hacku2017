import React, { Component } from 'react';

import MainPageNavBar from './MainPageNavBar';
import MainPageSearchResults from './MainPageSearchResults';

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
