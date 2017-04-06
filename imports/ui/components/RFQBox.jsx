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

            <div id="flag">
                <div className="container">
                    <div className="media">
                        <div className="media-left">
                            <a onClick={this.gotoNote.bind(this)} href="#"> <img id="rfqimg" src="/RFQ.png"
                                                                                 alt="User Image"/> </a>
                        </div>

                        <div id="rfqboxmedia" className="media-body">
                            <p id="dashrfq">RFQ TITLE</p>
                            <div>
                                <h4 id="rfqboxh4">Smoking Kills donot smoke please</h4>
                            </div>
                            <p id="dashrfq">Date</p>
                            <div>
                                <h4>7 March, 2017</h4>
                            </div>
                        </div>
                        <div className="media-right">
                            <div id="mysidemenu" className="sidenav">
                                <button href="#" className="btn btn-primary"><span className="glyphicon glyphicon-tasks"></span>More Info</button>
                                <button href="#" className="btn btn-primary"><span className="glyphicon glyphicon-time"></span>10 Days Remaning</button>
                                <button href="#" className="btn btn-primary"><span className="glyphicon glyphicon-hand-right"></span>Apply for RFQ</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        );
    }
}