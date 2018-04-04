import React, { Component } from 'react'
import ReactDOM from "react-dom";

const Foo = () => {
    return (
        <div>
            <h1>It is Foo</h1>
        </div>
    );
}

const Bar = () => {
    return (
        <div>
            <h1>It is Bar</h1>
        </div>
    );
}

class Layout extends Component {
    render() {
        return (
            <div>
                <Foo />
                <Bar />
            </div>
        );
    }
}

ReactDOM.render(<Layout />, document.getElementById('root'));