import React, { Component } from "react";
import AddUser from "./AddUser.jsx";
import ListUser from "./ListUser.jsx";

export class App extends Component {
  render() {
    return (
      <div>
        <AddUser />
        <ListUser />
      </div>
    );
  }
}

export default App;
