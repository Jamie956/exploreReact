import React, { Component } from 'react'

class ListUser extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            name: '',
            email: '',
            msg: ''
        }
        this.handleEditSubmit = this.handleEditSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleEditAction = this.handleEditAction.bind(this)
        this.handleDeleteAction = this.handleDeleteAction.bind(this)
    }

    componentDidMount() {
        let self = this;

        self.setState({
            users: [
                {
                    id: '1',
                    name: 'tom',
                    email: 'tomemail'
                },
                {
                    id: '2',
                    name: 'json',
                    email: 'jsonemail'
                }
            ]
        });

        fetch('/users', {
            method: 'GET'
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            self.setState({ users: data });
        }).catch(err => {
            console.log('caught it!', err);
        })

    }

    handleEditSubmit(e) {
        e.preventDefault()
        let data = {
            name: this.state.name,
            email: this.state.email
        }
        console.log(data)

        fetch("/users/edit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data)
            if (data === "success") {
                this.setState({
                    msg: "User has been edited."
                });
            }
        }).catch(function (err) {
            console.log(err)
        });

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEditAction(u) {
        console.log(u)
        this.setState({
            name: u.name,
            email: u.email
        })
    }

    handleDeleteAction(u) {
        let data = {
            id: u.id
        }

        console.log(data)

        fetch("/users/delete", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            if (data === "success") {
                this.setState({ msg: "User has been deleted." });
            }
        }).catch(function (err) {
            console.log(err)
        });

    }
    render() {
        return (
            <div>
                <h1>List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(u =>
                            <tr key={u.id}>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>
                                    <a href="#" onClick={() => this.handleEditAction(u)}>Edit</a>|
                                    <a href="#" onClick={() => this.handleDeleteAction(u)}>Delete</a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <h1>Edit</h1>

                <form onSubmit={this.handleEditSubmit}>
                    <label htmlFor="name">name </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="email">email </label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    <br />
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default ListUser
