import React, { Component } from "react";
import ReactDOM from "react-dom";

const Body = (props) => {
    const { title, name, handleChange } = props

    return (
        <div>
            <input name="title" value={title} onChange={(e) => {handleChange(e)}} />
            <br/>
            <input name="name" value={name} onChange={(e) => {handleChange(e)}} />
            
        </div>
    );
}

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            title: "Here We Go!",
            name: "tomcat"
        }
        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { title, name } = this.state
        return (
            <div>
                <Body 
                    handleChange={this.handleChange} 
                    title={title}
                    name={name}
                 />
            </div>
        );
    }
}

ReactDOM.render(<Layout />, document.getElementById('root'));