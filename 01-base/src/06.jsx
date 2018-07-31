import React, { Component } from "react";

//state初始化，设置，获取
class App extends Component {
  constructor() {
    super();
    //初始化state
    this.state = {
      greeting: "init greeting"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    //设置state
    this.setState({
      greeting: "halo"
    });
  }
  render() {
    //获取state
    return (
      <div>
        {this.state.greeting}
        <p />
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default App;
