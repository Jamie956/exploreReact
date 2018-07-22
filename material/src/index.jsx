import React, { Component } from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { RaisedButton, TextField } from "material-ui";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton label="Default" />
          <TextField hintText="Hint Text" />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
