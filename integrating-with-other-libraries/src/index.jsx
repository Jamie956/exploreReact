import React, { Component } from 'react'
import ReactDOM from "react-dom"

// function Button() {
// 	return <button id="btn">Say Hello</button>;
// }

// ReactDOM.render(
// 	<Button />,
// 	document.getElementById('root'),
// 	function () {
// 		$('#btn').click(function () {
// 			alert('Hello!');
// 		});
// 	}
// );

//=====================================

// class Chosen extends React.Component {
// 	componentDidMount() {
// 		this.$el = $(this.el);
// 		this.$el.chosen();
// 	}

// 	componentWillUnmount() {
// 		this.$el.chosen('destroy');
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<select className="Chosen-select" ref={el => this.el = el}>
// 					{this.props.children}
// 				</select>
// 			</div>
// 		);
// 	}
// }

// function Example() {
// 	return (
// 		<Chosen>
// 			<option>vanilla</option>
// 			<option>chocolate</option>
// 			<option>strawberry</option>
// 		</Chosen>
// 	);
// }

// ReactDOM.render(
// 	<Example />,
// 	document.getElementById('root')
// );

//==============================

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		$('#myModal').modal('show');
		$('#nod').text('axim')
	}

	render() {
		return (
			<div>
				<button ref={el => this.el = el} onClick={this.handleClick} >Show</button>
				<div className="modal fade" ref="navBox" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h4 className="modal-title" id="myModalLabel">Edit User</h4>
							</div>
							<div className="modal-body">
								<div id="nod">hello</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Example />,
	document.getElementById('root')
);