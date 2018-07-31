import React, { Component } from "react";

class ListUser extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      name: "",
      email: "",
      msg: ""
    };
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditAction = this.handleEditAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
  }

  componentDidMount() {
    let self = this;

    self.setState({
      users: [
        {
          id: "1",
          name: "tom",
          email: "tomemail"
        },
        {
          id: "2",
          name: "json",
          email: "jsonemail"
        }
      ]
    });
  }

  handleEditSubmit(e) {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email
    };
    console.log(data);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEditAction(u) {
    this.setState({
      name: u.name,
      email: u.email
    });

    console.log("edit");
    console.log({
      name: u.name,
      email: u.email
    });
  }

  handleDeleteAction(u) {
    let data = {
      id: u.id
    };

    console.log("delete");
    console.log(data);
  }
  render() {
    return (
      <div>
        <h1>List</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <a href="#" onClick={() => this.handleEditAction(u)}>
                    Edit
                  </a>|
                  <a href="#" onClick={() => this.handleDeleteAction(u)}>
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Edit</h1>

        <form onSubmit={this.handleEditSubmit}>
          name<input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          email<input
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

export default ListUser;
