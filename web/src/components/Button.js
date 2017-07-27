import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		const {
			id,
			className,
			onClick
		} = this.props;

		return (
			<button id={id} className={className} onClick={onClick}>
				{this.props.children}
			</button>
		);
	}
}
