import React, { Component } from 'react'
import ReactDOM from "react-dom";
import AddUser from './AddUser.jsx'
import ListUser from './ListUser.jsx'

export class User extends Component {
	render() {
		return (
			<div>
				<AddUser />
				<ListUser />
			</div>
		)
	}
}

ReactDOM.render(<User />, document.getElementById('root'));