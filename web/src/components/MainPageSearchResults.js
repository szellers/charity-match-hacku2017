import React, { Component } from 'react';

import MainPageSearchResultCard from './MainPageSearchResultCard';
import MainPageSearchResultCardDetails from './MainPageSearchResultCardDetails';
import ModalView from './ModalView';

export default class MainPageSearchResults extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedResult: null
		};
	}

	_createCard = (result) => {
		return <MainPageSearchResultCard {...result} onClick={() => this._showDetails(result)} />;
	}

	_showDetails = (result) => {
		this.setState({ 
			selectedResult: result
		});

		this.refs.details.show();
	}

	render() {	
		const { selectedResult } = this.state;

		const results = [
			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm',
				location: 'Pier 64'
			},
			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm'
			},
	

			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm'
			},
	
			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm'
			},
	

			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm'
			},
	
			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm'
			},
	

			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm'
			},
	
			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm'
			},
	

			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm'
			},
	

			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm'
			},
	

			{
				id: 0,
				title: 'Event A',
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
				charity: 'Charity A',
				date: 'Aug 20th, 9:00pm'
			},
			{
	id: 0,
	title: 'Event A',
	desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
	charity: 'Charity A',
	date: 'Aug 20th, 9:00pm'
}

		];

		return (
			<div id="search-results-container">
				{results && results.map(this._createCard)}

				<ModalView ref="details" hideOnBackgroundClick>
					<MainPageSearchResultCardDetails {...selectedResult} />
				</ModalView>
			</div>
		);
	}
}
