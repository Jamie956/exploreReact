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

//组件生命周期
class Layout extends Component {
  constructor() {
    super();
  }
  //初次渲染触发
  componentWillMount() { }
  //渲染时触发
  componentDidMount() { }
  //移除组件触发
  componentWillUnmount() { }
  //是否允许更新组件，返回flase拒绝更新
  shouldComponentUpdate(nextState) { }
  render() {
    return (
      <h1>hi</h1>
    );
  }
}

//移除组件
ReactDOM.unmountComponentAtNode(document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//children作为属性传递
function FancyBorder({ color, children }) {
  return <div style={{ color: color }}>{children}</div>;
}

function App2() {
  return (
    <FancyBorder color="blue">
      <h1>Welcome</h1>
    </FancyBorder>
  );
}

//组件作为属性传递
function Foo() {
  return <h1>Foo</h1>;
}

function SplitPane({ left }) {
  return <div style={{ float: "left" }}>{left}</div>;
}

function App3() {
  return <SplitPane left={<Foo />} />;
}

//根据情况渲染组件
const UserGreeting = props => <h1>Welcome back!</h1>;
const GuestGreeting = props => <h1>Please sign up.</h1>;

const App5 = props => {
  return <div>{true ? <UserGreeting /> : <GuestGreeting />}</div>;
};

//设置state时传入当前state
function handleClick() {
  this.setState(prevState => ({
    status: !prevState.status
  }));
}

//表单提交事件
class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault(); //阻止事件往下执行
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//...传递剩下的属性
const Button = ({ kind, ...other }) => {
  return <button className={kind === "a" ? "a" : "b"} {...other} />;
};
const App9 = () => {
  return (
    <div>
      <Button kind="a" onClick={() => alert("click")}>
        Hello World!
      </Button>
    </div>
  );
};

//定义属性类型
const Greeting = ({ name, age }) => (
  <h1>
    Hello, {name}, {age}
  </h1>
);

Greeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

//反射
class App12 extends React.Component {
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
