import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        const { title } = this.props
        return (
            <div>
                <h1>{title}</h1>
                <input value={title} onChange={this.handleChange} />
            </div>
        );
    }
}

class Layout extends Component {
    constructor() {
        super();
        this.state = { title: "Here We Go!" }
        this.changeTitle = this.changeTitle.bind(this);        
    }

    changeTitle(title) {
        this.setState({ title });
    }

    render() {
        const { title } = this.state
        return (
            <div>
                <Header changeTitle={this.changeTitle} title={title} />
            </div>
        );
    }
}

ReactDOM.render(<Layout />, document.getElementById('root'));