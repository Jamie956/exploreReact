import React, { Component } from "react";

//反射
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    alert("email: " + this.email.value);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input defaultValue="email" type="text" ref={e => (this.email = e)} />
        <p />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
