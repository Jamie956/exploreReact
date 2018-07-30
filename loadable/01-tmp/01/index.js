import React from "react";
import ReactDOM from "react-dom";

import Loadable from "react-loadable";
import Loading from "./components/Loading";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ "./components/Home"),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000 // 10 seconds
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
      <div>
        <Home />
        <About />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
