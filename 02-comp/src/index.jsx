import React, { Component } from 'react'
import ReactDOM from "react-dom";

const Foo = () => <h1>It is Foo</h1>
const Bar = () => <h1>It is Bar</h1>

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