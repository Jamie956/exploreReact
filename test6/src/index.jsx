import React, { Component } from 'react'
import ReactDOM from "react-dom"

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