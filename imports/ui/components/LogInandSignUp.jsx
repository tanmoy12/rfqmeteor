import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

export default class LogInandSignUp extends Component {


    render() {
        return (
            <div className="container">
                <div classID="loginbox" className="box">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="logo">
                                <img className="loginimg" src="/dricmlogo.jpg" alt="logo img"></img>
                            </div>

                        </div>

                        <div className="col-md-8">
                            <div className=" loginbtn btn-group btn-group-justified" role="group">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-default">Login</button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-default">Sign UP</button>
                                </div>
                            </div>

                            <div className="loginuser">
                                <input type="email" placeholder="User Name"/>
                                <input type="email" placeholder="PassWord"/>

                            </div>

                            <div className="forgotpass pull-right">
                                <a href="#" className="forgotPassword">Forgotten Password?</a>

                            </div>

                            <div className="submit">
                                <button type="button" className="btn btn-default">Log In</button>

                            </div>

                        </div>
                    </div>

                </div>

            </div>


        );
    }
}
