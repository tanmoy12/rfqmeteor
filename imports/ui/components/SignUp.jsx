import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }
    handleRegister(e){
        e.preventDefault();

        that=this;
        var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var designation = ReactDOM.findDOMNode(this.refs.designation).value.trim();

        console.log(designation);

        var User ={
            username: username,
            email: email,
            password: password,
            profile: {
                designation: designation
            }
        };
        Accounts.createUser(User, function (err) {
            if(err){
                that.setState({
                    message: err.reason
                });
            }
        });

    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleRegister.bind(this)}>
                    <div className="login">
                        <h2 className="signUpHeader">Sign Up</h2>
                        <input className="signUpInput" ref='firstname' placeholder='First Name' type='text'/>
                        <input className="signUpInput" ref='lastname' placeholder='Last Name' type='text'/>
                        <input className="signUpInput" ref='email' placeholder='Email' type='email'/>
                        <input className="signUpInput" ref='mobno' placeholder='Mobile No' type='text'/>
                        <input className="signUpInput" ref='username' placeholder='Username' type='text'/>

                        <div className="signUpInput">
                            <select ref="designation" className="form-control">
                                <option className="form-control">Scientific Officer</option>
                                <option className="form-control">Accounting Officer</option>
                                <option className="form-control">Director</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-md btn-success">Sign Up</button>
                        <br/>
                        <p>{this.state.message}</p>
                    </div>
                </form>

            </div>
        );
    }
}