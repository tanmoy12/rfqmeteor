import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import SideBar from './SideBar';
import Calendar from "./Calendar";

class MeetingNotice extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
        this.state = {
            signed: true,
            datesub: new Date()
        };
    }

    datesubChange(dateValue) {
        this.setState({
            datesub: dateValue
        })
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
        return <p id="datetoday"><strong>Date : {dateshow}</strong></p>;
    }

    datefromcreate(createdAt) {
        var date = createdAt.getDate();
        var month = createdAt.getMonth() + 1;
        var year = createdAt.getFullYear();
        var dateshow;
        if (month < 10) {
            dateshow = date + '/0' + month + '/' + year;
        } else {
            dateshow = date + '/' + month + '/' + year;
        }
        return dateshow;
    }

    dateTodayString() {
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
        return dateshow;
    }

    passwordcheck(e) {
        if (e.key === 'Enter') {
            var that = this;
            var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
            var digest = Package.sha.SHA256(password);
            Meteor.call('checkPassword', digest, function (err, result) {
                if (result) {
                    that.setState({
                        signed: true
                    })
                }
                else {
                    Bert.alert('Incorrect Password!!', 'danger', 'growl-top-right');
                }
            });
        }
    }

    genSignBlock(signfor, user) {
        const cursor = ImagesCol.findOne({_id: user.pic});
        var link = '';
        if (cursor) {
            link = cursor.link();
        }
        if (user.signed) {
            return (
                <div className="col-md-6 center-block">
                    <img id="signPic" src={link} className="img-circle" alt="User Image"/>
                    <div className="form-inline" style={{marginLeft: "20%", marginRight: "20%"}}>
                        <p id="signLabel" style={{display: "inline-flex", float: "left"}}>
                            <strong>{user.name}</strong></p>
                        <p id="signLabel" style={{display: "inline-flex", float: "right"}}>
                            <strong>{this.datefromcreate(user.sign_date)}</strong>
                        </p>
                    </div>
                    <hr id="signhr" style={{width: "80%"}}/>
                    <p id="signTag"><strong>{signfor}</strong></p>
                </div>
            )
        }
        else if (user.user_id && !user.signed) {
            if (Meteor.userId() == user.user_id) {
                if (this.state.signed) {
                    return (
                        <div className="col-md-6 center-block">
                            <img id="signPic" src={link} className="img-circle" alt="User Image"/>
                            <div className="form-inline" style={{marginLeft: "20%", marginRight: "20%"}}>
                                <p id="signLabel" style={{display: "inline-flex", float: "left"}}>
                                    <strong>{Meteor.user().profile.name}</strong></p>
                                <p id="signLabel" style={{display: "inline-flex", float: "right"}}>
                                    <strong>{this.dateTodayString()}</strong>
                                </p>
                            </div>
                            <hr id="signhr" style={{width: "80%"}}/>
                            <p id="signTag"><strong>{signfor}</strong></p>
                        </div>
                    )
                } else {
                    return (
                        <div className="col-md-6 center-block form-group">
                            <div className="col-md-1">
                            </div>
                            <div id="signblock" className="form-style-4">
                                <input style={{float: "center"}} onKeyPress={this.passwordcheck.bind(this)}
                                       type="password" name="password"
                                       ref="password"
                                       placeholder="Password"/><br/>
                            </div>
                            <div>
                                <div className="form-inline">
                                    <p id="signLabel" style={{display: "inline-flex", float: "center"}}>
                                        <strong>{Meteor.user().profile.name}</strong></p>
                                </div>
                                <hr id="signhr" style={{width: "80%"}}/>
                                <p id="signTag"><strong>{signfor}</strong></p>
                            </div>
                        </div>
                    )
                }
            }
            else {
                return (
                    <div className="col-md-6 center-block">
                        <hr id="unsignhr" style={{width: "80%"}}/>
                        <p id="signTag"><strong>{signfor} </strong></p>
                    </div>
                )
            }
        }
        else {
            return (
                <div className="col-md-6 center-block">
                    <hr id="unsignhr" style={{width: "80%"}}/>
                    <p id="signTag"><strong>{signfor} </strong></p>
                </div>
            )
        }
    }

    genMembers() {
        var i = 0;
        return this.props.members.map(function (member) {
            i++;
            return (
                <p key={member._id} id="meeting" className="pull-left">
                    {i}. {member.profile.name}, {member.profile.designation}, {member.profile.committee.des} <br/><br/>
                </p>
            )
        });
    }

    handleForward(value) {
        var that = this;
        if (this.state.datesub && this.state.signed) {
            var comList = this.props.members.map(function (member) {
                return (
                {
                    user_id: member._id,
                    name: member.profile.name,
                    pic: member.profile.seal,
                    signed: false
                }
                )
            });
            //console.log(comList);
            var MeetingForm = {
                step_no: 7,
                'meeting.createdAt': new Date(),
                'meeting.dateOfMeeting': this.state.datesub,
                'meeting.initiator.sign_date': new Date(),
                'meeting.initiator.signed': true,
                allowance_nikosh: comList
            };
            RFQDetails.update(
                that.props.RFQ_details._id,
                {
                    $set: MeetingForm
                }, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    }
                    else {
                        FlowRouter.go('/Note/' + that.props.RFQ_details._id);
                    }
                });
        } else {
            Bert.alert('Please Fill up Details!!', 'danger', 'growl-top-right');
        }
    }

    render() {
        if (this.props.RFQ_details) {
            var forward_to;


            var date;
            if (this.props.RFQ_details.meeting.dateOfMeeting) {
                date = this.datefromcreate(this.props.RFQ_details.meeting.dateOfMeeting);
                forward_to = {
                    toWhom: "হিসাবরক্ষক",
                    dropdownList: [],
                    sendSelect: (value) => this.handleForward(value)
                }

            } else {
                date = <Calendar datesubChange={(dateValue) => this.datesubChange(dateValue)}/>
                forward_to = {
                    toWhom: "হিসাবরক্ষক",
                    dropdownList: [],
                    sendSelect: (value) => this.handleForward(value)
                }
            }
            var side = <SideBar forwardTo={forward_to}
                                goToNote={'/Note/' + this.props.RFQ_details._id}/>;
            return (
                <div className="container">
                    <div className="col-md-3">
                        {side}
                    </div>
                    <div className="col-md-9">
                        <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-top col-md-12">
                                        <img src="../dricmlogo.jpg" className="center-block"/>
                                        <h3>Designated Reference Institute for Chemical Measurements (DRiCM) </h3>
                                        <h3>Bangladesh Council of Scientific & Industrial Research (BCSIR)</h3>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-12 pull-left">
                                        <span
                                            className="pull-left"><strong>RFQ No :  <b>{this.props.RFQ_details.standard.RFQ_no}</b></strong></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            {this.dateToday()}
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-center">
                                            <br/>
                                            <br/>
                                            <strong> অফিস স্মারক </strong>
                                        </p>
                                        <p id="meeting">
                                            বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)- এর আওতাধীন ডেজিগনেটেড
                                            রেফারেন্স
                                            ইনষ্টিটিউট ফর কেমিক্যাল মেজারমেন্টস্ (ডিআরআইসিএম)- এ ২০১৫-২০১৬ অর্থবছরের
                                            রাজস্ব ক্রয়
                                            পরিকল্পনা অনুযায়ী Supply of Chemicals ক্রয়ের জন্য RFQ পদ্ধতিতে দরপত্র আহবান
                                            করা
                                            হয়েছে । জমাকৃত দরপত্রগুলোর তুলনামূলক তালিকা প্রস্তুতপূর্বক যাচাই বাছাই করার
                                            লক্ষ্যে
                                            স্বল্প মূল্যের ক্রয়ের জন্য দরপত্র প্রস্তাব ও মূল্যায়ন কমিটি (TEC) এর সভা
                                            অদ্য
                                            {date}
                                            ইং তারিখ দুপুর ৩:৩০ ঘটিকার সময় ডিআরআইসিএম সভা কক্ষে অনুষ্ঠিত হবে
                                            ।
                                            (meeting date) <br/>
                                            <br/>

                                            উক্ত সভায় উপস্থিত থাকার জন্য কমিটির সকল সদস্যকে অনুরোধ জানানো যাচ্ছে।

                                        </p>
                                        <div className="pull-right">
                                            {this.genSignBlock("",
                                                this.props.RFQ_details.meeting.initiator)}
                                        </div>


                                        <p id="meeting" className="pull-right text-center">
                                            সদস্য-সচিব, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/>
                                            ও প্রস্তাব মূল্যায়ন কমিটি <br/>
                                            ডিআরআইসিএম, বিসিএসআইআর
                                        </p>

                                        <p id="meeting" className="pull-left">
                                            <br/>
                                            <br/>
                                            বিতরন ও কার্যার্থে (জেষ্ঠ্যতার ভিত্তিতে নয়) <br/>
                                            <br/>
                                        </p>
                                        {this.genMembers()}
                                    </div>

                                </div>
                            </div>
                            <div>
                                <hr/>
                                <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                <h4>Tel : 02 9671830, 01715032057</h4>
                            </div>
                        </div>

                    </div>


                </div>


            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}

MeetingNotice.propTypes = {
    RFQ_details: PropTypes.object,
    members: PropTypes.array.isRequired
};

export default createContainer(props => {
    return {
        members: Meteor.users.find(
            {
                'profile.committee.name': 'Specification Committee'

            }).fetch(),
        RFQ_details: RFQDetails.findOne({_id: props.id})
    };
}, MeetingNotice);