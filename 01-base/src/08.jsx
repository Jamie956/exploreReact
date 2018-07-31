import React, { Component } from "react";

//input change事件，修改state
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Here We Go!"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <input
          name="title"
          value={this.state.title}
          onChange={e => {
            this.handleChange(e);
          }}
        />
      </div>
    );
  }
}

export default App;
