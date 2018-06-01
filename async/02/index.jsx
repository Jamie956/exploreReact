import React, { Component } from "react";
import ReactDOM from "react-dom";
import Bundle from "./Bundle.jsx";

const Home = props => (
  <Bundle load={() => import("./Home.jsx")}>
    {Component => <Component {...props} />}
  </Bundle>
);

const About = props => (
  <Bundle load={() => import("./About.jsx")}>
    {Component => <Component {...props} />}
  </Bundle>
);

export class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
