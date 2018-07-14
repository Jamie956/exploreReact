import React, { Component } from "react";
import ReactDOM from "react-dom";

//class作为组件
class Demo1 extends Component {
  render() {
    return (
      <div>
        <h1>Hello World.</h1>
      </div>
    );
  }
}

//函数作为组件
const Demo2 = () => {
  return (
    <div>
      <h1>Hello World.</h1>
    </div>
  );
};

//引用组件
const Foo = () => <h1>It is Foo</h1>;

class Demo3 extends Component {
  render() {
    return (
      <div>
        <Foo />
      </div>
    );
  }
}

//点击事件
const Demo4 = () => {
  const alertFun = () => {
    alert("ax");
  };
  return <button onClick={alertFun}>click me</button>;
};


//绑定函数
class Demo9 extends Component {
  constructor() {
    super();
    this.alertFun = this.alertFun.bind(this);
  }
  alertFun() {
    alert("ki");
  }
}

//state初始化，设置，获取
class Demo11 extends Component {
  constructor() {
    super();
    //初始化state
    this.state = {
      greeting: ""
    };
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
      </div>
    );
  }
}

//组件属性传递，获取
const UserForm = ({ user }) => {
  return (
    <div> {user.name} </div>
  );
};
const Demo5 = () => {
  let user = { name: "tom" };
  return <UserForm user={user} />;
};

//组件属性传递，获取
class Form2 extends Component {
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
const Demo13 = () => {
  let name = "bi";
  return <Form2 name={name} />;
};

//input change事件，修改state
class Demo7 extends Component {
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
            handleChange(e);
          }}
        />
      </div>
    );
  }
}

//渲染组件到DOM
ReactDOM.render(<Demo7 />, document.getElementById("root"));
