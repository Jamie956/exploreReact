import React, { Component } from "react";

//子组件（继承component形式）获取父组件属性
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}
const App = () => {
  let name = "bi";
  return <Form name={name} />;
};
export default App;
