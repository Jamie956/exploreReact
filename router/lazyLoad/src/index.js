import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
} from "react-router-dom";

import { Home } from "./Home";
import { Bubblegum } from "./Bubblegum";
import { Shoelaces } from "./Shoelaces";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/bubblegum",
    main: () => <Bubblegum />
  },
  {
    path: "/shoelaces",
    main: () => <Shoelaces />
  }
];

const App9 = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link> |
      <Link to="/bubblegum">Bubblegum</Link> |
      <Link to="/shoelaces">Shoelaces</Link>
      <hr />
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App9 />, document.getElementById("root"));
