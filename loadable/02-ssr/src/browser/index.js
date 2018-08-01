import React from "react";
import ReactDOM, { hydrate } from "react-dom";
import App from "../shared/App";
import Loadable from "react-loadable";

Loadable.preloadReady().then(() => {
  hydrate(<App />, document.getElementById("app"));
  // ReactDOM.render(<App />, document.getElementById("app"));
});
