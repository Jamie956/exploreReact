import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Layout = () => (
    <BrowserRouter>
        <div>
            <h2>Accounts</h2>
            <ul>
                <li><Link to="/netflix">Netflix</Link></li>
                <li><Link to="/zillow-group">Zillow Group</Link></li>

                <hr />
                <li><Link to="/order/asc">asc</Link></li>
                <li><Link to="/order/desc">desc</Link></li>
                <li><Link to="/order/foo">foo</Link></li>
            </ul>

            <hr />
            <Route path="/:id" component={Child} />
            <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex} />
        </div>
    </BrowserRouter>
);

const Child = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
);

const ComponentWithRegex = ({ match }) => (
    <div>
        <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
);

ReactDOM.render(<Layout />, document.getElementById('root'));