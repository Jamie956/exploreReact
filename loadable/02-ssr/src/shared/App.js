import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./Loading";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ "./Home"),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000 // 10 seconds
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ "./About"),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000 // 10 seconds
});

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
