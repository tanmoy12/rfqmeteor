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

    loadNotifications() {
        return this.props.nots.map(function (not) {
            return <Not key={not._id} notification={not}/>
        });
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

                        <button onClick={this.gotoHome.bind(this)} className="btn btn-link navbar-brand">DRICM</button>
                    </div>


                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-right top-nav">
                            <Not/>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img id="profile" src="/profile.jpg" className="profile-image img-circle"/>

                                    <span id="UserId">{user}</span></a>
                                <ul className="dropdown-menu dropdownbody">
                                    <li className="user-header">
                                        <img id="profile" src="/profile.jpg" className="img-circle center-block"
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
    currentUser: PropTypes.object,
    nots: PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('allUserData');
    return {
        nots: Notifications.find().fetch(),
        currentUser: Meteor.user()
    };
}, DashHeader);