import React, { Component } from "react";

//绑定函数
class App extends Component {
  constructor() {
    super();
    this.foo = this.foo.bind(this);
  }
  foo() {
    alert("is foo");
  }
  render (){
    return (
      <button onClick={this.foo}>click</button>
    )
  }
}

export default App;
