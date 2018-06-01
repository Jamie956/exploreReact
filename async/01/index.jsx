import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Home from './Home.jsx'
import About from "./About.jsx";

export class App extends Component {
  constructor() {
    super();
    this.handleloadhome = this.handleloadhome.bind(this);
    this.handleloadabout = this.handleloadabout.bind(this);
  }
  handleloadhome() {
    // alert("home");
    import("./Home.jsx")
      .then(mod => {
        // someOperate(mod);
        console.log(mod);
      })
      .catch(e => console.log("err", e));
  }
  handleloadabout() {
    alert("about");
  }

  render() {
    return (
      <div>
        {/* <Home /> */}
        <About />
        <button onClick={this.handleloadhome}>load home</button>***
        <button onClick={this.handleloadabout}>load about</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
