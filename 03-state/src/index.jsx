import React, { Component } from "react";
import ReactDOM from "react-dom";

class Greeting extends Component {
	constructor(){
		super();
		this.state = {
            name: 'Moks'
        };

    };
	render(){
        const { name } = this.state
		return (
			<div>
                <h1>{name}</h1>
                <button onClick={ () => { this.setState({name:'Miki'}) } }>Click me!</button>
			</div>
		);
	}
}

ReactDOM.render(<Greeting/>, document.getElementById('root'));