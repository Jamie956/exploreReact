import React, { Component } from "react";
import ReactDOM from "react-dom";

class Greeting extends Component {
	constructor(){
		super();
		this.state = {
            name: 'Moks',
            password: '4521'
        };
    };
    handleClick = () => {
        this.setState({password:'123'})
    }
	render(){
        const { name, password } = this.state
		return (
			<div>
                <h1>{name}</h1>
                <h1>{password}</h1>
                <button onClick={this.handleClick}>Click me!</button>
			</div>
		);
	}
}

ReactDOM.render(<Greeting/>, document.getElementById('root'));