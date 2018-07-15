import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  withRouter,
  Prompt,
  Switch,
  Redirect
} from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const App1 = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

//match.url
const Art = () => <div>Art</div>;
const Health = () => <div>Health</div>;
const Topics = ({ match }) => {
  return (
    <div>
      <Link to={`${match.url}/art`}>Art</Link>
      <Route path={`${match.url}/art`} component={Art} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
};
const App2 = () => (
  <BrowserRouter>
    <div>
      <Link to="/topics">Topics</Link>
      <hr />
      <Route path="/topics" component={Topics} />
    </div>
  </BrowserRouter>
);

//params
const Child = ({ match }) => <div>id: {match.params.id}</div>;
const ComponentWithRegex = ({ match }) => (
  <div>order: {match.params.direction}</div>
);
const App3 = () => (
  <BrowserRouter>
    <div>
      <Link to="/itemid">getItem</Link> |
      <Link to="/order/asc">asc</Link> |
      <Link to="/order/desc">desc</Link>
      <hr />
      <Route path="/:id" component={Child} />
      <Route
        path="/order/:direction(asc|desc)"
        component={ComponentWithRegex}
      />
    </div>
  </BrowserRouter>
);

//withRouter
const AuthButton = withRouter(({ history }) => (
  <p>
    <button onClick={() => history.push("/home")}>Sign out</button>
  </p>
));

const App4 = () => (
  <BrowserRouter>
    <AuthButton />
  </BrowserRouter>
);

//custom route
const Protected = () => <h3>Protected</h3>;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

const App5 = () => (
  <BrowserRouter>
    <div>
      <Link to="/protected">Protected Page</Link>
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </BrowserRouter>
);

//custom link
const App6 = () => (
  <BrowserRouter>
    <div>
      <MyLink to="/" label="Home" />
      <MyLink to="/about" label="About" />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

const MyLink = ({ label, to }) => <Link to={to}>{label}</Link>;

//not match
const App8 = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home1</Link> |
      <Link to="/old-match">Old Match, to be redirected</Link> |
      <Link to="/will-match">Will Match</Link> |
      <Link to="/will-not-match">Will Not Match</Link> |
      <Link to="/also/will/not/match">Also Will Not Match</Link>
      <hr />
      <Switch>
        <Route path="/" exact component={Home1} />
        <Redirect from="/old-match" to="/will-match" />
        <Route path="/will-match" component={WillMatch} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </BrowserRouter>
);

const Home1 = () => <h1>Home1</h1>;
const WillMatch = () => <h1>WillMatch</h1>;
const NoMatch = ({ location }) => (
  <h3>
    No match for <code>{location.pathname}</code>
  </h3>
);

//config
const routes1 = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    main: () => <h2>Shoelaces</h2>
  }
];

const App9 = () => (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link> |
      <Link to="/bubblegum">Bubblegum</Link> |
      <Link to="/shoelaces">Shoelaces</Link>
      <hr />
      {routes1.map((route, index) => (
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

//config
const Main = () => <h2>Main</h2>;
const Sandwiches = () => <h2>Sandwiches</h2>;
const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

const Tacos = ({ routes }) => (
  <div>
    <Link to="/tacos/bus">Bus</Link> |
    <Link to="/tacos/cart">Cart</Link>
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const App7 = () => (
  <BrowserRouter>
    <div>
      <Link to="/tacos">Tacos</Link> |
      <Link to="/sandwiches">Sandwiches</Link>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App4 />, document.getElementById("root"));
