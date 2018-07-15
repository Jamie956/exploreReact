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
