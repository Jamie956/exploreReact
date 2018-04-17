import React, { Component } from 'react'
import ReactDOM from "react-dom"

function FancyBorder(props) {
	return (
		<div style={ {color: props.color} }>
			{props.children}
		</div>
	);
}

function WelcomeDialog() {
	return (
		<FancyBorder color="blue">
			<h1>Welcome</h1>
			<p>Thank you for visiting our spacecraft!</p>
		</FancyBorder>
	);
}

ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));

//====================================

// function Contacts() {
// 	return <div style={{ backgroundColor: 'green' }}>hello</div>;
// }

// function Chat() {
// 	return <div style={{ backgroundColor: 'red' }}>world</div>;
// }

// function SplitPane(props) {
// 	return (
// 		<div>
// 			<div style={{ float: 'left' }}>
// 				{props.left}
// 			</div>
// 			<div style={{ float: 'left' }}>
// 				{props.right}
// 			</div>
// 		</div>
// 	);
// }

// function App() {
// 	return (
// 		<SplitPane left={<Contacts />} right={<Chat />} />
// 	);
// }

// ReactDOM.render(<App />, document.getElementById('root'));

//==========================================

// function FancyBorder(props) {
// 	return (
// 		<div className={'FancyBorder FancyBorder-' + props.color}>
// 			{props.children}
// 		</div>
// 	);
// }

// function Dialog(props) {
// 	return (
// 		<FancyBorder color="blue">
// 			<h1 className="Dialog-title">{props.title}</h1>
// 			<p className="Dialog-message">{props.message}</p>
// 		</FancyBorder>
// 	);
// }

// function WelcomeDialog() {
// 	return (
// 		<Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
// 	);
// }

// ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));

//===================================

// function FancyBorder(props) {
// 	return (
// 		<div className={'FancyBorder FancyBorder-' + props.color}>
// 			{props.children}
// 		</div>
// 	);
// }

// function Dialog(props) {
// 	return (
// 		<FancyBorder color="blue">
// 			<h1 className="Dialog-title">{props.title}</h1>
// 			<p className="Dialog-message">{props.message}</p>
// 			{props.children}
// 		</FancyBorder>
// 	);
// }

// class SignUpDialog extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleSignUp = this.handleSignUp.bind(this);
// 		this.state = { login: '' };
// 	}

// 	handleChange(e) {
// 		this.setState({ login: e.target.value });
// 	}

// 	handleSignUp() {
// 		alert(`Welcome aboard, ${this.state.login}!`);
// 	}

// 	render() {
// 		return (
// 			<Dialog title="Mars Exploration Program" message="How should we refer to you?">
// 				<input value={this.state.login} onChange={this.handleChange} />
// 				<button onClick={this.handleSignUp}>Sign Me Up!</button>
// 			</Dialog>
// 		);
// 	}
// }

// ReactDOM.render(<SignUpDialog />, document.getElementById('root'));