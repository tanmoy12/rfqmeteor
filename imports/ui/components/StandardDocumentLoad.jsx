import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import StandardDocumentLoad1 from "./StandardDocumentLoads/StandardDocumentLoad1";
import StandardDocumentLoad2 from "./StandardDocumentLoads/StandardDocumentLoad2";
import StandardDocumentLoad3 from "./StandardDocumentLoads/StandardDocumentLoad3";
import StandardDocumentLoad4 from "./StandardDocumentLoads/StandardDocumentLoad4";
import StandardDocumentLoad5 from "./StandardDocumentLoads/StandardDocumentLoad5";
import SideBar from "./SideBar";

class StandardDocumentLoad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RFQno: "",
            products: [],
            pageno: 1,
            signed: false
        }
    }


    dateToday() {
        var d = new Date();
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var dateshow;
        if (month < 10) {
            dateshow = date + '/0' + month + '/' + year;
        } else {
            dateshow = date + '/' + month + '/' + year;
        }
        return <p id="datetodaystand"><strong>Date : {dateshow}</strong></p>;
    }

    getSign(value) {
        this.setState({
            signed: value
        });
    }

    nextClick(e) {
        e.preventDefault();
        let pageno = this.state.pageno + 1;
        if (this.state.pageno < 5) {
            this.setState({
                pageno: pageno
            });
        }
    }

    prevClick(e) {
        e.preventDefault();
        let pageno = this.state.pageno - 1;
        if (this.state.pageno > 1) {
            this.setState({
                pageno: pageno
            });
        }
    }

    handleForward(value) {
        var that = this;
        if (this.props.RFQ.step_no == 4) {
            this.state.signed = true;
        }
        var ini= this.props.Dcc[0];

        if (this.state.signed) {
            var StandardForm;
            if (this.props.RFQ.step_no == 4) {
                StandardForm = {
                    step_no: 5,
                    'standard.accountant.signed': true,
                    'standard.accountant.sign_date': new Date(),
                    'standard.director.user_id': this.props.RFQ.chahida.director.user_id,
                    'standard.director.name': this.props.RFQ.chahida.director.name,
                    'standard.director.pic': this.props.RFQ.chahida.director.pic
                };
            }
            else if (this.props.RFQ.step_no == 5) {
                StandardForm = {
                    step_no: 6,
                    'standard.director.signed': true,
                    'standard.director.sign_date': new Date(),
                    'meeting.initiator.user_id': ini._id,
                    'meeting.initiator.name': ini.profile.name,
                    'meeting.initiator.pic': ini.profile.seal
                };
            }

            RFQDetails.update(
                that.props.RFQ._id,
                {
                    $set: StandardForm
                }, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    }
                    else {
                        FlowRouter.go('/Note/' + that.props.RFQ._id);
                    }
                });
        } else {
            Bert.alert('Please Sign the Document!!', 'danger', 'growl-top-right');
        }
    }

    render() {

        if (this.props.RFQ && this.props.Dcc && this.props.Director) {
            var forward_to;

            if (this.props.RFQ.step_no == 4 && Meteor.userId() == this.props.RFQ.standard.accountant.user_id) {
                forward_to = {
                    toWhom: "অনুমোদনকারী",
                    dropdownList: this.props.Director,
                    sendSelect: (value) => this.handleForward(value)
                }
            } else if (this.props.RFQ.step_no == 5 && Meteor.userId() == this.props.RFQ.standard.director.user_id) {
                forward_to = {
                    toWhom: "Specification Committee",
                    dropdownList: this.props.Dcc,
                    sendSelect: (value) => this.handleForward(value)
                }
            }

            var side = <SideBar forwardTo={forward_to}
                                goToNote={'/Note/' + this.props.RFQ._id}/>;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {side}
                        </div>
                        <div className="col-md-9">
                            <div className="col-md-12">
                                <StandardDocumentLoad1 RFQ={this.props.RFQ}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentLoad2 RFQ={this.props.RFQ} getSign={(value) => this.getSign(value)}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentLoad3 RFQ={this.props.RFQ}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentLoad4 RFQ={this.props.RFQ}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentLoad5 RFQ={this.props.RFQ}/>

                            </div>
                        </div>
                    </div>

                </div>
            );
        }
        else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}


StandardDocumentLoad.propTypes = {
    RFQ: PropTypes.object
};

export default createContainer(props => {
    var RFQ = RFQDetails.findOne(props.id);
    var Director, Dcc;
    if (RFQ) {
        Dcc = Meteor.users.find(
            {
                'profile.committee.name': "Specification Committee",
                'profile.committee.des': 'Shochib'
            }).fetch();
        Director = Meteor.users.find(
            {
                _id: RFQ.chahida.director.user_id
            }).fetch()
    }
    return {
        RFQ: RFQ,
        Dcc: Dcc,
        Director: Director
    };
}, StandardDocumentLoad);

