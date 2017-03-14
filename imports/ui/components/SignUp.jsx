import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            type: 'init',
            bgColorComp: '#337ab7',
            bgColorEmpl: '#337ab7'

        };
    }


    handleRegister(e) {
        e.preventDefault();

        that = this;
        var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var designation = ReactDOM.findDOMNode(this.refs.designation).value.trim();

        console.log(designation);

        var User = {
            username: username,
            email: email,
            password: password,
            profile: {
                designation: designation
            }
        };
        Accounts.createUser(User, function (err) {
            if (err) {
                that.setState({
                    message: err.reason
                });
            }
        });

    }


    compClicked() {
        this.setState({
            type: 'comp',
            bgColorComp: 'darkred',
            bgColorEmpl: '#337ab7'
        });
    };

    emplClicked() {
        this.setState({
            type: 'empl',
            bgColorEmpl: 'darkred',
            bgColorComp: '#337ab7'
        });
    };


    render() {

        if (this.state.type == 'comp') {
            //console.log("HIIII");
            return (
                <div className="container">
                    <div className="login">
                        <h2 className="signUpHeader">Sign Up</h2>
                        <div className="btn-group btn-group-justified" role="group" aria-label="...">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-primary"
                                        onClick={this.compClicked.bind(this)}
                                        style={{backgroundColor:this.state.bgColorComp}}>Company
                                </button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-primary"
                                        onClick={this.emplClicked.bind(this)}
                                        style={{backgroundColor:this.state.bgColorEmpl}}>Employee</button>
                            </div>
                        </div>


                        <input className="signUpInput" ref='firstname' placeholder='First Name' type='text'/>
                        <input className="signUpInput" ref='lastname' placeholder='Last Name' type='text'/>
                        <input className="signUpInput" ref='email' placeholder='Email' type='email'/>
                        <input className="signUpInput" ref='mobno' placeholder='Mobile No' type='text'/>
                        <input className="signUpInput" ref='username' placeholder='Username' type='text'/>

                        <div className="signUpOption">
                            <select ref="designation" className="optionStyle">
                                <option className="optionStyle">Scientific Officer</option>
                                <option className="optionStyle">Accounting Officer</option>
                                <option className="optionStyle">Director</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-md btn-success signUpSubmit">Sign Up</button>
                        <br/>
                        <p>{this.state.message}</p>
                    </div>
                </div>
            );
        }
        if (this.state.type == 'init') {
            return (
                <div className="container">
                    <form onSubmit={this.handleRegister.bind(this)}>
                        <div className="login">

                            <h2 className="signUpHeader">Sign Up</h2>

                            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-primary"
                                            onClick={this.compClicked.bind(this)}
                                            style={{backgroundColor:this.state.bgColorComp}}>Company
                                    </button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-primary"
                                            onClick={this.emplClicked.bind(this)}
                                            style={{backgroundColor:this.state.bgColorEmpl}}>Employee</button>
                                </div>
                            </div>


                        </div>
                    </form>

                </div>
            );
        }

        if (this.state.type == 'empl') {
            return (
                <div className="container">
                    <form onSubmit={this.handleRegister.bind(this)}>
                        <div className="login">

                            <h2 className="signUpHeader">Sign Up</h2>

                            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-primary"
                                            onClick={this.compClicked.bind(this)}
                                            style={{backgroundColor:this.state.bgColorComp}}>Company
                                    </button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-primary"
                                            onClick={this.emplClicked.bind(this)}
                                            style={{backgroundColor:this.state.bgColorEmpl}}>Employee</button>
                                </div>
                            </div>


                        </div>
                    </form>

                </div>
            );
        }
    }
}