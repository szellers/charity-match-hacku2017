import React, { Component } from 'react';

import SignIn from './SignIn';
import TextInput from './TextInput';

export default class MainPageNavBar extends Component {
	render() {
		return (
			<div id="search-bar-container">
			    <form>
                    <TextInput id="search" name="search" placeholder="Search">
				
                    <Button className="common-btn" id="search-button">Submit</Button>
                </form>
                <ul id="myUL">
				  <li><a href="#" class="header"> Filter Options: </a></li>
				  <li><a href="#">Corporate Investments</a></li>
				  <li><a href="#">Pyramid Schemes</a></li>
				  <li><a href="#">Embezzlement Opportunities</a></li>
				  <li><a href="#">Ponzi Schemes</a></li>
				  <li><a href="#">Super Pac Donations</a></li>
				</ul>
			</div>
		);
	}
}
