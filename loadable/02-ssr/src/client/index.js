import React from "react";
import ReactDOM, { hydrate } from "react-dom";
import App from "../shared/App";
import Loadable from "react-loadable";

Loadable.preloadReady().then(() => {
  hydrate(<App />, document.getElementById("root"));
  // ReactDOM.render(<App />, document.getElementById("root"));
});
