import React, {Component, PropTypes} from 'react';

export default class RFQBox extends Component {
    constructor(props) {
        super(props);
    }

    gotoNote(e) {
        e.preventDefault();
        FlowRouter.go('/Note/' + this.props.RFQItem._id);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="sidejumbotron" className="col-md-6 jumbotron">
                            <nav className=" navbar-custom navbar navbar-default text-center">
                                <div className="container">
                                    <div className="navbar-header">
                                        <button className="btn btn-link navbar-brand">title of RFQ</button>
                                    </div>
                                </div>
                            </nav>
                            <div className="container">
                                <div className="media">
                                    <div className="media-left">
                                        <a href="#"> <img id="rfqimg" src="/RFQ.png" alt="User Image"/> </a>
                                    </div>

                                    <div className="media-body">
                                        <p id="dashrfq">RFQ TITLE</p>
                                        <div>
                                            <h4>Smoking Kills donot smoke please</h4>
                                        </div>
                                        <p id="dashrfq">Date</p>
                                        <div>
                                            <h4>7 March, 2017</h4>
                                        </div>
                                    </div>
                                    <div className="media-right media-middle">
                                        <button type="button" className="btn btn-danger btn-xs">More Info</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="sidejumbotron" className="col-md-6 jumbotron">
                            <nav className=" navbar-custom navbar navbar-default text-center">
                                <div className="container">
                                    <div className="navbar-header">
                                        <button className="btn btn-link navbar-brand "> RFQ</button>
                                    </div>
                                </div>
                            </nav>
                            <div className="container">
                                <div className="media">
                                    <div className="media-left">
                                        <a href="#"> <img id="rfqimg" src="/RFQ.png" alt="User Image"/> </a>
                                    </div>

                                    <div className="media-body">
                                        <p id="dashrfq">RFQ TITLE</p>
                                        <div>
                                            <h4>Smoking Kills donot smoke please</h4>
                                        </div>
                                        <p id="dashrfq">Date</p>
                                        <div>
                                            <h4>7 March, 2017</h4>
                                        </div>
                                    </div>
                                    <div className=" media-right media-middle">
                                        <button type="button" className="btn btn-danger btn-xs">More Info</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}