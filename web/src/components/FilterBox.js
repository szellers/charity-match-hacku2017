import React, { Component } from 'react';

export default class FilterBox extends Component {
	render() {
		const { name } = this.props;

		return (
			<p className="filter-box">{name}</p>
		);
	}
}
