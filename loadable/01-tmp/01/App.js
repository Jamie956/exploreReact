import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./components/Loading";

const Home = Loadable({
  loader: () => import("./components/Home"),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000 // 10 seconds
});

const About = Loadable({
  loader: () => import("./components/About"),
  loading: Loading,
  delay: 300,
  timeout: 10000
});

class App extends React.Component {
  constructor() {
    super();
    this.handleHome = this.handleHome.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
  }
  handleHome() {
    console.log(Home);
  }
  handleAbout() {
    console.log(About);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleHome}>home</button>
        <button onClick={this.handleAbout}>about</button>
      </div>
    );
  }
}

export default App;
