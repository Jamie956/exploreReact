import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./style.scss";

class App extends Component {
  constructor() {
    super();
    console.log(style);
  }
  render() {
    return (
      <div>
        <div className={style.header}>header</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
