import React, {Component} from "react";

export default class SideKick extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="jumbotron" id="sidekickjumbo">
                    <div className="form-group">
                        <p>FORWARD TO VERFIER : </p>
                        <div className="form-group col-md-12">
                            <select className=" form-control">
                                <option>Scientific Officer</option>
                                <option>Trader</option>
                                <option>Normal user</option>
                            </select>
                        </div>


                        <div id=" username1">
                            <input type=" text" name=" username" className=" form-control
                                     col-md-12 col-lg-12" placeholder=" Username"/>
                            <div className=" alert alert-danger col-md-12 col-lg-12">
                                <strong>Username not found</strong></div>
                        </div>

                        <div id=" password1">
                            <input type=" password" name=" password" className=" form-control
                                     col-md-12 col-lg-12" placeholder=" Password"/>
                            <div className=" alert alert-danger col-md-12 col-lg-12">
                                <strong> Password Incorrect</strong></div>

                        </div>


                        <div className=" form-group">
                            <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12
                                     pull-left">
                                <input type=" submit" name=" login-submit" id="
                                     login-submit" className=" form-control1 btn btn-primary" value=" SIGN & FORWARD"/>
                            </div>
                        </div>


                        <div className=" form-group">
                            <div className=" row">
                                <div className=" col-lg-12">
                                    <div className=" text-center">
                                        <a href="#" tabIndex="5" className="forgot-password">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
