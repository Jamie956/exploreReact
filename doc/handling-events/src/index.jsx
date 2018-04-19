import React from 'react'
import ReactDOM from "react-dom";

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { 
// 			isToggleOn: true 
// 		};
// 		this.handleClick = this.handleClick.bind(this);
// 	}
// 	handleClick() {
// 		this.setState(prevState => ({
// 			isToggleOn: !prevState.isToggleOn
// 		}));
// 	}
// 	render() {
// 		return (
// 			<button onClick={this.handleClick}>
// 				{this.state.isToggleOn ? 'ON' : 'OFF'}
// 			</button>
// 		);
// 	}
// }

// ReactDOM.render(<App />, document.getElementById('root'));

//==============================================

// class App extends React.Component {
// 	handleClick = () => {
// 		console.log('this is:', this);
// 	}
// 	render() {
// 		return (
// 			<button onClick={this.handleClick}>Click me</button>
// 		);
// 	}
// }
// ReactDOM.render(<App />, document.getElementById('root'));

//==============================================

// class App extends React.Component {
// 	handleClick() {
// 		console.log('this is:', this);
// 	}
// 	render() {
// 		return (
// 			<button onClick={(e) => this.handleClick(e)}>Click me</button>
// 		);
// 	}
// }
// ReactDOM.render(<App />, document.getElementById('root'));

//==============================================

// class App extends React.Component {
// 	deleteRow(id, e) {
// 		console.log(id);
// 		console.log(e);
// 	}

// 	render() {
// 		return (
// 			<button onClick={(e) => this.deleteRow('123', e)}>Delete Row</button>
// 		);
// 	}
// }
// ReactDOM.render(<App />, document.getElementById('root'));

//==============================================

class App extends React.Component {
	deleteRow(id, e) {
		console.log(id);
		console.log(e);
	}
	render() {
		return (
			<button onClick={this.deleteRow.bind(this, '123')}>Delete Row</button>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));