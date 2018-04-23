import React, { Component } from 'react'
import ReactDOM from "react-dom";

class Demo1 extends Component {
	render() {
		return (
			<div>
				<h1>Hello World.</h1>
			</div>
		)
	}
}

// #############################################

const Demo2 = () => {
	return (
		<div>
			<h1>Hello World.</h1>
		</div>
	)
}

// #############################################

const Foo = () => <h1>It is Foo</h1>
const Bar = () => <h1>It is Bar</h1>

class Demo3 extends Component {
    render() {
        return (
            <div>
                <Foo />
                <Bar />
            </div>
        );
    }
}

// #############################################

class Demo4 extends Component {
	constructor(){
		super();
		this.state = {
            name: 'Moks'
        };

    };
	render(){
        const { name } = this.state
		return (
			<div>
                <h1>{name}</h1>
                <button onClick={ () => { this.setState({name:'Miki'}) } }>Click me!</button>
			</div>
		);
	}
}


// #############################################

class UserForm extends Component {
	render() {
		const { name, password } = this.props.info
		return (
			<div>
				<h1>{name}</h1>
				<h1>{password}</h1>
			</div>
		);
	}
}

class Demo5 extends Component {
	render() {
		const user = {
			name: 'Tomcat',
			password: 'ddd90'
		}

		return (
			<div>
				<h1>Login Page</h1>
				<UserForm info={user} />
			</div>
		);
	}

}

// #############################################

const LoginForm = (props) => {
	const { name, email } = props.user
	return (
		<div>
			<h1>name: {name}</h1>
			<h1>email: {email}</h1>
		</div>
	);
}

const Demo6 = () => {
	const userInfo = {
		name: 'tomcat',
		email: 'tomcat@gamil.com'
	}
	return (
		<div>
			<h1>Login Page</h1>
			<LoginForm user={userInfo} />
		</div>
	)
}

// #############################################

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

class Demo7 extends Component {
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
ReactDOM.render(<Demo7 />, document.getElementById('root'));