import React, { Component } from 'react'
import ReactDOM from "react-dom"

// class MyComponent extends React.Component {
// 	constructor(props) {
// 	  super(props);
// 	  this.myRef = React.createRef();
// 	}
// 	render() {
// 	  return <div ref={this.myRef} />;
// 	}
//   }


// ReactDOM.render(
// 	<MyComponent />,
// 	document.getElementById('root')
// );

//=====================================

// class CustomTextInput extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.textInput = React.createRef();
// 		this.focusTextInput = this.focusTextInput.bind(this);
// 	}

// 	focusTextInput() {
// 		console.log(this.textInput.current)
// 		this.textInput.current.focus();
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<input
// 					type="text"
// 					ref={this.textInput} />
// 				<input
// 					type="button"
// 					value="Focus the text input"
// 					onClick={this.focusTextInput}
// 				/>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<CustomTextInput />,
// 	document.getElementById('root')
// );

//==========================

// function CustomTextInput(props) {
// 	let textInput = React.createRef();

// 	function handleClick() {
// 		textInput.current.focus();
// 	}

// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				ref={textInput} />
// 			<input
// 				type="button"
// 				value="Focus the text input"
// 				onClick={handleClick}
// 			/>
// 		</div>
// 	);
// }

// ReactDOM.render(
// 	<CustomTextInput />,
// 	document.getElementById('root')
// );

//==========================

// function CustomTextInput(props) {
// 	return (
// 		<div>
// 			<input ref={props.inputRef} />
// 		</div>
// 	);
// }

// class Parent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.inputElement = React.createRef();
// 	}
// 	render() {
// 		return (
// 			<CustomTextInput inputRef={this.inputElement} />
// 		);
// 	}
// }

// ReactDOM.render(
// 	<CustomTextInput />,
// 	document.getElementById('root')
// );

//=================================

// class CustomTextInput extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.textInput = null;

// 		this.setTextInputRef = element => {
// 			this.textInput = element;
// 		};

// 		this.focusTextInput = () => {
// 			if (this.textInput) this.textInput.focus();
// 		};
// 	}

// 	componentDidMount() {
// 		this.focusTextInput();
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<input
// 					type="text"
// 					ref={this.setTextInputRef}
// 				/>
// 				<input
// 					type="button"
// 					value="Focus the text input"
// 					onClick={this.focusTextInput}
// 				/>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<CustomTextInput />,
// 	document.getElementById('root')
// );

//========================

// function CustomTextInput(props) {
// 	return (
// 		<div>
// 			<input ref={props.inputRef} />
// 		</div>
// 	);
// }

// class Parent extends React.Component {
// 	render() {
// 		return (
// 			<CustomTextInput
// 				inputRef={el => this.inputElement = el}
// 			/>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<Parent />,
// 	document.getElementById('root')
// );

//======================

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: ''
		}
		this.updateState = this.updateState.bind(this);
		this.clearInput = this.clearInput.bind(this);
	};
	updateState(e) {
		this.setState({ data: e.target.value });
	}
	clearInput() {
		this.setState({ data: '' });
		ReactDOM.findDOMNode(this.refs.myInput).focus();
	}
	render() {
		return (
			<div>
				<input value={this.state.data} onChange={this.updateState}
					ref="myInput"></input>
				<button onClick={this.clearInput}>CLEAR</button>
				<h4>{this.state.data}</h4>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);