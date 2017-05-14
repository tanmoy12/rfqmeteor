import React, {Component, PropTypes} from 'react';

export default class RFQBox extends Component {
    constructor(props) {
        super(props);
    }

    gotoNote(e) {
        e.preventDefault();
        FlowRouter.go('/Note/' + this.props.RFQItem._id);
    }

    gotoRFQApply(e) {
        e.preventDefault();
        FlowRouter.go('/StandardDocumentApply/' + this.props.RFQItem._id);
    }

    dateString(d) {
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var dateshow;
        if (month < 10) {
            dateshow = date + '/0' + month + '/' + year;
        } else {
            dateshow = date + '/' + month + '/' + year;
        }
        return dateshow;
    }

    render() {
        var d = new Date();

        var applyDiv,diffDays,moreinfo;
        var daysLeft= this.props.RFQItem.standard.apply_date - d;

        if(this.props.RFQItem.step_no>=6 && d<this.props.RFQItem.standard.apply_date && Meteor.user().profile.tradelicenseno){
            var daysLeft= this.props.RFQItem.standard.apply_date - d;
            diffDays = <button href="#" className="btn btn-primary"><span className="glyphicon glyphicon-time"></span>{Math.floor(daysLeft / (1000 * 3600 * 24))} Days Remaning</button>
            applyDiv= <button onClick={this.gotoRFQApply.bind(this)} className="btn btn-primary"><span className="glyphicon glyphicon-hand-right"></span>Apply for RFQ</button>
        } else if (Meteor.user().profile.designation){
            moreinfo = <button onClick={this.gotoNote.bind(this)} className="btn btn-primary"><span className="glyphicon glyphicon-tasks"></span>More Info</button>
        }
        return (

            <div id="flag">
                <div className="container">
                    <div className="media">
                        <div className="media-left">
                            <a href="#"> <img id="rfqimg" src="/RFQ.png" alt="User Image"/> </a>
                        </div>

                        <div id="rfqboxmedia" className="media-body">
                            <p id="dashrfq">RFQ TITLE</p>
                            <div>
                                <h4 id="rfqboxh4">{this.props.RFQItem.title}</h4>
                            </div>
                            <p id="dashrfq">Date</p>
                            <div>
                                <h4><strong>{this.dateString(this.props.RFQItem.chahida.createdAt)}</strong></h4>
                            </div>
                        </div>
                        <div className="media-right">
                            <div id="mysidemenu" className="sidenav">
                                {moreinfo}
                                {diffDays}
                                {applyDiv}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}