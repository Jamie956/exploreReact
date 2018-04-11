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

class Chosen extends React.Component {
	componentDidMount() {
	  this.$el = $(this.el);
	  this.$el.chosen();
	}
	
	componentWillUnmount() {
	  this.$el.chosen('destroy');
	}
	
	render() {
	  return (
		<div>
		  <select className="Chosen-select" ref={el => this.el = el}>
			{this.props.children}
		  </select>
		</div>
	  );
	}
  }
  
  function Example() {
	return (
	  <Chosen>
		<option>vanilla</option>
		<option>chocolate</option>
		<option>strawberry</option>
	  </Chosen>
	);
  }
  
  ReactDOM.render(
	<Example />,
	document.getElementById('root')
  );