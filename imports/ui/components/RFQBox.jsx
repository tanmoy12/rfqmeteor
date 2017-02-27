import React, { Component, PropTypes } from 'react';

export default class RFQBox extends Component {
    constructor(props) {
        super(props);
    }
    gotoNote (e){
        e.preventDefault();
        FlowRouter.go('/Note/' + this.props.RFQItem._id);
    }
    render() {
        return (
            <div className="container">
                <button onClick={this.gotoNote.bind(this)} className="btn btn-link">{this.props.RFQItem.title}</button>

            </div>
        );
    }
}