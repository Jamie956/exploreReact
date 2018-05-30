import React from "react";
import ReactDOM from "react-dom";

//string as props
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

//children
function FancyBorder({ color, children }) {
  return <div style={{ color: color }}>{children}</div>;
}

function App2() {
  return (
    <FancyBorder color="blue">
      <h1>Welcome</h1>
      <p>Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

//component as props
function Foo() {
  return <h1>Foo</h1>;
}

function Bar() {
  return <h1>Bar</h1>;
}

function SplitPane({ left, right }) {
  return (
    <div>
      <div style={{ float: "left" }}>{left}</div>
      <div style={{ float: "right" }}>{right}</div>
    </div>
  );
}

function App3() {
  return <SplitPane left={<Foo />} right={<Bar />} />;
}

//condition render component
const UserGreeting = props => <h1>Welcome back!</h1>;
const GuestGreeting = props => <h1>Please sign up.</h1>;

const App5 = props => {
  return <div>{true ? <UserGreeting /> : <GuestGreeting />}</div>;
};

//condition render using &&
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
const App6 = () => {
  const messages = ["React", "Re: React", "Re:Re: React"];
  return <Mailbox unreadMessages={messages} />;
};

//prevState
class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      status: !prevState.status
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggleClick}>click</button>
        <div>{this.state.status ? "Hide" : "Show"}</div>
      </div>
    );
  }
}

//form
class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    alert("Email: " + this.state.email);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Email:{" "}
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleChange}
          name="email"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//select
class App7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flavor: "coconut"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    alert("Your favorite flavor is: " + this.state.flavor);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select
            value={this.state.flavor}
            onChange={this.handleChange}
            name="flavor"
          >
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//components.key
const MyComponents = {
  DatePicker: ({ color }) => {
    return <div>Imagine a {color} datepicker here.</div>;
  }
}

function App8() {
  return <MyComponents.DatePicker color="blue" />;
}

//...
const Button = ({ kind, ...other }) => {
  return <button className={(kind === "a") ? "a" : "b"} {...other} />;
};
const App9 = () => {
  return (
    <div>
      <Button kind="a" onClick={() => alert('click')}>
        Hello World!
			</Button>
    </div>
  );
};

//childrens
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}
function App10() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

ReactDOM.render(<App10 />, document.getElementById("root"));
