import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const App1 = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

//
const Art = () => <div>Art</div>;
const Health = () => <div>Health</div>;
const Topics = ({ match }) => {
  return (
    <div>
      <Link to={`${match.url}/art`}>Art</Link>
      <Route path={`${match.url}/art`} component={Art} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
};
const App2 = () => (
  <BrowserRouter>
    <div>
      <Link to="/topics">Topics</Link>
      <hr />
      <Route path="/topics" component={Topics} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App2 />, document.getElementById("root"));
