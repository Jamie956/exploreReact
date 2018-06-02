import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./components/Loading";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ "./components/Home"),
  loading: Loading,
  delay: 300,
  timeout: 10000
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: 'About' */ "./components/About"),
  loading: Loading,
  delay: 300,
  timeout: 10000
});

class App extends React.Component {
  render() {
    return (
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
  }
}

export default App;
