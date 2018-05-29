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

ReactDOM.render(<App4 />, document.getElementById("root"));
