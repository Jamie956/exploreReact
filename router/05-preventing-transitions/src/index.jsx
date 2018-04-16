import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Prompt } from "react-router-dom";

const Layout = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Form</Link></li>
                <li><Link to="/one">One</Link></li>
                <li><Link to="/two">Two</Link></li>
            </ul>
            <Route path="/" exact component={Form} />
            <Route path="/one" render={() => <h3>One</h3>} />
            <Route path="/two" render={() => <h3>Two</h3>} />
        </div>
    </BrowserRouter>
);

class Form extends React.Component {
    state = {
        isBlocking: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        this.setState({
            isBlocking: false
        });
    }

    handleChange = (e) => {
        this.setState({
            isBlocking: e.target.value.length > 0
        });
    }

    render() {
        const { isBlocking } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <Prompt when={isBlocking} message={location => `Are you sure you want to go to ${location.pathname}`} />
                <p>Blocking?{" "}{isBlocking ? "Yes, click a link or the back button" : "Nope"}</p>
                <p><input size="50" placeholder="type something to block transitions" onChange={this.handleChange} /></p>
                <p><button>Submit to stop blocking</button></p>
            </form>
        );
    }
}

ReactDOM.render(<Layout />, document.getElementById('app'));