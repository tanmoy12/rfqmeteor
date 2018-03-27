import React, {Component} from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            type: 'empl',
            bgColorComp: '#337ab7',
            bgColorEmpl: 'darkred',

            companyLogoHover: false,
            tradeLicenseHover: false,
            solvencyPaperHover: false,
            sigSealHover: false,
            profilepicHover: false,

            companyLogoColor: "#333",
            tradeLicenseColor: "#333",
            solvencyPaperColor: "#333",
            sigSealColor: "#333",
            profilepicColor: "#333",

            companyLogoState: "Add Company Logo",
            tradeLicenseState: "Add Trade License",
            solvencyPaperState: "Add Solvency Paper",
            sigSealState1: "Add Signature & Seal",

            sigSealState2: "Add Signature & Seal",
            profilepicState: "Add Profile Picture",

            empProPic: null,
            empSeal: null,

            comTradePic: null,
            comSolvencyPic: null,
            comLogoPic: null,
            comSeal: null,

            ins: 0

        };
    }


    handleRegisterEmp(e) {
        e.preventDefault();

        that = this;

        var name = ReactDOM.findDOMNode(this.refs.empFirstname).value.trim();
        var username = ReactDOM.findDOMNode(this.refs.empUsername).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.empEmail).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.empPassword).value.trim();
        var repassword = ReactDOM.findDOMNode(this.refs.empRetypePassword).value.trim();

        var mobno = ReactDOM.findDOMNode(this.refs.empMobno).value.trim();

        var institute = ReactDOM.findDOMNode(this.refs.empInstitute).value.trim();
        var designation = ReactDOM.findDOMNode(this.refs.empDesignation).value.trim();

        if (designation == 'Other') {
            institute = ReactDOM.findDOMNode(this.refs.empInstitute2).value.trim();
        }


        var that = this;

        if (this.state.empProPic && this.state.empSeal) {
            if (name && username && password && repassword && institute && designation) {
                if (password == repassword) {
                    let uploadInstance = ImagesCol.insert({
                        file: that.state.empProPic,
                        streams: 'dynamic',
                        chunkSize: 'dynamic',
                        allowWebWorkers: true // If you see issues with uploads, change this to false
                    }, false);

                    uploadInstance.on('uploaded', function (error, fileObjPro) {

                        let uploadInstance2 = ImagesCol.insert({
                            file: that.state.empSeal,
                            streams: 'dynamic',
                            chunkSize: 'dynamic',
                            allowWebWorkers: true // If you see issues with uploads, change this to false
                        }, false);

                        uploadInstance2.on('uploaded', function (error, fileObjSeal) {

                            if (password == repassword) {
                                var User = {
                                    username: username,
                                    email: email,
                                    password: password,
                                    profile: {
                                        type: 0,
                                        designation: designation,
                                        mobno: mobno,
                                        ProPic: fileObjPro._id,
                                        seal: fileObjSeal._id,
                                        name: name
                                    }
                                };
                                Accounts.createUser(User, function (err) {
                                    if (err) {
                                        var message = err.reason;
                                        Bert.alert(message, 'danger', 'growl-top-right');
                                    } else {
                                        Bert.alert('User Signed up', 'success', 'growl-top-right');
                                    }
                                });
                            }
                            else {
                                Bert.alert('Passwords do not match!!', 'danger', 'growl-top-right');
                            }
                        });

                        uploadInstance2.on('error', function (error, fileObjSeal) {
                            console.log('Error during upload: ' + error);
                        });

                        uploadInstance2.start();

                    });

                    uploadInstance.on('error', function (error, fileObj) {
                        console.log('Error during upload: ' + error);
                    });

                    uploadInstance.start(); // Must manually start the upload
                }
                else {
                    Bert.alert('Passwords do not match!!', 'danger', 'growl-top-right');
                }
            }

            else {
                Bert.alert('Please Fill up all details!!', 'danger', 'growl-top-right');
            }
        }
        else {
            Bert.alert('Upload necessary files!!', 'danger', 'growl-top-right');
        }
    }

    addCompLogoFunc() {
        if (this.state.companyLogoHover == false) {
            this.setState({
                companyLogoColor: "#3399ff",
                companyLogoHover: !this.state.companyLogoHover
            });
        }
        else {
            this.setState({
                companyLogoColor: "#333",
                companyLogoHover: !this.state.companyLogoHover
            });
        }

        //this.refs.compLogoLabel.innerHTML = file[file.length-1];

    };

    addCompLogoLabel(e) {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            var file2 = this.refs.compLogo.value.split("\\");
            if (file2[file2.length - 1].length > 0) {

                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#companylogobox')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(e.currentTarget.files[0]);
                this.setState({
                    companyLogoState: file2[file2.length - 1],
                    comLogoPic: e.currentTarget.files[0]
                });
            }
        }
    }


    addTradeLicenseFunc() {
        if (this.state.tradeLicenseHover == false) {
            this.setState({
                tradeLicenseColor: "#3399ff",
                tradeLicenseHover: !this.state.tradeLicenseHover
            });
        }
        else {
            this.setState({
                tradeLicenseColor: "#333",
                tradeLicenseHover: !this.state.tradeLicenseHover
            });
        }
    };

    addTradeLicenseLabel(e) {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            var file2 = this.refs.tradeLicensePDF.value.split("\\");
            if (file2[file2.length - 1].length > 0) {

                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#tradebox')
                        .attr('src', "/pdf.png");
                };

                reader.readAsDataURL(e.currentTarget.files[0]);
                this.setState({
                    tradeLicenseState: file2[file2.length - 1],
                    comTradePic: e.currentTarget.files[0]
                });
            }
        }
    }


    addSolvencyPaperFunc() {
        if (this.state.solvencyPaperHover == false) {
            this.setState({
                solvencyPaperColor: "#3399ff",
                solvencyPaperHover: !this.state.solvencyPaperHover
            });
        }
        else {
            this.setState({
                solvencyPaperColor: "#333",
                solvencyPaperHover: !this.state.solvencyPaperHover
            });
        }
    };

    addSolvencyPaperLabel(e) {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            var file2 = this.refs.solvencyPaper.value.split("\\");
            if (file2[file2.length - 1].length > 0) {

                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#solvencybox')
                        .attr('src', "/pdf.png");
                };

                reader.readAsDataURL(e.currentTarget.files[0]);
                this.setState({
                    solvencyPaperState: file2[file2.length - 1],
                    comSolvencyPic: e.currentTarget.files[0]
                });
            }
        }
    }

    addSigSealFunc() {
        if (this.state.sigSealHover == false) {
            this.setState({
                sigSealColor: "#3399ff",
                sigSealHover: !this.state.sigSealHover
            });
        }
        else {
            this.setState({
                sigSealColor: "#333",
                sigSealHover: !this.state.sigSealHover
            });
        }
    };

    addSigSealLabelCom(e) {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            var file2 = this.refs.sigSeal.value.split("\\");
            if (file2[file2.length - 1].length > 0) {

                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#sigsealbox')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(e.currentTarget.files[0]);

                this.setState({
                    sigSealState1: file2[file2.length - 1],
                    comSeal: e.currentTarget.files[0]
                });
            }
        }
    }

    addSigSealLabel(e) {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            var file2 = this.refs.empSigSeal.value.split("\\");
            if (file2[file2.length - 1].length > 0) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#signaturebox')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(e.currentTarget.files[0]);

                this.setState({
                    sigSealState2: file2[file2.length - 1],
                    empSeal: e.currentTarget.files[0]
                });
            }
        }
    }

    addProfilePicLabel(e) {
        if (e.currentTarget.files && e.currentTarget.files[0]) {

            var file = this.refs.empProfilePic.value.split("\\");
            if (file[file.length - 1].length > 0) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#imagebox')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(e.currentTarget.files[0]);
                this.setState({
                    profilepicState: file[file.length - 1],
                    empProPic: e.currentTarget.files[0]
                });
            }
        }
    }

    addProfilePicFunc() {
        if (this.state.profilepicHover == false) {
            this.setState({
                profilepicColor: "#3399ff",
                profilepicHover: !this.state.profilepicHover
            });
        }
        else {
            this.setState({
                profilepicColor: "#333",
                profilepicHover: !this.state.profilepicHover
            });
        }
    };

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

    handleRegisterCom(e) {
        e.preventDefault();

        var compname = ReactDOM.findDOMNode(this.refs.compName).value.trim();
        var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var repassword = ReactDOM.findDOMNode(this.refs.retypePassword).value.trim();
        var mobno = ReactDOM.findDOMNode(this.refs.mobNo).value.trim();
        var description = ReactDOM.findDOMNode(this.refs.description).value.trim();
        var ownername = ReactDOM.findDOMNode(this.refs.ownerName).value.trim();
        var tradelicenseno = ReactDOM.findDOMNode(this.refs.tradeLicenseNo).value.trim();
        var solvencyno = ReactDOM.findDOMNode(this.refs.solvencyPaper).value.trim();
        var that = this;

        if (this.state.comLogoPic && this.state.comSolvencyPic && this.state.comSeal && this.state.comTradePic && compname && username && tradelicenseno && description) {

            let uploadInstance = ImagesCol.insert({
                file: that.state.comLogoPic,
                streams: 'dynamic',
                chunkSize: 'dynamic',
                allowWebWorkers: true // If you see issues with uploads, change this to false
            }, false);

            uploadInstance.on('uploaded', function (error, fileObjLogo) {

                let uploadInstance2 = ImagesCol.insert({
                    file: that.state.comSolvencyPic,
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                    allowWebWorkers: true // If you see issues with uploads, change this to false
                }, false);

                uploadInstance2.on('uploaded', function (error, fileObjSolvency) {

                    let uploadInstance3 = ImagesCol.insert({
                        file: that.state.comTradePic,
                        streams: 'dynamic',
                        chunkSize: 'dynamic',
                        allowWebWorkers: true // If you see issues with uploads, change this to false
                    }, false);

                    uploadInstance3.on('uploaded', function (error, fileObjTrade) {

                        let uploadInstance4 = ImagesCol.insert({
                            file: that.state.comSeal,
                            streams: 'dynamic',
                            chunkSize: 'dynamic',
                            allowWebWorkers: true // If you see issues with uploads, change this to false
                        }, false);

                        uploadInstance4.on('uploaded', function (error, fileObjSeal) {
                            if (password == repassword) {

                                var User = {
                                    username: username,
                                    email: email,
                                    password: password,
                                    profile: {
                                        type: 1,
                                        tradelicenseno: tradelicenseno,
                                        solvencyno: solvencyno,
                                        ownername: ownername,
                                        description: description,
                                        name: compname,
                                        mobno: mobno,
                                        ProPic: fileObjLogo._id,
                                        SealPic: fileObjSeal._id,
                                        TradePic: fileObjTrade._id,
                                        SolvencyPic: fileObjSolvency._id
                                    }
                                };
                                Accounts.createUser(User, function (err) {
                                    if (err) {
                                        var message = err.reason;
                                        Bert.alert(message, 'danger', 'growl-top-right');
                                    } else {
                                        Bert.alert('Company Signed up', 'success', 'growl-top-right');
                                    }
                                });
                            }
                            else {
                                Bert.alert('Passwords do not match!!', 'danger', 'growl-top-right');
                            }

                        });

                        uploadInstance4.on('error', function (error, fileObjSeal) {
                            console.log('Error during upload: ' + error);
                        });

                        uploadInstance4.start();

                    });

                    uploadInstance3.on('error', function (error, fileObjTrade) {
                        console.log('Error during upload: ' + error);
                    });

                    uploadInstance3.start();

                });

                uploadInstance2.on('error', function (error, fileObjSolvency) {
                    console.log('Error during upload: ' + error);
                });

                uploadInstance2.start();

            });

            uploadInstance.on('error', function (error, fileObjLogo) {
                console.log('Error during upload: ' + error);
            });

            uploadInstance.start(); // Must manually start the upload
        }
        else {
            Bert.alert('Upload necessary files & fill up necessary information!!', 'danger', 'growl-top-right');
        }
    }

    handleDes(e) {
        e.preventDefault();
        var designation = ReactDOM.findDOMNode(this.refs.empInstitute).value.trim();

        if (designation == 'Other') {
            this.setState({
                ins: 1
            });
        }
        else {
            this.setState({
                ins: 0
            });
        }

    }

    render() {
        var fullWidth = {
            width: "100%"
        };

        var fullWidth2 = {
            marginLeft: "20%",
            marginRight: "20%"
        };

        var topMarign = {
            marginTop: "8%",
            marginLeft: "42%",
            // backgroundColor: "#388E3C"
        };

        var inputFileWidth = {
            width: "33%"
        }


        var upperPart =
            <div>
                <h2 className="signUpHeader">Sign Up</h2>

                <div className="btn-group btn-group-justified" role="group" aria-label="...">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary"
                                onClick={this.emplClicked.bind(this)}
                                style={{backgroundColor: this.state.bgColorEmpl}}>Employee
                        </button>
                    </div>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary"
                                onClick={this.compClicked.bind(this)}
                                style={{backgroundColor: this.state.bgColorComp}}>Company
                        </button>
                    </div>

                </div>
            </div>
        var desSelect, insSelect;
        if (this.state.ins == 0) {
            desSelect = <select ref="empDesignation" className="optionStyle"
                                style={{color: "#46485c"}}>
                <option className="optionStyle">Scientific Officer</option>
                <option className="optionStyle">Accounting Officer</option>
                <option className="optionStyle">Director</option>
            </select>
        }
        else {
            insSelect = <div className="input-group input-group-lg" style={fullWidth}>
                <input className="signUpInput" ref='empInstitute2' placeholder='Institute'
                       type='text'/>
            </div>
            desSelect = <div className="input-group input-group-lg" style={fullWidth}>
                <input className="signUpInput" ref='empDesignation' placeholder='Designation'
                       type='text'/>
            </div>
        }

        if (this.state.type == 'comp') {
            //console.log("HIIII");
            return (
                <div className="container">
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header" style={{marginLeft : "2rem", marginRight: "2rem"}}>
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#navbar"
                                        aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="/" style={{padding: 0, paddingTop: "3.3%"}}>
                                <span >
                                    <img src="/dricmlogo.jpg" style={{width: "27%", height: "auto"}}/>
                                </span>
                                    <span style={{paddingLeft: "4%", paddingTop: "6.2%"}}>eRFQ</span>
                                </a>
                            </div>
                            <div id="navbar" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right" style={{marginLeft : "2rem", marginRight: "2rem"}}>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Sign in</a>
                                        <ul className="dropdown-menu dropdown-lr" role="menu">
                                            <div className="col-lg-12">
                                                <div className="text-center"><h4><b>Sign in</b></h4>
                                                </div>
                                                <LoginForm/>
                                            </div>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="login">
                        {upperPart}

                        <div >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='compName' placeholder='Company Name'
                                               type='text'/>
                                    </div>

                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='ownerName'
                                               placeholder='Owner Name' type='text'/>
                                    </div>

                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='username' placeholder='Username'
                                               type='text'/>

                                    </div>

                                    <textarea className="signUpInput" ref="description" rows="5" cols="70"
                                              placeholder="Address"></textarea>

                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='tradeLicenseNo'
                                               placeholder='Trade License No.'
                                               type='text'/>
                                    </div>

                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='solvencyPaper'
                                               placeholder='Solvency Paper No.'
                                               type='text'/>
                                    </div>


                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='password' placeholder='Password'
                                               type='password'/>
                                    </div>

                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='retypePassword'
                                               placeholder='Retype Password'
                                               type='password'/>
                                    </div>

                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='email' placeholder='Email' type='email'/>

                                    </div>

                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='mobNo' placeholder='Mobile No' type='text'/>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="center-block" style={{paddingTop: "45px"}}>
                                        <img className="center-block companylogobox" id="companylogobox" src="/ash.jpg" alt="User Image"/>
                                    </div>
                                    <div className="input-group input-group-lg center-block" style={fullWidth2}>
                                        <input className="fileInput signUpInput center-block"
                                               onMouseEnter={this.addCompLogoFunc.bind(this)}
                                               onMouseLeave={this.addCompLogoFunc.bind(this)}
                                               onChange={this.addCompLogoLabel.bind(this)}
                                               ref='compLogo' type="file" name="compLogo" accept="image/*"/>
                                        <label ref='compLogoLabel' className="fileInputLabel signUpInput"
                                               style={{
                                                   backgroundColor: this.state.companyLogoColor,
                                                   whiteSpace: "nowrap"
                                                   ,
                                                   overflow: "hidden",
                                                   textOverflow: "ellipsis"
                                               }}>
                                            {this.state.companyLogoState}
                                        </label>
                                    </div>

                                    <div className="center-block">
                                        <img className="center-block tradebox" id="tradebox" src="/ash.jpg" alt="User Image"/>
                                    </div>
                                    <div className="input-group input-group-lg center-block" style={fullWidth2}>
                                        <input className="fileInput signUpInput center-block"
                                               onMouseEnter={this.addTradeLicenseFunc.bind(this)}
                                               onMouseLeave={this.addTradeLicenseFunc.bind(this)}
                                               onChange={this.addTradeLicenseLabel.bind(this)}
                                               ref='tradeLicensePDF' type="file" name="tradeLicensePDF"
                                               accept="application/pdf"/>
                                        <label className="fileInputLabel signUpInput"
                                               style={{
                                                   backgroundColor: this.state.tradeLicenseColor, whiteSpace: "nowrap"
                                                   , overflow: "hidden", textOverflow: "ellipsis"
                                               }}>
                                            {this.state.tradeLicenseState}</label>
                                    </div>

                                    <div className="center-block">
                                        <img className="center-block tradebox" id="solvencybox" src="/ash.jpg" alt="User Image"/>
                                    </div>
                                    <div className="input-group input-group-lg center-block" style={fullWidth2}>
                                        <input className="fileInput signUpInput center-block"
                                               onMouseEnter={this.addSolvencyPaperFunc.bind(this)}
                                               onMouseLeave={this.addSolvencyPaperFunc.bind(this)}
                                               onChange={this.addSolvencyPaperLabel.bind(this)}
                                               ref="solvencyPaper" type="file" name="solvencyPaper"
                                               accept="application/pdf"/>
                                        <label className="fileInputLabel signUpInput"
                                               style={{
                                                   backgroundColor: this.state.solvencyPaperColor, whiteSpace: "nowrap"
                                                   , overflow: "hidden", textOverflow: "ellipsis"
                                               }}>
                                            {this.state.solvencyPaperState}
                                        </label>
                                    </div>

                                    <div className="center-block">
                                        <img className="center-block signaturebox" id="sigsealbox" src="/ash.jpg" alt="User Image"/>
                                    </div>

                                    <div className="input-group input-group-lg center-block" style={fullWidth2}>
                                        <input className="fileInput signUpInput center-block"
                                               onMouseEnter={this.addSigSealFunc.bind(this)}
                                               onMouseLeave={this.addSigSealFunc.bind(this)}
                                               onChange={this.addSigSealLabelCom.bind(this)}
                                               ref="sigSeal" type="file" name="sigSeal" accept="image/*"/>
                                        <label className="fileInputLabel signUpInput"
                                               style={{
                                                   backgroundColor: this.state.sigSealColor, whiteSpace: "nowrap"
                                                   , overflow: "hidden", textOverflow: "ellipsis"
                                               }}>
                                            {this.state.sigSealState1}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button onClick={this.handleRegisterCom.bind(this)} type="submit" ref="compSignUpButt"
                                    className="btn btn-md btn-success signUpSubmit" style={topMarign}>
                                Sign Up
                            </button>
                            <br/>
                            <p>{this.state.message}</p>
                        </div>
                    </div>
                </div>
            );
        }

        if (this.state.type == 'empl') {
            return (
                <div className="container">
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header" style={{marginLeft : "2rem", marginRight: "2rem"}}>
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#navbar"
                                        aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="/" style={{padding: 0, paddingTop: "3.3%"}}>
                                <span >
                                    <img src="/dricmlogo.jpg" style={{width: "27%", height: "auto"}}/>
                                </span>
                                    <span style={{paddingLeft: "4%", paddingTop: "6.2%"}}>eRFQ</span>
                                </a>
                            </div>
                            <div id="navbar" className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right" style={{marginLeft : "2rem", marginRight: "2rem"}}>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Sign in</a>
                                        <ul className="dropdown-menu dropdown-lr" role="menu">
                                            <div className="col-lg-12">
                                                <div className="text-center"><h4><b>Sign in</b></h4>
                                                </div>
                                                <LoginForm/>
                                            </div>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="login">
                        {upperPart}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group input-group-lg" style={fullWidth}>
                                    <input className="signUpInput" ref='empFirstname' placeholder='Full Name'
                                           type='text'/>
                                </div>
                                <div className="input-group input-group-lg" style={fullWidth}>
                                    <input className="signUpInput" ref='empUsername' placeholder='Username'
                                           type='text'/>

                                </div>
                                <select onChange={this.handleDes.bind(this)} ref="empInstitute" className="optionStyle"
                                        style={{color: "#46485c"}}>
                                    <option className="optionStyle">DRiCM, BCSIR</option>
                                    <option className="optionStyle">Other</option>
                                </select>

                                {insSelect}

                                {desSelect}

                                <div className="input-group input-group-lg" style={fullWidth}>
                                    <input className="signUpInput" ref='empPassword' placeholder='Password'
                                           type='password'/>

                                </div>

                                <div className="input-group input-group-lg" style={fullWidth}>
                                    <input className="signUpInput" ref='empRetypePassword' placeholder='Retype Password'
                                           type='password'/>
                                </div>

                                <div className="input-group input-group-lg" style={fullWidth}>
                                    <input className="signUpInput" ref='empEmail' placeholder='Email' type='email'/>

                                </div>

                                <div className="input-group input-group-lg" style={fullWidth}>
                                    <input className="signUpInput" ref='empMobno' placeholder='Mobile No' type='text'/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="center-block" style={{paddingTop: "45px"}}>
                                    <img className="center-block imagebox" id="imagebox" src="/ash.jpg"
                                         alt="User Image"/>
                                </div>
                                <div className="input-group input-group-lg center-block" style={fullWidth2}>
                                    <input className="fileInput signUpInput center-block"
                                           onMouseEnter={this.addProfilePicFunc.bind(this)}
                                           onMouseLeave={this.addProfilePicFunc.bind(this)}
                                           onChange={this.addProfilePicLabel.bind(this)}
                                           ref="empProfilePic" type="file" name="empProfilePic" accept="image/*"/>
                                    <label className="fileInputLabel signUpInput"
                                           style={{
                                               backgroundColor: this.state.profilepicColor, whiteSpace: "nowrap"
                                               , overflow: "hidden", textOverflow: "ellipsis"
                                           }}>
                                        {this.state.profilepicState}
                                    </label>

                                </div>
                                <div className="center-block" style={{paddingTop: "45px"}}>
                                    <img className="center-block signaturebox" id="signaturebox" src="/ash.jpg"
                                         alt="User Image"/>
                                </div>

                                <div className="input-group input-group-lg center-block" style={fullWidth2}>
                                    <input className="fileInput signUpInput center-block"
                                           onMouseEnter={this.addSigSealFunc.bind(this)}
                                           onMouseLeave={this.addSigSealFunc.bind(this)}
                                           onChange={this.addSigSealLabel.bind(this)}
                                           ref="empSigSeal" type="file" name="empSigSeal" accept="image/*"/>
                                    <label className="fileInputLabel signUpInput"
                                           style={{
                                               backgroundColor: this.state.sigSealColor, whiteSpace: "nowrap"
                                               , overflow: "hidden", textOverflow: "ellipsis"
                                           }}>
                                        {this.state.sigSealState2}
                                    </label>


                                </div>
                            </div>
                        </div>

                        <button onClick={this.handleRegisterEmp.bind(this)} type="submit" ref="empSignUpButt"
                                className="btn btn-md btn-success signUpSubmit" style={topMarign}>
                            Sign Up
                        </button>

                    </div>
                </div>
            );
        }
    }
}