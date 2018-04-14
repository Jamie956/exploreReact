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

	addTask(text) {
		const id = Date.now();
		this.tasks.push({
			id,
			text
		});
		this.emit("change");
	};

	listTasks() {
		return this.tasks;
	};
}
const store = new Store;

class Main extends Component {
	constructor() {
		super();
		this.state = {
			tasks: store.listTasks(),
			task: ''
		};
		this.handleClick = this.handleClick.bind(this)
	}

	componentWillMount() {
		store.on("change", () => {
			this.setState({
				tasks: store.listTasks(),
			});
		});
	};

	handleClick() {
		store.addTask(this.state.task)
		this.setState({
			task: ''
		});
	}
	
	render() {
		const { task, tasks } = this.state;
		return (
			<div>
				<input type="text" name="task" value={task} onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }} />
				<button onClick={this.handleClick}>add</button>
				{tasks.map(task =>
					<Row key={task.id} {...task} />
				)}

			</div>
		);
	}
}

render(<Main />, document.getElementById('root'));