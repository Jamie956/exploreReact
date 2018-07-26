import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        is Home
        <button onClick={() => this.props.history.push("/about")}>about</button>
      </div>
    );
  }
}

export default withRouter(Home);
