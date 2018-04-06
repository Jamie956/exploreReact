import React, { Component } from "react";
import { render } from "react-dom";
import { EventEmitter } from "events";

class Row extends Component {
	render() {
		const { complete, text } = this.props;
		const icon = complete ? "\u2714" : "\u2716"
		return (
			<li>
				<span>{text}</span> <span>{icon}</span>
			</li>
		);
	}
}

/**
 * store
 */
class Store extends EventEmitter {
	constructor(){
		super()
		this.tasks = [
			{
				id: 9456,
				text: "Home Work",
				complete: false
			},
			{
				id: 1256,
				text: "Play Game",
				complete: true
			}
		];
	};
	
	createTask(text) {
		const id = Date.now();
		this.tasks.push({
			id,
			text,
			complete: false,
		});
		this.emit("change");
	};

	getTasks(){
		return this.tasks;
	};
}
const store = new Store;

/**
 * main
 */
class Main extends Component {
	constructor() {
		super();
		this.state = {
			tasks: store.getTasks(),
		};
	}
	
	componentWillMount() {
		store.on("change", () => {
			this.setState({
				tasks: store.getTasks(),
			});
		});
	};

	create(){
		store.createTask(Date.now());
	}

	render() {
		const { tasks } = this.state;
		const Rows = tasks.map((task) => {
			return <Row key={task.id} {...task}/>;
		});
		
		return (
			<div>
				<button onClick={this.create.bind(this)}>Create</button>
				{Rows}
			</div>
		);
	}
}

render(<Main /> , document.getElementById('root'));