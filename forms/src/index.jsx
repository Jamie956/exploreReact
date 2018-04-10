import React, { Component } from 'react'
import ReactDOM from "react-dom"

// class NameForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { value: '' };

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(event) {
// 		this.setState({ value: event.target.value });
// 	}

// 	handleSubmit(event) {
// 		alert('A name was submitted: ' + this.state.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Name:
// 			<input type="text" value={this.state.value} onChange={this.handleChange} />
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(<NameForm />, document.getElementById('root'));

//============================

// class FlavorForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { value: 'coconut' };

// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleChange(event) {
// 		this.setState({ value: event.target.value });
// 	}

// 	handleSubmit(event) {
// 		alert('Your favorite flavor is: ' + this.state.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Pick your favorite La Croix flavor:
// 					<select value={this.state.value} onChange={this.handleChange}>
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

// ReactDOM.render(<FlavorForm />, document.getElementById('root'));

//=====================================
class Reservation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: '',
			numberOfGuests: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.isGoing);
		alert('A name was submitted: ' + this.state.numberOfGuests);
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Is going:
					<input name="isGoing" type="text" value={this.state.isGoing} onChange={this.handleInputChange} />
				</label>
				<br />
				<label>
					Number of guests:
					<input name="numberOfGuests" type="text" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

ReactDOM.render(<Reservation />, document.getElementById('root'));