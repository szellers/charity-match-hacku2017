import React, { Component } from 'react';

export default class TextInput extends Component {
	_onKeyPress = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			this.props.onEnter && this.props.onEnter(e.target.value);
		}
	}

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
				name={name}
				onKeyPress={this._onKeyPress} />
		);
	}
}
