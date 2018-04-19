import React, { Component } from 'react'
import ReactDOM from "react-dom";

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'Harper',
	lastName: 'Perez'
};

const element = (
	<h1>
		Hello, {formatName(user)}!
	</h1>
);

ReactDOM.render(element, document.getElementById('root'));

//===================================

// const MyComponents = {
// 	DatePicker: function DatePicker(props) {
// 		return <div>Imagine a {props.color} datepicker here.</div>;
// 	}
// }

// function BlueDatePicker() {
// 	return <MyComponents.DatePicker color="blue" />;
// }

// ReactDOM.render(<BlueDatePicker />, document.getElementById('root'));

//========================================

// const Button = props => {
// 	const { kind, ...other } = props;
// 	const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
// 	return <button className={className} {...other} />;
// };

// const App = () => {
// 	return (
// 		<div>
// 			<Button kind="primary" onClick={() => console.log("clicked!")}>
// 				Hello World!
// 			</Button>
// 		</div>
// 	);
// };

// ReactDOM.render(<App />, document.getElementById('root'));

//=========================

// function Item(props) {
// 	return <li>{props.message}</li>;
// }

// function TodoList() {
// 	const todos = ['finish doc', 'submit pr', 'nag dan to review'];
// 	return (
// 		<ul>
// 			{todos.map((message) => <Item key={message} message={message} />)}
// 		</ul>
// 	);
// }
// ReactDOM.render(<TodoList />, document.getElementById('root'));

//================================

// function Repeat(props) {
// 	let items = [];
// 	for (let i = 0; i < props.numTimes; i++) {
// 		items.push(props.children(i));
// 	}
// 	return <div>{items}</div>;
// }

// function App() {
// 	return (
// 		<Repeat numTimes={10}>
// 			{(index) => <div key={index}>This is item {index} in the list</div>}
// 		</Repeat>
// 	);
// }

// ReactDOM.render(<App />, document.getElementById('root'));