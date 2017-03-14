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
        var fullWidth = {
            width: "100%"
        };

        var topMarign = {
            marginTop: "8%",
            marginLeft: "42%"
        };

        var inputFileWidth = {
            width: "33%"
        }


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
                                        style={{backgroundColor: this.state.bgColorComp}}>Company
                                </button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-primary"
                                        onClick={this.emplClicked.bind(this)}
                                        style={{backgroundColor: this.state.bgColorEmpl}}>Employee
                                </button>
                            </div>
                        </div>

                        <div >



                            <div className="row">
                                <div className="col-md-7">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='companyname' placeholder='Company Name' type='text'/>


                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="fileInput signUpInput"  id="f02" type="file" name="companylogo"
                                               accept="application/pdf"/>
                                        <label className="fileInputLabel signUpInput" for="f02">Add Company Logo</label>
                                    </div>
                                </div>
                            </div>






                            <div className="row">
                                <div className="col-md-7">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='tradelicenseno'
                                               placeholder='Trade License No.'
                                               type='text'/>


                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="fileInput signUpInput"  id="f01" type="file" name="tradelicensepdf"
                                               accept="application/pdf"/>
                                        <label className="fileInputLabel signUpInput" for="f01">Add Trade License</label>
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-md-7">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='ownername'
                                               placeholder='Owner Name' type='text'/>


                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="fileInput signUpInput"  id="f03" type="file" name="solvencypaperpdf"
                                               accept="application/pdf"/>
                                        <label className="fileInputLabel signUpInput" for="f03">Add Solvency Paper</label>
                                    </div>
                                </div>
                            </div>

                            <textarea className="signUpInput" id="description" rows="5" cols="70"
                                      placeholder="Description"></textarea>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='email' placeholder='Email' type='email'/>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='mobno' placeholder='Mobile No' type='text'/>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='username' placeholder='Username'
                                               type='text'/>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='password' placeholder='Password'
                                               type='password'/></div>
                                </div>
                            </div>


                            {/*<div className="row">*/}
                                {/*<div className="col-md-6">*/}
                                    {/*<div className="input-group input-group-lg" style={fullWidth}>*/}
                                        {/*<input className="signUpInput" type="file" name="signature" accept="image/*"/>*/}

                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="col-md-6">*/}
                                    {/*<div className="input-group input-group-lg" style={fullWidth}>*/}
                                        {/*<input className="signUpInput" type="file" name="seal" accept="image/*"/></div>*/}
                                {/*</div>*/}
                            {/*</div>*/}


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="fileInput signUpInput" id="f04" type="file" name="signature" accept="image/*"/>
                                        <label className="fileInputLabel signUpInput" for="f04">Add Signature</label>


                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="fileInput signUpInput" type="file" id="f05" name="seal" accept="image/*"/>

                                        <label className="fileInputLabel signUpInput" for="f05">Add Seal</label>
                                    </div>
                                </div>
                            </div>




                            <button type="submit" className="btn btn-md btn-success signUpSubmit" style={topMarign}>
                                Sign Up
                            </button>
                            <br/>
                            <p>{this.state.message}</p>
                        </div>
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
                                            style={{backgroundColor: this.state.bgColorComp}}>Company
                                    </button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-primary"
                                            onClick={this.emplClicked.bind(this)}
                                            style={{backgroundColor: this.state.bgColorEmpl}}>Employee
                                    </button>
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
                                            style={{backgroundColor: this.state.bgColorComp}}>Company
                                    </button>
                                </div>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-primary"
                                            onClick={this.emplClicked.bind(this)}
                                            style={{backgroundColor: this.state.bgColorEmpl}}>Employee
                                    </button>
                                </div>
                            </div>

                            <div className="signUpOption">
                                <select ref="designation" className="optionStyle">
                                    <option className="optionStyle">Scientific Officer</option>
                                    <option className="optionStyle">Accounting Officer</option>
                                    <option className="optionStyle">Director</option>
                                </select>
                            </div>

                        </div>
                    </form>

                </div>
            );
        }
    }
}