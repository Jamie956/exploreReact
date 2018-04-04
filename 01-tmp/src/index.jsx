import React, { Component } from 'react'
import ReactDOM from "react-dom";

class Greeting extends Component {
	render() {
		return (
			<div>
				<h1>Hello World.</h1>
			</div>
		)
	}
}

ReactDOM.render(<Greeting />, document.getElementById('root'));