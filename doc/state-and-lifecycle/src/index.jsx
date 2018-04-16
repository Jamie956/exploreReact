import React from 'react'
import ReactDOM from "react-dom";



// function Clock(props) {
// 	return (
// 		<div>
// 			<h1>Hello, world!</h1>
// 			<h2>It is {props.date.toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// }
// function tick() {
// 	ReactDOM.render(
// 		<Clock date={new Date()} />,
// 		document.getElementById('root')
// 	);
// }
// setInterval(tick, 1000);

//======================================================

// class Clock extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello, world!</h1>
// 				<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
// 			</div>
// 		);
// 	}
// }
// function tick() {
// 	ReactDOM.render(
// 		<Clock date={new Date()} />,
// 		document.getElementById('root')
// 	);
// }
// setInterval(tick, 1000);

//======================================================

// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { date: new Date() };
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello, world!</h1>
// 				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// 			</div>
// 		);
// 	}
// }
// ReactDOM.render(
// 	<Clock />,
// 	document.getElementById('root')
// );

//======================================================

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({
			date: new Date()
		});
	}
	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}
ReactDOM.render(
	<Clock />,
	document.getElementById('root')
);