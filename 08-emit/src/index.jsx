import React, { Component } from "react";
import { render } from "react-dom";
import { EventEmitter } from "events";

const Row = (props) => {
	return (
		<li>
			<span>{props.text}</span>
		</li>
	)
}

class Store extends EventEmitter {
	constructor() {
		super()
		this.tasks = [
			{
				id: 1,
				text: "Home Work"
			},
			{
				id: 2,
				text: "Game"
			}
		];
	};

	createTask(text) {
		const id = Date.now();
		this.tasks.push({
			id,
			text
		});
		this.emit("change");
	};

	getTasks() {
		return this.tasks;
	};
}
const store = new Store;

class Main extends Component {
	constructor() {
		super();
		this.state = {
			tasks: store.getTasks(),
			newTask: ''
		};
	}

	componentWillMount() {
		store.on("change", () => {
			this.setState({
				tasks: store.getTasks(),
			});
		});
	};

	render() {
		const { tasks, newTask } = this.state;
		const Rows = tasks.map((task) => {
			return <Row key={task.id} {...task} />;
		});

		return (
			<div>
				<input type="text" value={newTask} onChange={(e) => { this.setState({ newTask: e.target.value }) }} />
				<button onClick={() => { store.createTask(newTask) }}>Create</button>
				{Rows}
			</div>
		);
	}
}

render(<Main />, document.getElementById('root'));