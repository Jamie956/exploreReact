import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

// class Layout extends Component {
// 	constructor() {
// 		super();
// 		console.log('constructor');
// 	}

// 	componentWillMount() {
// 		console.log('WillMount');
// 	}

// 	componentDidMount() {
// 		console.log('DidMount');
// 	}

// 	componentWillUnmount() {
// 		console.log('WillUnmount');
// 	}

// 	render() {
// 		return (
// 			<h1>hi</h1>
// 		);
// 	}
// }

// render(<Layout />, document.getElementById('root'));

// setTimeout(() => {
// 	console.log('ready to remove component');
// 	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
// }, 2000);



//=======================

class CounterButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 1 };
	}

	shouldComponentUpdate(nextState) {
		console.log('call shouldComponentUpdate')
		if (this.state.count !== nextState.count) {
			return true;
			// return false;
		}
		return false;
	}

	render() {
		return (
			<div>
				<button onClick={() => this.setState(state => ({ count: state.count + 1 }))}>inc count</button>
				<h1>Count: {this.state.count}</h1>
			</div>

		);
	}
}

render(<CounterButton />, document.getElementById('root'));