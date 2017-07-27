import React, { Component } from 'react';

export default class TextInput extends Component {
	render() {
		const {
			id,
			className,
			placeholder,
			name
		} = this.props;

		return (
			<input
				type="text"
				id={id}
				className={className}
				placeholder={placeholder}
				name={name} />
		);
	}
}
