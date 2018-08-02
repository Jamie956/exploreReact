import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);

    let repos;
    if (__isClient__) {
      repos = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      repos = this.props.staticContext.data;
    }
    this.state = {
      repos
    };
  }
  render() {
    return <div>About, {this.state.repos}</div>;
  }
}
