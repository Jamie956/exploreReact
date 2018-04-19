import React from 'react'
import ReactDOM from "react-dom";

// const Clock = () => <h2>{new Date().toLocaleTimeString()}</h2>
// const tick = () => ReactDOM.render(<Clock />, document.getElementById('root'));
// setInterval(tick, 1000);

//======================================================

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}
	componentDidMount() {
		console.log('call componentDidMount')
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
		console.log('call componentWillUnmount')
		clearInterval(this.timerID);
	}
	tick() {
		console.log('call tick')
		this.setState({
			date: new Date()
		});
	}
	render() {
		return (
			<div>
				<h2>{this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}
ReactDOM.render(<Clock />, document.getElementById('root'));