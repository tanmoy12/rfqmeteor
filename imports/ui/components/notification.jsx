import React, {Component, PropTypes} from "react";

export default class Not extends Component {
    constructor(props) {
        super(props);
    }

    gotoRFQ(e) {
        e.preventDefault();
        FlowRouter.go('/Note/' + this.props.notification.RFQ_id);
    }

    render() {
        return (
            <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell"></i>
                    <span className="label label-warning">5</span>
                    <b className="caret"></b></a>

                <ul className="dropdown-menu alert-dropdown">
                    <li className="col-md-12">
                        <a href="#" className="col-md-12 ">
                            <div className="col-md-2 center-block">
                                <img id="profile" src="/profile.jpg" alt="User Image"/>
                            </div>
                            <div className="col-md-10 alert-text">
                                <p> wants you to verify RFQ Chahida Potro</p>
                            </div>
                            <div className="col-md-12 date-alert">
                                <i className="fa fa-calendar" aria-hidden="true">18-2-2017</i>
                            </div>
                        </a>
                    </li>

                </ul>
            </li>

        );
    }
}