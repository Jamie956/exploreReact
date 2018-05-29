import React, { Component } from "react";
import { render } from "react-dom";

import { User } from "./User.jsx";
import { Rows } from "./Rows.jsx";


const userStore = new User();

class Main extends Component {
  constructor() {
    super();
    this.state = {
      users: userStore.findAll(),
      user: ""
    };
	this.handleClick = this.handleClick.bind(this);
	this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    userStore.on("change", () => {
      this.setState({
        users: userStore.findAll()
      });
    });
  }

  handleClick() {
    userStore.add(this.state.user);
    this.setState({
      user: ""
    });
  }

  handleChange(e){
	this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="user"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>add</button>
        <Rows users={this.state.users} />
      </div>
    );
  }
}

render(<Main />, document.getElementById("root"));
