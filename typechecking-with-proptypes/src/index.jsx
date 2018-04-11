import React, { Component } from 'react'
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

// class Greeting extends React.Component {
// 	render() {
// 		return (
// 			<h1>Hello, {this.props.name}</h1>
// 		);
// 	}
// }

// Greeting.propTypes = {
// 	name: PropTypes.string
// };

// ReactDOM.render(<Greeting name={"tom"} />, document.getElementById('root'));

//==================================

// class MyComponent extends React.Component {
// 	render() {
// 		const children = this.props.children;
// 		return (
// 			<div>
// 				{children}
// 			</div>
// 		);
// 	}
// }

// MyComponent.propTypes = {
// 	children: PropTypes.element.isRequired
// };

// ReactDOM.render(
// <MyComponent>
// 	<h1>Oops</h1>
// </MyComponent>, 
// document.getElementById('root'));

//=================================

// class Greeting extends React.Component {
// 	render() {
// 		return (
// 			<h1>Hello, {this.props.name}</h1>
// 		);
// 	}
// }

// Greeting.defaultProps = {
// 	name: 'Stranger'
// };

// ReactDOM.render(
// 	<Greeting />,
// 	document.getElementById('root')
// );

//==================================

class Greeting extends React.Component {
	static defaultProps = {
		name: 'stranger'
	}

	render() {
		return (
			<div>Hello, {this.props.name}</div>
		)
	}
}

ReactDOM.render(
	<Greeting />,
	document.getElementById('root')
);
