import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

class ExampleApp extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      row: {
        username: "",
        password: ""
      }
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleChange(e) {
    this.setState({
      row: { ...this.state.row, [e.target.name]: e.target.value }
    });
  }

  handleSubmit() {
    console.log(this.state);

    this.setState({ showModal: false });
  }

  render() {
    const { username, password } = this.state.row;

    return (
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
        >
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="username">User Name: </label>
              <input
                name="username"
                value={username}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="username"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="password">Password: </label>
              <input
                name="password"
                value={password}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>

          <button onClick={this.handleSubmit}>sbumit</button>
        </ReactModal>
      </div>
    );
  }
}

ReactDOM.render(<ExampleApp />, document.getElementById("root"));
