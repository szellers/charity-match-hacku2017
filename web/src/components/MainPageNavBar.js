import React, { Component } from 'react';

import Button from './Button';
import FilterBox from './FilterBox';
import TextInput from './TextInput';

export default class MainPageNavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filters: []
		};
	}

	_onFilterEnter = (text) => {
		this.state.filters.push(text);

		this.setState({
			filters: this.state.filters
		});
	}

	_createFilterBox = (filter) => {
		return <FilterBox name={filter} />;
	}

	render() {
		const { filters } = this.state;
		console.log(filters);
		
		return (
			<div id="search-bar-container">
			    <form>
                    <TextInput id="search" className="common-text-input" name="search" placeholder="Search" />
					<TextInput id="filter" className="common-text-input" name="filter" placeholder="Filter" onEnter={this._onFilterEnter} />
					<div id="filters">
						{filters && filters.map(this._createFilterBox)}
					</div>
				
                    <Button className="common-btn" id="search-button">Submit</Button>
                </form>
			</div>
		);
	}
}
