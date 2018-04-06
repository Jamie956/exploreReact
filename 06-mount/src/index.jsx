import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

class Layout extends Component {
	constructor(){
		super();
		console.log('Call constructor');
	}

	componentWillMount() {
		console.log('Call componentWillMount');
	}

	componentDidMount() {
		console.log('Call componentDidMount');
	}

	componentWillUnmount() {
		console.log('Call componentWillUnmount');
	}

	render() {
		return (
			<h1>Press F12, the console, U see.</h1>
		);
	}
}

setTimeout(() => {
	console.log('ready to remove component');
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}, 3000);

setTimeout(() => {
	console.log('ready to render component');
	render(<Layout />, document.getElementById('root'));
}, 6000);

render(<Layout />, document.getElementById('root'));