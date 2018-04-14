import React, { Component } from 'react'

class AddUser extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			msg: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	
	handleSubmit(e) {
		e.preventDefault()
		let data = {
			name: this.state.name,
			email: this.state.email
		}

		console.log(data)

		fetch("/users/add", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		}).then(function (response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		}).then(function (data) {
			console.log(data)
			if (data == "success") {
				this.setState({ msg: "Thanks for registering" });
			}
		}).catch(function (err) {
			console.log(err)
		});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		return (
			<div>
				<h1>Create</h1>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">name </label>
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
					<br />
					<label htmlFor="email">email </label>
					<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default AddUser