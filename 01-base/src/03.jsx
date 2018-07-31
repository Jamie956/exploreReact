import React, { Component } from "react";

//引用组件
const Foo = () => <h1>It is Foo</h1>;

class App extends Component {
  render() {
    return (
      <div>
        <Foo />
      </div>
    );
  }
}
export default App;
