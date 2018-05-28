import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

class Layout extends Component {
	constructor() {
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

//=======================

// class CounterButton extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { count: 1 };
// 	}

// 	shouldComponentUpdate(nextState) {
// 		console.log('call shouldComponentUpdate')
// 		if (this.state.count !== nextState.count) {
// 			return true;
// 		}
// 		return false;
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={() => this.setState(state => ({ count: state.count + 1 }))}>inc count</button>
// 				<h1>Count: {this.state.count}</h1>
// 			</div>

// 		);
// 	}
// }

// render(<CounterButton />, document.getElementById('root'));