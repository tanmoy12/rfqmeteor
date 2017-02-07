import React, {Component} from "react";

export default class DashHeader extends Component {
    logout(e) {
        e.preventDefault();
        Meteor.logout();
        FlowRouter.go('/');
    }


    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="navbar-header">
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
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                        className="fa fa-bell"></i><span className="label label-warning">6</span><b
                                        className="caret"></b></a>
                                    <ul className="dropdown-menu alert-dropdown">
                                        <li>
                                            <a href="#">You stink<span
                                                className="label label-default">Alert Badge</span></a>
                                        </li>

                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="img.jpg" className="profile-image img-circle"/>

                                        <span>{this.props.username}</span></a>
                                    <ul className="dropdown-menu">
                                        <li className="user-header">
                                            <img src="img.jpg" className="img-circle center-block" alt="User Image"/>

                                            <h3>{this.props.username}</h3>
                                        </li>

                                        <li><a href="#"><i className="fa fa-cog"></i> Account</a></li>
                                        <li className="divider"></li>
                                        <li>
                                            <form onSubmit={this.logout.bind(this)}>
                                                <button type="submit" className="btn btn-default">
                                                    Logout
                                                </button>
                                            </form>
                                        </li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
