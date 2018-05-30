import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  withRouter,
  Prompt
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

const Child = ({ match }) => <div>id: {match.params.id}</div>;

const ComponentWithRegex = ({ match }) => (
  <div>order: {match.params.direction}</div>
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

//Prompt
const App7 = () => (
  <BrowserRouter>
    <Link to="/">Form</Link>
    <Route path="/" exact component={Form} />
  </BrowserRouter>
);

class Form extends React.Component {
  render() {
    return (
      <Prompt
        when={true}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />
    );
  }
}

ReactDOM.render(<App7 />, document.getElementById("root"));
