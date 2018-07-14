import React, { Component } from "react";
import ReactDOM from "react-dom";

//class组件
class Demo1 extends Component {
  render() {
    return (
      <div>
        <h1>Hello World.</h1>
      </div>
    );
  }
}

//函数
const Demo2 = () => {
  return (
    <div>
      <h1>Hello World.</h1>
    </div>
  );
};

//as tag
const Foo = () => <h1>It is Foo</h1>;
const Bar = () => <h1>It is Bar</h1>;

class Demo3 extends Component {
  render() {
    return (
      <div>
        <Foo />
        <Bar />
      </div>
    );
  }
}

//click event as function
const Demo4 = () => {
  const alertFun = () => {
    alert("ax");
  };
  return <button onClick={alertFun}>click me</button>;
};

//click event as class
class Demo8 extends Component {
  render() {
    const alertFun = () => {
      alert("mi");
    };
    return <button onClick={alertFun}>click me</button>;
  }
}

//class definded a function
class Demo9 extends Component {
  constructor() {
    super();
    this.alertFun = this.alertFun.bind(this);
  }
  alertFun() {
    alert("ki");
  }
  render() {
    return <button onClick={this.alertFun}>click me</button>;
  }
}

//class init and get state
class Demo10 extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "hi"
    };
  }
  render() {
    return <h1>{this.state.greeting}</h1>;
  }
}

//class init, set and get state
class Demo11 extends Component {
  constructor() {
    super();
    this.state = {
      greeting: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      greeting: "halo"
    });
  }
  render() {
    return (
      <div>
        {this.state.greeting}
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

//function get props
const UserForm = props => {
  return (
    <div>
      {props.user.name} | {props.user.email}
    </div>
  );
};
const Demo5 = () => {
  let user = {
    name: "tom",
    email: "tomemail"
  };
  return <UserForm user={user} />;
};

//function get props 2
const Form1 = ({ user }) => {
  return (
    <div>
      {user.name} | {user.email}
    </div>
  );
};
const Demo12 = () => {
  let user = {
    name: "jo",
    email: "joemail"
  };
  return <Form1 user={user} />;
};

//class get props
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

//function as props, set input data as state
const Body = ({ title, name, handleChange, handleSubmit }) => {
  return (
    <div>
      <input
        name="title"
        value={title}
        onChange={e => {
          handleChange(e);
        }}
      />
      <br />
      <input
        name="name"
        value={name}
        onChange={e => {
          handleChange(e);
        }}
      />
      <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

class Demo7 extends Component {
  constructor() {
    super();
    this.state = {
      title: "Here We Go!",
      name: "tomcat"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    alert("title: " + this.state.title);
    alert("name: " + this.state.name);
  }

  render() {
    const { title, name } = this.state;
    return (
      <div>
        <Body
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={title}
          name={name}
        />
      </div>
    );
  }
}
ReactDOM.render(<Demo7 />, document.getElementById("root"));
