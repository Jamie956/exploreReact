import React, { Component } from "react";
import ReactDOM from "react-dom";

const Body = (props) => {
    const { title, name, handleChange, handleSubmit } = props

    return (
        <div>
            <input name="title" value={title} onChange={(e) => {handleChange(e)}} />
            <br/>
            <input name="name" value={name} onChange={(e) => {handleChange(e)}} />
            <br/>
            <button onClick={handleSubmit}>submit</button>
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
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(){
        alert('title: '+this.state.title)
        alert('name: '+this.state.name)
    }

    render() {
        const { title, name } = this.state
        return (
            <div>
                <Body 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    title={title}
                    name={name}
                 />
            </div>
        );
    }
}

ReactDOM.render(<Layout />, document.getElementById('root'));