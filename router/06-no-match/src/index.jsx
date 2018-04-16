import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

const Layout = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/old-match">Old Match, to be redirected</Link></li>
                <li><Link to="/will-match">Will Match</Link></li>
                <li><Link to="/will-not-match">Will Not Match</Link></li>
                <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route path="/" exact component={Home} />
                <Redirect from="/old-match" to="/will-match" />
                <Route path="/will-match" component={WillMatch} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </BrowserRouter>
);

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
);

const WillMatch = () => (
    <div>
        <h1>WillMatch</h1>
    </div>
);

const NoMatch = ({ location }) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
);

ReactDOM.render(<Layout />, document.getElementById('root'));