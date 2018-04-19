import React, { Component } from 'react'
import ReactDOM from "react-dom";

import Select from 'react-select';
import 'react-select/dist/react-select.css';

// class App extends React.Component {
// 	state = {
// 	  selectedOption: '',
// 	}
// 	handleChange = (selectedOption) => {
// 	  this.setState({ selectedOption });
// 	  console.log(`Selected: ${selectedOption.label}`);
// 	}
// 	render() {
// 		const { selectedOption } = this.state;

// 	  return (
// 		<Select
// 		  name="form-field-name"
// 		  value={selectedOption}
// 		  onChange={this.handleChange}
// 		  options={[
// 			{ value: 'one', label: 'One' },
// 			{ value: 'two', label: 'Two' },
// 		  ]}
// 		/>
// 	  );
// 	}
//   }

// ReactDOM.render(<App />, document.getElementById('root'));


//=================================================================

class App extends React.Component {
	onChange = (value) => {
		this.setState({ value });
		console.log('Boolean Select value changed to', value);
	}
	render() {
		return (
			<div>
				<Select
					onChange={this.onChange}
					options={[
						{ value: true, label: 'Yes' },
						{ value: false, label: 'No' }
					]}
					simpleValue
					value={null}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));