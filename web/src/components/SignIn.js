import React, { Component } from 'react';

import Button from './Button';
import TextInput from './TextInput';

export default class SignIn extends Component {
	render() {
		return (
			<div id="sign-in">
				<h3 id="sign-in__title" className="common-title">AppNexus Sign In</h3>

				<form>
					<TextInput
						id="sign-in__id"
						placeholder="AppNexus ID"
						name="id" />

					<Button className="common-btn" id="sign-in__sign-in-btn">Sign In</Button>
				</form>
			</div>
		);
	}
}
