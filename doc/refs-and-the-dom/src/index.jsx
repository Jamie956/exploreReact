import React, { Component } from 'react'
import ReactDOM from "react-dom"

// class CustomTextInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.textInput = React.createRef();
// 		this.focusTextInput = this.focusTextInput.bind(this);
// 	}

// 	focusTextInput() {
// 		this.textInput.current.focus();
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<input type="text" ref={this.textInput} />
// 				<input type="button" value="Focus the text input" onClick={this.focusTextInput} />
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render( <CustomTextInput />, document.getElementById('root'));

//==========================

// function CustomTextInput(props) {
// 	let textInput = React.createRef();

// 	function handleClick() {
// 		textInput.current.focus();
// 	}

// 	return (
// 		<div>
// 			<input type="text" ref={textInput} />
// 			<input type="button" value="Focus the text input" onClick={handleClick} />
// 		</div>
// 	);
// }
// ReactDOM.render(<CustomTextInput />, document.getElementById('root'));

//==========================

// class CustomTextInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.email = null;
// 	}

// 	handleClick = () => {
// 		if (this.textInput) this.textInput.focus();
// 	};

// 	componentDidMount() {
// 		this.handleClick();
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<input type="text" ref={ (e) => { this.email = e } } />
// 				<input type="button" value="Focus the text input" onClick={this.handleClick} />
// 			</div>
// 		);
// 	}
// }
// ReactDOM.render(<CustomTextInput />, document.getElementById('root'));

//========================

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: ''
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
	};
	handleInputChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	clearInput() {
		this.setState({ email: '', username: '' });
		ReactDOM.findDOMNode(this.refs.refEmail).focus();
	}
	render() {
		const { email, username } = this.state
		return (
			<div>
				<div>
					email: <input value={email} onChange={this.handleInputChange} ref="refEmail" name="email" />
					<h4>{email}</h4>
				</div>
				<div>
					username: <input value={username} onChange={this.handleInputChange} ref="refUsername" name="username" />
					<h4>{username}</h4>
				</div>
				<button onClick={this.clearInput}>CLEAR</button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));