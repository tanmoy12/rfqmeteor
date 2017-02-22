import React, { Component, PropTypes } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class RFQBox extends Component {
    constructor(props) {
        super(props);
    }
    gotoNote (e){
        e.preventDefault();
        FlowRouter.go('/Note/' + this.props.RFQ._id);
    }
    render() {
        return (
            <div className="container-fluid">
                <button onClick={this.gotoNote.bind(this)} className="btn btn-link">{this.props.RFQ.title}</button>

            </div>
        );
    }
}