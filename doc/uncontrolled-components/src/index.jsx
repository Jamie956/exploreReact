import React, { Component } from 'react'
import ReactDOM from "react-dom";

// class NameForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleSubmit(e) {
// 		alert('username: ' + this.username.value);
// 		alert('email: ' + this.email.value);

// 		e.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<div>
// 					Name: <input type="text" ref={(e) => this.username = e} name="username" />
// 				</div>
// 				<div>
// 					Email: <input type="text" ref={(e) => this.email = e} name="email" />
// 				</div>
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
// 		alert(this.input.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				Name: <input defaultValue="Bob" type="text" ref={(e) => this.input = e} />
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

	handleSubmit(e) {
		alert('Selected file: ' + this.fileInput.files[0].name);
		e.preventDefault();		
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				Upload file: <input type="file" ref={e => { this.fileInput = e; }} />
				<br/>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

ReactDOM.render(<FileInput />, document.getElementById('root'));