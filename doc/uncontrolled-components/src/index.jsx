import React, { Component } from 'react'
import ReactDOM from "react-dom";

// class NameForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleSubmit(event) {
// 		alert('A name was submitted: ' + this.name.value);
// 		alert('A email was submitted: ' + this.email.value);

// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Name:
// 			<input type="text" ref={(name) => this.name = name} name="name" />
// 					<input type="text" ref={(email) => this.email = email} name="email" />

// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(<NameForm />, document.getElementById('root'));

//=============================

// class NameForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleSubmit(event) {
// 		alert('A name was submitted: ' + this.input.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Name:
// 			  <input
// 						defaultValue="Bob"
// 						type="text"
// 						ref={(input) => this.input = input} />
// 				</label>
// 				<input type="submit" value="Submit" />
// 			</form>
// 		);
// 	}
// }

// ReactDOM.render(<NameForm />, document.getElementById('root'));

//======================================

class FileInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.fileInput.files[0])
		alert(`Selected file - ${this.fileInput.files[0].name}`);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Upload file: <input type="file" ref={input => { this.fileInput = input; }} />
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
		);
	}
}

ReactDOM.render(<FileInput />, document.getElementById('root'));





