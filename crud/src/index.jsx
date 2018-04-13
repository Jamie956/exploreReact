import React, { Component } from 'react'
import ReactDOM from "react-dom";

class Greeting extends Component {
	constructor(){
		super()
		this.state = {
			name: '',
			email: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(){
		alert(submit)
	}
	render() {
		return (
			<div>
				<h1>Create</h1>
				<form action="" submit={this.handleSubmit}>
					<label htmlFor="name">name </label>y
					<input type="text" name="name" />
					<br/>
					<label htmlFor="email">email </label>
					<input type="text" name="email" />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}


ReactDOM.render(<Greeting />, document.getElementById('root'));