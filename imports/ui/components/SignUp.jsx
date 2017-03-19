import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            type: 'init',
            bgColorComp: '#337ab7',
            bgColorEmpl: '#337ab7',

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
            empSeal: null

        };
    }


    handleRegisterEmp(e) {
        e.preventDefault();

        that = this;
        var username = ReactDOM.findDOMNode(this.refs.empUsername).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.empEmail).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.empPassword).value.trim();
        var repassword = ReactDOM.findDOMNode(this.refs.empRetypePassword).value.trim();
        var designation = ReactDOM.findDOMNode(this.refs.empDesignation).value.trim();
        var mobno = ReactDOM.findDOMNode(this.refs.empMobno).value.trim();
        var that = this;

        if(this.state.empProPic && this.state.empSeal){
            let uploadInstance = ImagesCol.insert({
                file: that.state.empProPic,
                streams: 'dynamic',
                chunkSize: 'dynamic',
                allowWebWorkers: true // If you see issues with uploads, change this to false
            }, false);

            uploadInstance.on('uploaded', function (error, fileObjPro) {
                console.log('uploaded: ', fileObjPro);
                let uploadInstance2 = ImagesCol.insert({
                    file: that.state.empSeal,
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                    allowWebWorkers: true // If you see issues with uploads, change this to false
                }, false);

                uploadInstance2.on('uploaded', function (error, fileObjSeal) {
                    console.log('uploaded: ', fileObjSeal);
                    if(password==repassword){
                        var User = {
                            username: username,
                            email: email,
                            password: password,
                            profile: {
                                designation: designation,
                                mobno: mobno,
                                ProPic: fileObjPro._id,
                                seal: fileObjSeal._id
                            }
                        };
                        Accounts.createUser(User, function (err) {
                            if (err) {
                                var message= err.reason;
                                Bert.alert(message, 'danger', 'growl-top-right');
                            }else {
                                Bert.alert('User Signed up', 'success', 'growl-top-right');
                            }
                        });
                    }
                    else{
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
        else{
            Bert.alert('Upload necessary files!!', 'danger', 'growl-top-right');
        }
    }

    addCompLogoFunc() {
        if(this.state.companyLogoHover==false){
            this.setState({
                companyLogoColor: "#3399ff",
                companyLogoHover: !this.state.companyLogoHover
            });
        }
        else{
            this.setState({
                companyLogoColor: "#333",
                companyLogoHover: !this.state.companyLogoHover
            });
        }

            //this.refs.compLogoLabel.innerHTML = file[file.length-1];

    };

    addCompLogoLabel(){
        var file = this.refs.compLogo.value.split("\\");
        if(file[file.length-1].length>0)
            this.setState({
                companyLogoState:    file[file.length-1]
            });
    }



    addTradeLicenseFunc(){
        if(this.state.tradeLicenseHover==false){
            this.setState({
                tradeLicenseColor : "#3399ff",
                tradeLicenseHover: !this.state.tradeLicenseHover
            });
        }
        else{
            this.setState({
                tradeLicenseColor: "#333",
                tradeLicenseHover: !this.state.tradeLicenseHover
            });
        }
    };

    addTradeLicenseLabel(){
        var file = this.refs.tradeLicensePDF.value.split("\\");
        console.log("ENTYR: "+file[file.length-1]);
        if(file[file.length-1].length>0)
            this.setState({
                tradeLicenseState:    file[file.length-1]
            });
    }


    addSolvencyPaperFunc(){
        if(this.state.solvencyPaperHover==false){
            this.setState({
                solvencyPaperColor : "#3399ff",
                solvencyPaperHover: !this.state.solvencyPaperHover
            });
        }
        else{
            this.setState({
                solvencyPaperColor: "#333",
                solvencyPaperHover: !this.state.solvencyPaperHover
            });
        }
    };

    addSolvencyPaperLabel(){
        var file = this.refs.solvencyPaper.value.split("\\");
        if(file[file.length-1].length>0)
            this.setState({
                solvencyPaperState:    file[file.length-1]
            });
    }

    addSigSealFunc(){
        if(this.state.sigSealHover==false){
            this.setState({
                sigSealColor : "#3399ff",
                sigSealHover: !this.state.sigSealHover
            });
        }
        else{
            this.setState({
                sigSealColor: "#333",
                sigSealHover: !this.state.sigSealHover
            });
        }
    };

    addSigSealLabel(e){

        //COMPANY
        if(this.state.type=="comp"){
            var file = this.refs.sigSeal.value.split("\\");
            if(file[file.length-1].length>0)
                this.setState({
                    sigSealState1:    file[file.length-1]
                });
        }

        //EMPLOYEE
        else{
            if (e.currentTarget.files && e.currentTarget.files[0]) {
                var file2 = this.refs.empSigSeal.value.split("\\");
                if(file2[file2.length-1].length>0)
                    this.setState({
                        sigSealState2:    file2[file2.length-1],
                        empSeal: e.currentTarget.files[0]
                    });
            }

        }
    }
    addProfilePicLabel(e){
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            var file = this.refs.empProfilePic.value.split("\\");
            if (file[file.length - 1].length > 0)
                this.setState({
                    profilepicState: file[file.length - 1],
                    empProPic: e.currentTarget.files[0]
                });
        }
    }

    addProfilePicFunc(){
        if(this.state.profilepicHover==false){
            this.setState({
                profilepicColor : "#3399ff",
                profilepicHover: !this.state.profilepicHover
            });
        }
        else{
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


    render() {
        var fullWidth = {
            width: "100%"
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

        if (this.state.type == 'comp') {
            //console.log("HIIII");
            return (
                <div className="container">
                    <div className="login">
                        {upperPart}

                        <div >
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='compName' placeholder='Company Name'
                                               type='text'/>


                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="fileInput signUpInput" onMouseEnter={this.addCompLogoFunc.bind(this)}
                                               onMouseLeave={this.addCompLogoFunc.bind(this)}
                                               onChange={this.addCompLogoLabel.bind(this)}
                                               ref='compLogo' type="file" name="compLogo" accept="image/*"/>
                                        <label ref='compLogoLabel' className="fileInputLabel signUpInput"
                                               style={{backgroundColor: this.state.companyLogoColor,whiteSpace: "nowrap"
                                                   ,overflow: "hidden" ,  textOverflow: "ellipsis"}}>
                                            {this.state.companyLogoState}
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-7">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='tradeLicenseNo'
                                               placeholder='Trade License No.'
                                               type='text'/>


                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="fileInput signUpInput" onMouseEnter={this.addTradeLicenseFunc.bind(this)}
                                               onMouseLeave={this.addTradeLicenseFunc.bind(this)}
                                               onChange={this.addTradeLicenseLabel.bind(this)}
                                               ref='tradeLicensePDF' type="file" name="tradeLicensePDF" accept="application/pdf"/>
                                        <label className="fileInputLabel signUpInput"
                                               style={{backgroundColor: this.state.tradeLicenseColor,whiteSpace: "nowrap"
                                                   ,overflow: "hidden" , textOverflow: "ellipsis"}}>
                                            {this.state.tradeLicenseState}</label>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-7">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='ownerName'
                                               placeholder='Owner Name' type='text'/>


                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="fileInput signUpInput" onMouseEnter={this.addSolvencyPaperFunc.bind(this)}
                                               onMouseLeave={this.addSolvencyPaperFunc.bind(this)}
                                               onChange={this.addSolvencyPaperLabel.bind(this)}
                                               ref="solvencyPaper" type="file" name="solvencyPaper" accept="application/pdf"/>
                                        <label className="fileInputLabel signUpInput"
                                               style={{backgroundColor: this.state.solvencyPaperColor,whiteSpace: "nowrap"
                                                   ,overflow: "hidden" ,  textOverflow: "ellipsis"}}>
                                            {this.state.solvencyPaperState}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <textarea className="signUpInput" ref="description" rows="5" cols="70"
                                      placeholder="Description"></textarea>

                            <div className="row">
                                <div className="col-md-7">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='username' placeholder='Username'
                                               type='text'/>

                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="fileInput signUpInput" onMouseEnter={this.addSigSealFunc.bind(this)}
                                               onMouseLeave={this.addSigSealFunc.bind(this)}
                                               onChange={this.addSigSealLabel.bind(this)}
                                               ref="sigSeal" type="file" name="sigSeal" accept="image/*"/>
                                        <label className="fileInputLabel signUpInput"
                                               style={{backgroundColor: this.state.sigSealColor,whiteSpace: "nowrap"
                                                   ,overflow: "hidden" ,  textOverflow: "ellipsis"}}>
                                            {this.state.sigSealState1}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='password' placeholder='Password'
                                               type='password'/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='retypePassword' placeholder='Retype Password'
                                               type='password'/>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='email' placeholder='Email' type='email'/>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='mobNo' placeholder='Mobile No' type='text'/>
                                    </div>
                                </div>
                            </div>


                            <button type="submit" ref="compSIgnUpButt" className="btn btn-md btn-success signUpSubmit" style={topMarign}>
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
                    <form onSubmit={this.handleRegisterEmp.bind(this)}>
                        <div className="login">
                            {upperPart}
                        </div>
                    </form>

                </div>
            );
        }

        if (this.state.type == 'empl') {
            return (
                <div className="container">
                        <div className="login">
                            {upperPart}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='empUsername' placeholder='Username'
                                               type='text'/>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="fileInput signUpInput" onMouseEnter={this.addProfilePicFunc.bind(this)}
                                               onMouseLeave={this.addProfilePicFunc.bind(this)}
                                               onChange={this.addProfilePicLabel.bind(this)}
                                               ref="empProfilePic" type="file" name="empProfilePic" accept="image/*"/>
                                        <label className="fileInputLabel signUpInput"
                                               style={{backgroundColor: this.state.profilepicColor,whiteSpace: "nowrap"
                                                   ,overflow: "hidden" ,  textOverflow: "ellipsis"}}>
                                            {this.state.profilepicState}
                                        </label>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <select ref="empDesignation" className="optionStyle" style={{marginTop: "42px", color: "#46485c"}}>
                                        <option className="optionStyle">Scientific Officer</option>
                                        <option className="optionStyle">Accounting Officer</option>
                                        <option className="optionStyle">Director</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg">
                                        <input className="fileInput signUpInput" onMouseEnter={this.addSigSealFunc.bind(this)}
                                               onMouseLeave={this.addSigSealFunc.bind(this)}
                                               onChange={this.addSigSealLabel.bind(this)}
                                               ref="empSigSeal" type="file" name="empSigSeal" accept="image/*"/>
                                        <label className="fileInputLabel signUpInput"
                                               style={{backgroundColor: this.state.sigSealColor,whiteSpace: "nowrap"
                                                   ,overflow: "hidden" ,  textOverflow: "ellipsis"}}>
                                            {this.state.sigSealState2}
                                        </label>


                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='empPassword' placeholder='Password'
                                               type='password'/>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='empRetypePassword' placeholder='Retype Password'
                                               type='password'/>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='empEmail' placeholder='Email' type='email'/>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group input-group-lg" style={fullWidth}>
                                        <input className="signUpInput" ref='empMobno' placeholder='Mobile No' type='text'/>
                                    </div>
                                </div>
                            </div>

                            <button onClick={this.handleRegisterEmp.bind(this)} type="submit" ref="empSignUpButt" className="btn btn-md btn-success signUpSubmit" style={topMarign}>
                                Sign Up
                            </button>

                        </div>
                </div>
            );
        }
    }
}