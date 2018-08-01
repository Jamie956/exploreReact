import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./components/Loading";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ "./components/Home"),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000 // 10 seconds
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ "./components/About"),
  loading: Loading,
  delay: 300,
  timeout: 10000
});

//组件分片,按需载入
class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
