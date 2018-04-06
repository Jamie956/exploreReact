import React, { Component } from "react";
import ReactDOM from "react-dom";

class LoginForm extends Component {
	render() {
		const { name, password } = this.props.info
		return (
			<div>
				<h1>{name}</h1>
				<h1>{password}</h1>
			</div>
		);
	}
}

class LoginPage extends Component {
	render() {
		const user = {
			name: 'Tomcat',
			password: 'ddd90'
		}

		return (
			<div>
				<h1>Login Page</h1>
				<LoginForm info={user} />
			</div>
		);
	}

}

ReactDOM.render(<LoginPage />, document.getElementById('root'));