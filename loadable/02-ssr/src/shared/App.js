import React, { Component } from "react";
import Loadable from "react-loadable";
import Loading from "./Loading";
import { BrowserRouter, Route, Link } from "react-router-dom";

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

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Link to="/">Home</Link> |
//           <Link to="/about">About</Link>
//           <hr />
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

export default App;
