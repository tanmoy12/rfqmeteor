import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

export default class SignUp2 extends Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="loginbox" className="jumbotron">

                        <div classID="signup2" className="center-block">
                            <h2>Sign Up</h2>

                        </div>

                        <div className="center-block">
                            <div className=" loginbtn btn-group btn-group-justified" role="group">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-default">Employee</button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-default">Company</button>
                                </div>
                            </div>

                            <div classID="employee" className="employee">
                                <div className="row">
                                    <div className="col-md-6 employee">
                                        <input className="fullname" placeholder="Full Name" type="text"/>
                                        <input className="Username" placeholder="Username" type="text"/>
                                        <textarea className="form-control" cols="10" placeholder="Address">
                                            </textarea>
                                        <input className="institute" placeholder="Institute" type="text"/>
                                        <select ref="empDesignation" className="optionStyle"
                                                style={{marginTop: "42px", color: "#46485c"}}>
                                            <option className="optionStyle">Scientific Officer</option>
                                            <option className="optionStyle">Accounting Officer</option>
                                            <option className="optionStyle">Director</option>
                                        </select>
                                        <input className="password" placeholder="password" type="password"/>
                                        <input className="password" placeholder="Confirm password" type="password"/>
                                        <input className="email" placeholder="Email" type="text"/>
                                        <input className="mobile" placeholder="Mobile Number" type="text"/>
                                    </div>
                                    <div className="col-md=6">
                                        <div className="imagebox">
                                            <input className="picinput" type="file" name="empSigSeal" accept="image/*"/>

                                        </div>
                                        <div className="btnimg">
                                            <button className="btn btn-success">Add Profile picture</button>
                                        </div>
                                        <div className="signaturebox">
                                            <input className="picinput" type="file" name="empSigSeal" accept="image/*"/>

                                        </div>
                                        <div className="btnimg2">
                                            <button className="btn btn-success">Add signature</button>
                                        </div>
                                    </div>

                                </div>
                                <div className="submit-btn center-block">
                                    <button className="btn btn-md btn-primary">Sign Up</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div id="loginbox" className="jumbotron">
                        <div classID="signup2" className="center-block">
                            <h2>Sign Up</h2>

                        </div>
                        <div className="center-block">
                            <div className=" loginbtn btn-group btn-group-justified" role="group">
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-default">Employee</button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-default">Company</button>
                                </div>
                            </div>

                            <div classID="company" className="company">
                                <div className="row">
                                    <div className="col-md-6 employee">
                                        <input className="company" placeholder="Company Name" type="text"/>
                                        <input className="Owners" placeholder="Owner's Name" type="text"/>
                                        <input className="Username" placeholder="UserName" type="text"/>
                                        <input className="tradelicense" placeholder="Trader License No" type="text"/>
                                        <textarea className="form-control" cols="10" placeholder="Address">
                                            </textarea>
                                        <input className="Solvency" placeholder="Solvency Paper No" type="text"/>
                                        <input className="password" placeholder="Password" type="password"/>
                                        <input className="password" placeholder="Confirm password" type="password"/>
                                        <input className="email" placeholder="Email" type="text"/>
                                        <input className="mobile" placeholder="Mobile Number" type="text"/>
                                    </div>
                                    <div className="col-md=6">
                                        <div className="companylogobox">
                                            <input className="picinput" type="file" name="empSigSeal" accept="image/*"/>

                                        </div>
                                        <div className="btnlogocomp">
                                            <button className="btn btn-success">Add company logo</button>
                                        </div>
                                        <div className="signaturebox">
                                            <input className="picinput" type="file" name="empSigSeal" accept="image/*"/>

                                        </div>
                                        <div className="btntrd">
                                            <button className="btn btn-success">Add Trade license</button>
                                        </div>
                                        <div className="signaturebox">
                                            <input className="picinput" type="file" name="empSigSeal" accept="image/*"/>

                                        </div>
                                        <div className="btntrd2">
                                            <button className="btn btn-success">Add Solvency Paper</button>
                                        </div>
                                    </div>

                                </div>
                                <div className="submit-btn center-block">
                                    <button className="btn btn-md btn-primary">Sign Up</button>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            </div>


        );
    }
}
