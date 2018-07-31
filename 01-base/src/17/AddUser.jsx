import React, { Component } from "react";

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      msg: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email
    };
    console.log("submit");
    console.log(data);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Create</h1>
        <form onSubmit={this.handleSubmit}>
          name:{" "}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          email:{" "}
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
