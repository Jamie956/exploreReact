import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import routes from "./routes";

const GenetateRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/home">home</Link>
      <hr />
      <Switch>
        {routes.map((route, i) => <GenetateRoutes key={i} {...route} />)}
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
