// import React from "react";
// import ReactDOM, { hydrate } from "react-dom";
// import App from "../shared/App";
// import Loadable from "react-loadable";

// Loadable.preloadReady().then(() => {
//   hydrate(<App />, document.getElementById("root"));
//   // ReactDOM.render(<App />, document.getElementById("root"));
// });


import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
// import App from './components/App';
import App from "../shared/App";

window.main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<App/>, document.getElementById('root'));
  });
};