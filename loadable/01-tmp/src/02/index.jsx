import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./components/Loading";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ "./components/Home"),
  loading: Loading,
  delay: 300,
  timeout: 10000
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ "./components/About"),
  loading: Loading,
  delay: 300,
  timeout: 10000
});

//组件分片,按路由载入
class App extends Component {
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
