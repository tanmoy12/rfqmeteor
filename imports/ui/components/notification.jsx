import React, { Component, PropTypes } from 'react';

export default class Not extends Component {
    constructor(props) {
        super(props);
    }
    gotoRFQ(e){
        e.preventDefault();
        FlowRouter.go('/Note/' + this.props.notification.RFQ_id);
    }
    render() {
        return (
            <a href="#" onClick={this.gotoRFQ.bind(this)} className="col-md-12 ">
                <div className="col-md-2 center-block">
                    <img id="profile" src="/profile.jpg" alt="User Image"/>
                </div>
                <div className="col-md-10 alert-text">
                    <p>{this.props.notification.from_id} wants you to verify RFQ Chahida Potro {this.props.notification.title}</p>
                </div>
                <div className="col-md-12 date-alert">
                    <i className="fa fa-calendar" aria-hidden="true">18-2-2017</i>
                </div>
            </a>
        );
    }
}