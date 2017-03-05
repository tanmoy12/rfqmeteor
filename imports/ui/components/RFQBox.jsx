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
                <div id="sidejumbotron" className="col-md-12 jumbotron">
                    <nav className=" navbar-custom navbar navbar-default text-center">
                        <div className="container">
                            <div className="navbar-header">
                                <button className="btn btn-link navbar-brand">title of RFQ</button>
                            </div>
                        </div>
                    </nav>
                    <p id="TITLERFQ">RFQ TITLE</p>
                    <div>
                        <h4>Smoking Kills donot smoke please</h4>
                    </div>
                    <p id="TITLERFQ">Estimate</p>
                    <div>
                        <h4>$100,000</h4>
                    </div>
                    <p id="TITLERFQ">Intial</p>
                    <div>
                        <h4>Scientific officer</h4>
                    </div>
                </div>
        );
    }
}