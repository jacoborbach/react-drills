import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.alertInfo = this.alertInfo.bind(this)
    }

    getusername(e) {
        this.setState({ username: e.target.value })
    }

    getpassword(e) {
        this.setState({ password: e.target.value })
    }

    alertInfo(e) {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
        this.setState({ username: '', password: '' })
    }

    render() {
        return (
            <div className="App" >
                <input value={this.state.username} onChange={e => this.getusername(e)} />
                <input value={this.state.password} onChange={e => this.getpassword(e)} />
                <button onClick={this.alertInfo}>Login</button>
            </div>
        );
    }
}

export default Login;