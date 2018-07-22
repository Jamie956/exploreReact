import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Button } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World.</h1>
        <Button>Click Here</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
