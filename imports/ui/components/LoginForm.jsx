import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }
    handleLogin(e){
        e.preventDefault();

        that=this;
        var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

        Meteor.loginWithPassword(username,password, function (err) {
            if(err){
                that.setState({
                    message: err.reason
                });
            }else{
                console.log(Meteor.user());
                FlowRouter.go('/dashboard');
            }
        });

    };

    render() {

        return (
            <form onSubmit={this.handleLogin.bind(this)}>
                <div className="form-group">
                    <div className="form-group">

                    </div>
                    <label htmlFor="username" >Username</label>
                    <input type="text" name="username" ref="username" className="form-control" placeholder="Username"/>

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" ref="password" className="form-control" placeholder="Password"/>
                        <div className="alert alert-danger">
                            <strong> {this.state.message}</strong>
                        </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-xs-7">
                            <input type="checkbox" name="remember" id="remember"/>
                                <label htmlFor="remember"> Remember Me</label>
                        </div>
                        <div className="col-xs-5 pull-right">
                            <input type="submit" className="form-control btn btn-success" value="Log In"/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <a href="#" tabIndex="5" className="forgot-password">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
