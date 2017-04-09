import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import Not from './notification';

class DashHeader extends Component {
    logout(e) {
        e.preventDefault();
        Meteor.logout();
        FlowRouter.go('/');
    }

    waitForUser() {
        if (Meteor.loggingIn()) {
            return "Loading"
        } else {
            return Meteor.user().username
        }
    }

    gotoHome(e) {
        e.preventDefault();
        FlowRouter.go('/dashboard');
    }
    renderNots(){
        return this.props.nots.map(function (not) {
            return <Not key={not._id} notitem={not}/>
        });
    }

    render() {
        let user = "";
        let link= "";
        if (Meteor.user() && this.props.images && this.props.nots) {
            user = Meteor.user().username;
            //console.log(Meteor.user().profile.ProPic);
            const cursor = ImagesCol.findOne({_id: Meteor.user().profile.ProPic});
            if (cursor) {
                link = cursor.link();
            }
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

                            <a onClick={this.gotoHome.bind(this)} className="btn btn-link navbar-brand">DRICM</a>
                        </div>


                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-right top-nav">
                                <li className="dropdown dropdown-notification">
                                    <a href="#notifications-panel" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="fa fa-bell notification-icon"></i>
                                        <span className="label label-warning">{this.props.nots.length}</span>
                                        <b className="caret"></b></a>
                                    <div className="dropdown-container">
                                        <div className="dropdown-toolbar">
                                            <h3 id="notiheader" className="dropdown-toolbar-title">Notifications</h3>
                                        </div>

                                        <ul className="dropdown-menu pull-right alert-dropdown col-md=12">
                                            <li className="notification">
                                                <div className="media">
                                                    {this.renderNots()}
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </li>

                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img id="profile" src={link} className="profile-image img-circle"/>

                                        <span id="UserId">{user}</span>
                                    </a>

                                    <ul className="dropdown-menu dropdownbody">
                                        <li>
                                            <div className="navbar-login">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <p className="text-center">
                                                            <img id="profiledrop" src={link}
                                                                 className="center-block"
                                                                 alt="User Image"/>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <p id="userfont" className="text-center">{user}</p>
                                                        <p id="designation" className="text-center">Scientific Officer</p>
                                                        <p className="text-left">
                                                            <a href="#"
                                                               className="btn btn-primary btn-block btn-xs">Profile</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="divider"></li>

                                        <li>
                                            <button type="submit" className="btn btn-default btn-custom btn-sm pull-left">
                                                <i className="fa fa-cog"> Settings</i>
                                            </button>

                                        </li>
                                        <li>
                                            <button onClick={this.logout.bind(this)} type="submit"
                                                    className="btn btn-default btn-custom btn-sm pull-right">
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
        }
        else {
            user = "Loading";
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

                            <a onClick={this.gotoHome.bind(this)} className="btn btn-link navbar-brand">DRICM</a>
                        </div>


                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-right top-nav">


                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img id="profile" src="" className="profile-image img-circle"/>

                                        <span id="UserId">{user}</span>
                                    </a>

                                    <ul className="dropdown-menu dropdownbody">
                                        <li>
                                            <div className="navbar-login">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <p className="text-center">
                                                            <img id="profiledrop" src=""
                                                                 className="center-block"
                                                                 alt="User Image"/>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <p id="userfont" className="text-center">{user}</p>
                                                        <p id="designation" className="text-center">Scientific Officer</p>
                                                        <p className="text-left">
                                                            <a href="#"
                                                               className="btn btn-primary btn-block btn-xs">Profile</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="divider"></li>

                                        <li>
                                            <button type="submit" className="btn btn-default btn-custom btn-sm pull-left">
                                                <i className="fa fa-cog"> Settings</i>
                                            </button>

                                        </li>
                                        <li>
                                            <button onClick={this.logout.bind(this)} type="submit"
                                                    className="btn btn-default btn-custom btn-sm pull-right">
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
        }
        ;
    }
}

DashHeader.propTypes = {
    currentUser: PropTypes.object,
    images: PropTypes.array.isRequired,
    nots: PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('allUserData');
    return {
        nots: Notifications.find().fetch(),
        images: ImagesCol.find().fetch(),
        currentUser: Meteor.user()
    };
}, DashHeader);