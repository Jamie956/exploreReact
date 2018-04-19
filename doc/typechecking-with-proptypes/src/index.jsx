import React, { Component } from 'react'
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

// const Greeting = (props) => <h1>Hello, {props.name}</h1>
// Greeting.propTypes = {
// 	name: PropTypes.string
// };
// ReactDOM.render(<Greeting name={"tom"} />, document.getElementById('root'));

//==================================

// const MyComponent = (props) => <div>{props.children}</div>
// const App = () => <MyComponent><h1>Oops</h1></MyComponent>
// MyComponent.propTypes = {
// 	children: PropTypes.element.isRequired
// };
// ReactDOM.render(<App />, document.getElementById('root'));

//=================================

// const Greeting = (props) => <h1>Hello, {props.name}</h1>
// Greeting.defaultProps = {
// 	name: 'Stranger'
// };
// ReactDOM.render(<Greeting />, document.getElementById('root'));

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

ReactDOM.render(<Greeting />, document.getElementById('root'));