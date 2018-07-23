import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
      <Button variant="contained" color="secondary">
        Super Secret Password
      </Button>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
