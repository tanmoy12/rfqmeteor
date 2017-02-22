import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

class DashHeader extends Component {
    logout(e) {
        e.preventDefault();
        Meteor.logout();
        FlowRouter.go('/');
    }
    waitForUser(){
        if(Meteor.loggingIn()){
            return "Loading"
        }else{
            return Meteor.user().username
        }
    }


    render() {
        let user = "";
        if (Meteor.user()) user = Meteor.user().username;
        else user = "Loading";
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <a className="navbar-brand" href="#">DRICM</a>
                    </div>


                    <div id="navbar" className="collapse navbar-collapse">

                        <ul className="nav navbar-right top-nav">


                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-bell"></i>
                                    <span className="label label-warning">6</span>
                                    <b className="caret"></b></a>

                                <ul className="dropdown-menu alert-dropdown">

                                    <li className="header notiheader"><strong> Notification </strong></li>

                                    <li className="dropdownmenu col-md-12">

                                        <a href="#" id="notilink" className="col-md-12 ">
                                            <div className="col-md-2 pull-left img-alert">
                                                <img src="img.jpg" className="img-circle img-alert" alt="User Image"/>
                                            </div>
                                            <div className="col-md-10 alert-text">
                                                <p>Scientific Officer wants to verify Chahida Potro </p>
                                            </div>
                                            <div className="col-md-12 date-alert">
                                                <i className="fa fa-calendar" aria-hidden="true">18-2-2017</i>
                                            </div>
                                        </a>

                                        <a href="#" id="notilink" className="col-md-12 ">
                                            <div className="col-md-2 pull-left img-alert">
                                                <img src="img.jpg" className="img-circle img-alert" alt="User Image"/>
                                            </div>
                                            <div className="col-md-10 alert-text">
                                                <p>Scientific Officer wants to verify Note </p>
                                            </div>
                                            <div className="col-md-12 date-alert">
                                                <i className="fa fa-calendar" aria-hidden="true">18-2-2017</i>
                                            </div>
                                        </a>

                                        <a href="#" id="notilink" className="col-md-12 ">
                                            <div className="col-md-2 pull-left img-alert">
                                                <img src="img.jpg" className="img-circle img-alert" alt="User Image"/>
                                            </div>
                                            <div className="col-md-10 alert-text">
                                                <p>Scientific Officer wants to verify JANINA </p>
                                            </div>
                                            <div className="col-md-12 date-alert">
                                                <i className="fa fa-calendar" aria-hidden="true">18-2-2017</i>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img id="profile" src="img.jpg" className="profile-image img-circle"/>

                                    <span id="UserId">{user}</span></a>
                                <ul className="dropdown-menu dropdownbody">
                                    <li className="user-header">
                                        <img id="profile" src="img.jpg" className="img-circle center-block"
                                             alt="User Image"/>

                                        <h3>{user}</h3>
                                    </li>

                                    <li><a><i className="fa fa-cog"></i> Designation</a></li>
                                    <li className="divider"></li>
                                    <li>
                                        <button type="submit" className="btn btn-default btn-custom pull-left">
                                            Profile
                                        </button>

                                    </li>
                                    <li>
                                        <button onClick={this.logout.bind(this)} type="submit"
                                                className="btn btn-default btn-custom pull-right">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>

            </nav >
        )
            ;
    }
}

DashHeader.propTypes = {
    currentUser: PropTypes.object
};

export default createContainer(() => {

    return {
        currentUser: Meteor.user()
    };
}, DashHeader);