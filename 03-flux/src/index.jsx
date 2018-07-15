import React, { Component } from "react";
import { render } from "react-dom";
import * as action from "./action.jsx";

class Layout extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            action.add(Date.now());
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            action.update(Date.now());
          }}
        >
          update
        </button>
      </div>
    );
  }
}

render(<Layout />, document.getElementById("root"));
