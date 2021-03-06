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

    handleForward(value) {
        var that = this;
        if (this.props.RFQ.step_no == 4) {
            this.state.signed = true;
        }
        var ini= this.props.Dcc[0];

        if (this.state.signed) {
            var StandardForm, type, id, task, link;
            if (this.props.RFQ.step_no == 4) {
                StandardForm = {
                    step_no: 5,
                    'standard.accountant.signed': true,
                    'standard.accountant.sign_date': new Date(),
                    'standard.director.user_id': this.props.RFQ.chahida.director.user_id,
                    'standard.director.name': this.props.RFQ.chahida.director.name,
                    'standard.director.pic': this.props.RFQ.chahida.director.pic
                };
                type=6;
                id= this.props.RFQ.chahida.director.user_id;
                task= 'asked for verification of Standard document of RFQ ';
                link= "/StandardDocumentLoad/";
            }
            else if (this.props.RFQ.step_no == 5) {
                StandardForm = {
                    step_no: 6,
                    'standard.director.signed': true,
                    'standard.director.sign_date': new Date(),

                    'step78accountant.user_id': this.props.RFQ.chahida.accountant.user_id,
                    'step78accountant.name': this.props.RFQ.chahida.accountant.name,
                    'step78accountant.pic': this.props.RFQ.chahida.accountant.pic
                };
                type= 7;
                id= this.props.RFQ.chahida.accountant.user_id;
                task= 'asked for verification of company applications of RFQ ';
                link= '/Note/';
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
                        Meteor.call('removeNotification', Meteor.userId(), that.props.RFQ._id, type-1);
                        var from = {
                            user_id: Meteor.userId(),
                            name: Meteor.user().profile.name,
                            pic: Meteor.user().profile.ProPic,
                        };
                        var Rfqid = that.props.RFQ._id;
                        var NotificationForm = {
                            from: from,
                            to_id: id,
                            type: type,
                            title: that.props.RFQ.chahida.title,
                            RFQ_id: Rfqid,
                            task: task,
                            link: link + Rfqid
                        };
                        Notifications.insert(NotificationForm, function (err, res) {
                            if (err) {
                                console.log(err);
                                Bert.alert('Unknown Error3!!', 'danger', 'growl-top-right');
                            }
                            else {
                                FlowRouter.go('/Note/' + Rfqid);
                            }
                        });
                    }
                });
        } else {
            Bert.alert('Please Sign the Document!!', 'danger', 'growl-top-right');
        }
    }

    render() {

        if (this.props.RFQ && this.props.Dcc && this.props.Director) {
            var forward_to,allowApplication;

            if (this.props.RFQ.step_no == 4 && Meteor.userId() == this.props.RFQ.standard.accountant.user_id) {
                forward_to = {
                    toWhom: "অনুমোদনকারী",
                    dropdownList: this.props.Director,
                    sendSelect: (value) => this.handleForward(value)
                }
            } else if (this.props.RFQ.step_no == 5 && Meteor.userId() == this.props.RFQ.standard.director.user_id) {
                allowApplication = (value) => this.handleForward(value)
            }

            var side = <SideBar forwardTo={forward_to}
                                goToNote={'/Note/' + this.props.RFQ._id}
                                allowApplication={allowApplication} />;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {side}
                        </div>
                        <div className="col-md-8">
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
                    _id: RFQ.chahida.accountant.user_id
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

