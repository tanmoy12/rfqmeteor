import React, { Component, PropTypes } from 'react';


export default class RFQBox extends Component {
    constructor(props) {
        super(props);
        var RFQ= RFQDetails.findOne(this.props.id);
        console.log(this.props.id);
    }
    render() {
        console.log("dhur");
        return (
            <div className="container-fluid">
                <p>title</p>

            </div>
        );
    }
}