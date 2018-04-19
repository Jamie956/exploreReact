import React, { Component } from 'react'
import ReactDOM from "react-dom"

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			email: ''
// 		};

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(e) {
// 		this.setState({ [e.target.name]: e.target.value });
// 	}

// 	handleSubmit(e) {
// 		alert('Email: ' + this.state.email);
// 		e.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				Email: <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(<App />, document.getElementById('root'));

//============================

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			flavor: 'coconut'
// 		};

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(e) {
// 		this.setState({ [e.target.name]: e.target.value });
// 	}

// 	handleSubmit(e) {
// 		alert('Your favorite flavor is: ' + this.state.flavor);
// 		e.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Pick your favorite La Croix flavor:
// 					<select value={this.state.flavor} onChange={this.handleChange} name="flavor" >
// 						<option value="grapefruit">Grapefruit</option>
// 						<option value="lime">Lime</option>
// 						<option value="coconut">Coconut</option>
// 						<option value="mango">Mango</option>
// 					</select>
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(<App />, document.getElementById('root'));

//=====================================

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(event) {
		alert('username: ' + this.state.username);
		alert('email: ' + this.state.email);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				UserName: <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
				<br />
				Email: <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));