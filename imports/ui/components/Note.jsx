import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";
import SideBar from "./SideBar";
import Calendar from "./Calendar";

class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signed: false,
            datesub: ''
        };
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

    convertNumberToWords(amount) {
        var words = [];
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        amount = amount.toString();
        var atemp = amount.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        var value;
        if (n_length <= 9) {
            var n_array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            var received_n_array = new Array();
            for (var i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
                n_array[i] = received_n_array[j];
            }
            for (var i = 0, j = 1; i < 9; i++, j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            value = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Lakhs ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        return words_string;
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
                    <div className="form-inline" style={{marginLeft: "5%", marginRight: "5%"}}>
                        <p id="signLabel" style={{display: "inline-flex", float: "left"}}>
                            <strong>{user.name}</strong></p>
                        <p id="signLabel" style={{display: "inline-flex", float: "right"}}>
                            <strong>{this.datefromcreate(user.sign_date)}</strong>
                        </p>
                    </div>
                    <hr id="signhr" style={{width: "100%"}}/>
                    <p id="signTag"><strong>{signfor}</strong></p>
                </div>
            )
        }
        else {
            return (
                <div className="col-md-6 center-block">
                    <hr id="unsignhr" style={{width: "100%"}}/>
                    <p id="signTag"><strong>{signfor} </strong></p>
                </div>
            )
        }
    }

    genSignBlockFull(signfor, user) {
        const cursor = ImagesCol.findOne({_id: user.pic});
        var link = '';
        if (cursor) {
            link = cursor.link();
        }
        if (user.signed) {
            return (
                <div className="col-md-6 center-block">
                    <img id="signPic" src={link} className="img-circle" alt="User Image"/>
                    <div className="form-inline" style={{marginLeft: "5%", marginRight: "5%"}}>
                        <p id="signLabel" style={{display: "inline-flex", float: "left"}}>
                            <strong>{user.name}</strong></p>
                        <p id="signLabel" style={{display: "inline-flex", float: "right"}}>
                            <strong>{this.datefromcreate(user.sign_date)}</strong>
                        </p>
                    </div>
                    <hr id="signhr" style={{width: "100%"}}/>
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
                            <div className="form-inline" style={{marginLeft: "5%", marginRight: "5%"}}>
                                <p id="signLabel" style={{display: "inline-flex", float: "left"}}>
                                    <strong>{Meteor.user().profile.name}</strong></p>
                                <p id="signLabel" style={{display: "inline-flex", float: "right"}}>
                                    <strong>{this.dateTodayString()}</strong>
                                </p>
                            </div>
                            <hr id="signhr" style={{width: "100%"}}/>
                            <p id="signTag"><strong>{signfor}</strong></p>
                        </div>
                    )
                } else {
                    return (
                        <div className="col-md-6 center-block form-group">
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
                                <hr id="signhr" style={{width: "100%"}}/>
                                <p id="signTag"><strong>{signfor}</strong></p>
                            </div>
                        </div>
                    )
                }
            }
            else {
                return (
                    <div className="col-md-6 center-block">
                        <hr id="unsignhr" style={{width: "100%"}}/>
                        <p id="signTag"><strong>{signfor} </strong></p>
                    </div>
                )
            }
        }
        else {
            return (
                <div className="col-md-6 center-block">
                    <hr id="unsignhr" style={{width: "100%"}}/>
                    <p id="signTag"><strong>{signfor} </strong></p>
                </div>
            )
        }
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

    handleForward(value) {
        if (this.state.signed) {
            var updateForm = {
                step_no: 7,
                'step78accountant.signed': true,
                'step78accountant.sign_date': new Date(),
                'step78director.user_id': this.props.RFQ_details.chahida.director.user_id,
                'step78director.name': this.props.RFQ_details.chahida.director.name,
                'step78director.pic': this.props.RFQ_details.chahida.director.pic
            }

            var that = this;
            RFQDetails.update(
                this.props.RFQ_details._id,
                {
                    $set: updateForm
                }, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    }
                    else {
                        FlowRouter.go('/Note/' + that.props.RFQ_details._id);
                    }
                });
        }
        else {
            Bert.alert('Please Sign the Document!!', 'danger', 'growl-top-right');
        }
    }

    handleForward8(value) {
        if (this.state.signed && this.state.datesub) {
            var Sp;
            this.props.SpOf.map(function (Of) {
                if (Of._id == value) {
                    Sp = Of;
                }
            });
            var updateForm = {
                step_no: 8,
                'step78director.signed': true,
                'step78director.sign_date': new Date(),
                'step78meetingDate': this.state.datesub,
                'meeting.initiator.user_id': Sp._id,
                'meeting.initiator.name': Sp.profile.name,
                'meeting.initiator.pic': Sp.profile.seal
            }

            var that = this;
            RFQDetails.update(
                this.props.RFQ_details._id,
                {
                    $set: updateForm
                }, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    }
                    else {
                        FlowRouter.go('/Note/' + that.props.RFQ_details._id);
                    }
                });
        }
        else {
            Bert.alert('Please Sign the Document & Set Date of meeting!!', 'danger', 'growl-top-right');
        }
    }

    handleForward10(value) {
        if (this.state.signed) {
            var updateForm = {
                step_no: 11,
                'step1011accountant.signed': true,
                'step1011accountant.sign_date': new Date(),
                'step1011director.user_id': this.props.RFQ_details.chahida.director.user_id,
                'step1011director.name': this.props.RFQ_details.chahida.director.name,
                'step1011director.pic': this.props.RFQ_details.chahida.director.pic
            }

            var that = this;
            RFQDetails.update(
                this.props.RFQ_details._id,
                {
                    $set: updateForm
                }, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    }
                    else {
                        FlowRouter.go('/Note/' + that.props.RFQ_details._id);
                    }
                });
        }
        else {
            Bert.alert('Please Sign the Document!!', 'danger', 'growl-top-right');
        }
    }

    handleForward11(value) {
        if (this.state.signed) {
            var updateForm = {
                step_no: 12,
                'step1011director.signed': true,
                'step1011director.sign_date': new Date(),
                'purchase.initiator.user_id': this.props.RFQ_details.chahida.accountant.user_id,
                'purchase.initiator.name': this.props.RFQ_details.chahida.accountant.name,
                'purchase.initiator.pic': this.props.RFQ_details.chahida.accountant.pic
            }

            var that = this;
            RFQDetails.update(
                this.props.RFQ_details._id,
                {
                    $set: updateForm
                }, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    }
                    else {
                        FlowRouter.go('/Note/' + that.props.RFQ_details._id);
                    }
                });
        }
        else {
            Bert.alert('Please Sign the Document !!', 'danger', 'growl-top-right');
        }
    }

    handleForward15(value) {
        if (this.state.signed) {
            var updateForm = {
                step_no: 15,
                'step1011accountant.signed': true,
                'step1011accountant.sign_date': new Date(),
                'step1011director.user_id': this.props.RFQ_details.chahida.director.user_id,
                'step1011director.name': this.props.RFQ_details.chahida.director.name,
                'step1011director.pic': this.props.RFQ_details.chahida.director.pic
            }

            var that = this;
            RFQDetails.update(
                this.props.RFQ_details._id,
                {
                    $set: updateForm
                }, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    }
                    else {
                        FlowRouter.go('/Note/' + that.props.RFQ_details._id);
                    }
                });
        }
        else {
            Bert.alert('Please Sign the Document!!', 'danger', 'growl-top-right');
        }
    }

    handleForward16(value) {
        if (this.state.signed) {
            var updateForm = {
                step_no: 16,
                'step1011director.signed': true,
                'step1011director.sign_date': new Date(),
                'purchase.initiator.user_id': this.props.RFQ_details.chahida.accountant.user_id,
                'purchase.initiator.name': this.props.RFQ_details.chahida.accountant.name,
                'purchase.initiator.pic': this.props.RFQ_details.chahida.accountant.pic
            }

            var that = this;
            RFQDetails.update(
                this.props.RFQ_details._id,
                {
                    $set: updateForm
                }, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    }
                    else {
                        FlowRouter.go('/Note/' + that.props.RFQ_details._id);
                    }
                });
        }
        else {
            Bert.alert('Please Sign the Document !!', 'danger', 'growl-top-right');
        }
    }

    datesubChange(dateValue) {
        this.setState({
            datesub: dateValue
        })
    }

    render() {
        if (this.props.RFQ_details && this.props.Acc && this.props.Dir) {
            var standardDate, standardNum;

            var chahida_potro = this.props.RFQ_details.chahida;
            var RFQItem = this.props.RFQ_details;
            var chahidaSend = {
                name: "চাহিদা পত্র",
                link: '/ChahidaPotroload/' + RFQItem._id
            };
            var stanCreate, stanLoad, allowanceNikosh, meetingNotice, createMeetingNotice, cs,
                applications, RFQ_id, forward_to, minutes, minutesCreate, step10Acc, step11Dir;

            var step7Acc = this.genSignBlock("হিসাবরক্ষক", this.props.RFQ_details.step78accountant);
            var step8Dir = this.genSignBlock("অনুমোদনকারী", this.props.RFQ_details.step78director);

            var step10Acc = this.genSignBlock("হিসাবরক্ষক", this.props.RFQ_details.step1011accountant);
            var step11Dir = this.genSignBlock("অনুমোদনকারী", this.props.RFQ_details.step1011director);

            var step15Acc = this.genSignBlock("হিসাবরক্ষক", this.props.RFQ_details.step1516accountant);
            var step16Dir = this.genSignBlock("অনুমোদনকারী", this.props.RFQ_details.step1516director);

            var step8Block =
                <p className="text">
                    ৮।
                </p>

            if (this.props.RFQ_details.step_no == 3 && Meteor.userId() == this.props.RFQ_details.standard.initiator.user_id) {
                stanCreate = "/StandardDocument/" + this.props.RFQ_details._id;
            }
            if (this.props.RFQ_details.step_no > 3) {
                stanLoad = {
                    name: 'Standard Document',
                    link: "/StandardDocumentLoad/" + this.props.RFQ_details._id
                };
                var that = this;
                RFQ_id = this.props.RFQ_details._id;
                standardDate = this.datefromcreate(this.props.RFQ_details.standard.createdAt);
                standardNum = this.props.RFQ_details.standard_apply.length;
            }
            if (this.props.RFQ_details.step_no > 5) {
                applications = this.props.RFQ_details.standard_apply;
            }
            if (this.props.RFQ_details.step_no == 6 && Meteor.userId() == this.props.RFQ_details.step78accountant.user_id) {
                step7Acc = this.genSignBlockFull("হিসাবরক্ষক", this.props.RFQ_details.step78accountant);
                forward_to = {
                    toWhom: "অনুমোদনকারী",
                    dropdownList: this.props.Dir,
                    sendSelect: (value) => this.handleForward(value)
                }
            }
            if (this.props.RFQ_details.step_no == 7 && Meteor.userId() == this.props.RFQ_details.step78director.user_id) {
                step8Dir = this.genSignBlockFull("অনুমোদনকারী", this.props.RFQ_details.step78director);
                forward_to = {
                    toWhom: "Specification Committee",
                    dropdownList: this.props.SpOf,
                    sendSelect: (value) => this.handleForward8(value)
                }
                step8Block =
                    <div className="form-inline pull-left">
                        <span>৮। </span>
                        <span>
                            <Calendar datesubChange={(dateValue) => this.datesubChange(dateValue)}/>
                        </span>

                        <span> তারিখে মিটিং ডাকা হল |</span>
                    </div>
            }
            if (this.props.RFQ_details.step_no > 7) {
                step8Block =
                    <p className="text">
                        ৮। {this.datefromcreate(this.props.RFQ_details.step78meetingDate)} তারিখে মিটিং ডাকা হল |
                    </p>
            }
            //console.log(applications);
            if (this.props.RFQ_details.step_no == 8 && Meteor.userId() == this.props.RFQ_details.meeting.initiator.user_id) {
                createMeetingNotice = "/MeetingNotice/" + this.props.RFQ_details._id;

            }
            //console.log(standardNum);
            if (this.props.RFQ_details.step_no > 8) {
                meetingNotice = "/MeetingNotice/" + this.props.RFQ_details._id;
            }
            if (this.props.RFQ_details.step_no > 8) {
                allowanceNikosh = "/AllowanceNikosh/" + this.props.RFQ_details._id;
                cs = "/cs/" + this.props.RFQ_details._id;

            }
            if (this.props.RFQ_details.step_no == 9) {
                var ch;
                this.props.RFQ_details.minutes.members.map(function (mem) {
                    if (mem.comdes == 'Chairman') ch = mem;
                });
                //console.log(ch);
                if (Meteor.userId() == ch.user_id) {
                    minutesCreate = "/Minutes/" + this.props.RFQ_details._id;
                }
            }
            var meetDate, items, amount, amountFinal, comName, comDesc;
            if (this.props.RFQ_details.step_no > 9) {
                minutes = "/Minutes/" + this.props.RFQ_details._id;
                meetDate = this.datefromcreate(this.props.RFQ_details.step78meetingDate);
                items = this.props.RFQ_details.standard.standard_details.map(function (item) {
                    return item.desc + ", "
                });
                comName = this.props.RFQ_details.minutes.company.name;
                comDesc = this.props.RFQ_details.minutes.company.description;
                amount = this.props.RFQ_details.minutes.amount;
                amountFinal = this.convertNumberToWords(this.props.RFQ_details.minutes.amount);
            }
            if (this.props.RFQ_details.step_no == 10 && Meteor.userId() == this.props.RFQ_details.step1011accountant.user_id) {
                step10Acc = this.genSignBlockFull("হিসাবরক্ষক", this.props.RFQ_details.step1011accountant);
                forward_to = {
                    toWhom: "অনুমোদনকারী",
                    dropdownList: this.props.Dir,
                    sendSelect: (value) => this.handleForward10(value)
                }
            }
            if (this.props.RFQ_details.step_no == 11 && Meteor.userId() == this.props.RFQ_details.step1011director.user_id) {
                step11Dir = this.genSignBlockFull("অনুমোদনকারী", this.props.RFQ_details.step1011director);
                forward_to = {
                    toWhom: "হিসাবরক্ষক",
                    dropdownList: this.props.Acc,
                    sendSelect: (value) => this.handleForward11(value)
                }
            }
            var WOCreate, WO;
            if (this.props.RFQ_details.step_no == 12 && Meteor.userId() == this.props.RFQ_details.purchase.initiator.user_id) {
                WOCreate = "/WO/" + this.props.RFQ_details._id;
            }
            var WOdate;
            if (this.props.RFQ_details.step_no > 12) {
                WO = "/WO/" + this.props.RFQ_details._id;
                WOdate = this.datefromcreate(this.props.RFQ_details.purchase.createdAt);
            }
            if (this.props.RFQ_details.step_no == 14 && Meteor.userId() == this.props.RFQ_details.step1516accountant.user_id) {
                step10Acc = this.genSignBlockFull("হিসাবরক্ষক", this.props.RFQ_details.step1516accountant);
                forward_to = {
                    toWhom: "অনুমোদনকারী",
                    dropdownList: this.props.Dir,
                    sendSelect: (value) => this.handleForward15(value)
                }
            }
            if (this.props.RFQ_details.step_no == 15 && Meteor.userId() == this.props.RFQ_details.step1516director.user_id) {
                step11Dir = this.genSignBlockFull("অনুমোদনকারী", this.props.RFQ_details.step1516director);
                forward_to = {
                    toWhom: "হিসাবরক্ষক",
                    dropdownList: this.props.Acc,
                    sendSelect: (value) => this.handleForward16(value)
                }
            }

            //console.log(minutesCreate);
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBar
                                chahidaBlock={chahidaSend}
                                createStandardDoc={stanCreate}
                                standardBlock={stanLoad}
                                allowanceNikosh={allowanceNikosh}
                                createMeetingNotice={createMeetingNotice}
                                meetingNotice={meetingNotice}
                                cs={cs}
                                applications={applications}
                                minutes={minutes}
                                minutesCreate={minutesCreate}
                                RFQ_id={RFQ_id}
                                WOCreate={WOCreate}
                                WO={WO}
                                forwardTo={forward_to}
                            />
                        </div>
                        <div className="col-md-8">
                            <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-top col-md-12">
                                            <img src="/dricmlogo.jpg" className="center-block"/>
                                            <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                            <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>

                                <p className="text">
                                    ১। বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)-এর আওতাধীন ডেজিগনেটেড
                                    রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস- এর বৈজ্ঞানিক কর্মকর্তা
                                    <strong> {this.props.RFQ_details.chahida.initiator.name}</strong>- এর কাছ
                                    থেকে প্রাপ্ত চাহিদার (কপি সংযুক্ত) আলোকে গবেষণার জন্য
                                    <strong> {this.props.RFQ_details.title}</strong> ক্রয় করা প্রয়োজন। কাজটি
                                    জরুরী বিধায় স্থানীয় সরবরাহকারী প্রতিষ্ঠানের সাথে যোগাযোগ করে তুলনামূলক প্রতিযোগী
                                    দরদাতা দ্বারা PPR-২০০৮ এর তফসীল-২-এর বিধি ৯(২)(ক) অনুসরণে RFQ পদ্ধতিতে সংগ্রহ করা
                                    যেতে পারে।
                                </p>

                                <p className="text"> ২। সদয় অনুমোদনের জন্য নথি উপস্থাপন করা হলো </p>

                                {this.genSignBlock("হিসাবরক্ষক", chahida_potro.accountant)}
                                {this.genSignBlock("অনুমোদনকারী", chahida_potro.director)}

                                <p className="text"> ৩। নোটানুচ্ছেদ ০১ এর অনুমোদনের আলোকে গবেষণাগারের প্রয়োজনের নিরীখে
                                    <strong> {this.props.RFQ_details.chahida.title} </strong> এর Specification প্রস্তুত
                                    করার
                                    দায়িত্ব বাজারমূল্য
                                    নির্ধারন ও স্পেসিফিকেশন
                                    প্রস্তুতকরন কমিটিকে দেয়া যেতে পারে।
                                </p>

                                {this.genSignBlock("হিসাবরক্ষক", chahida_potro.accountant)}
                                {this.genSignBlock("অনুমোদনকারী", chahida_potro.director)}

                                <p className="text"> ৪। নোটানুচ্ছেদ ০৩ এর মাধ্যমে প্রাপ্ত আদেশের আলোকে
                                    প্রয়োজনীয় <strong> {this.props.RFQ_details.chahida.title} </strong>
                                    সমূহের
                                    Specification ও বাজারমূল্য নির্ধারনকৃত হয়েছে(কপি সংযুক্ত)। প্রস্তুতকৃত Specification
                                    ও বাজারমূল্যের আলোকে প্রয়োজনীয়
                                    <strong> {this.props.RFQ_details.chahida.title} </strong>
                                    ক্রয় করা যেতে পারে।

                                </p>
                                {this.genSignBlock("হিসাবরক্ষক", this.props.RFQ_details.standard.accountant)}
                                {this.genSignBlock("অনুমোদনকারী", this.props.RFQ_details.standard.director)}
                                <div className="row">

                                    <div className="notefooter col-md-12">
                                        <hr/>
                                        <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                        <h4>Tel : 02 9671830, 01715032057</h4>
                                    </div>

                                </div>

                            </div>

                            <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-top col-md-12">
                                            <img src="/dricmlogo.jpg" className="center-block"/>
                                            <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                            <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text">
                                        ৫। নোটানুচ্ছেদ ০১ এর অনুমোদনের আলোকে {chahida_potro.title} সরবরাহকারী
                                        প্রতিষ্ঠানের নিকট হতে
                                        দরপত্র আহ্বানের লক্ষ্যে নোটিশ বোর্ডে বিজ্ঞপ্তি প্রকাশ এবং চিঠির মাধ্যমে অবগত
                                        করার
                                        ব্যাপারে অনুমোদনের জন্য নথি উপস্থাপন করা হলো।
                                    </p>

                                    {this.genSignBlock("হিসাবরক্ষক", this.props.RFQ_details.standard.accountant)}
                                    {this.genSignBlock("অনুমোদনকারী", this.props.RFQ_details.standard.director)}
                                    <p className="text">
                                        ৬। নোটানুচ্ছেদ ০৫ এর অনুমোদনের আলোকে স্বচ্ছপত্র স্বাক্ষরের জন্য উপস্থাপন করা
                                        হলো।
                                    </p>
                                    {this.genSignBlock("হিসাবরক্ষক", this.props.RFQ_details.standard.accountant)}
                                    {this.genSignBlock("অনুমোদনকারী", this.props.RFQ_details.standard.director)}

                                    <p className="text">
                                        ৭। {standardDate} তারিখে দরপত্র আহ্বানের প্রেক্ষিতে মোট {standardNum} টি দরপত্র
                                        পাওয়া গিয়েছে।
                                        দরপত্রগুলো যাচাই-বাছাই করার জন্য স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র ও প্রস্তাব
                                        মূল্যায়ন কমিটির সভা আহ্বান করা যেতে পারে।
                                    </p>

                                    <div className="row">
                                        {step7Acc}
                                        {step8Dir}
                                    </div>
                                    <br/>
                                    <br/>
                                    {step8Block}
                                    <br/>

                                </div>
                                <div className="notefooter">
                                    <hr/>
                                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                    <h4>Tel : 02 9671830, 01715032057</h4>
                                </div>

                            </div>

                            <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-top col-md-12">
                                            <img src="/dricmlogo.jpg" className="center-block"/>
                                            <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                            <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>

                                <div>

                                    <p className="text">
                                        ৯। নোটানুচ্ছেদ ০৮ এর আলোকে দরপত্রগুলো পুঙ্খানুপুঙ্খরূপে বিশ্লেষণের
                                        লক্ষ্যে {meetDate} তারিখে
                                        স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র ও প্রস্তাব মূল্যায়ন কমিটির
                                        সভা অনুষ্ঠিত হয়। দরপত্রগুলোর তুলনামূলক তালিকা প্রস্তুত করা হয়। (সংলগ্নী-১) দেখা
                                        যেতে পারে। তুলনামূলক তালিকা যাচাই-বাছাইপূর্বক সভার কার্যবিবরণী প্রস্তুত করা হয়।
                                        সভার কার্যবিবরণী (সংলগ্নী-২) দেখা যেতে পারে।
                                    </p>

                                    <div className="notetext">
                                        <p className="text">
                                            স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র ও প্রস্তাব মূল্যায়ন কমিটির
                                            সুপারিশকৃত {items} ক্রয়
                                            করার জন্য {amount}/- ({amountFinal}) টাকা প্রয়োজন। উক্ত
                                            ব্যয় {this.props.RFQ_details.chahida.year} অর্থবছরের রাজস্ব
                                            বরাদ্দের {this.props.RFQ_details.chahida.upokhat} ক্রয় খাত থেকে নির্বাহ করা
                                            যেতে পারে। উল্লেখ্য যে, ক্রয় প্রক্রিয়া
                                            সম্পন্নের জন্য প্রয়োজনীয় অর্থ {this.props.RFQ_details.chahida.upokhat} ক্রয়
                                            খাতে প্রাপ্ত বরাদ্দের
                                            মধ্যে রয়েছে।
                                        </p>
                                    </div>

                                    <div className="notetext">
                                        <p className="text">
                                            নিম্নবর্ণিত সর্বনিম্ন দরদাতা স্থানীয় {this.props.RFQ_details.chahida.title}
                                            সরবরাহকারী প্রতিষ্ঠান থেকে {items} ক্রয়
                                            করার জন্য কর্তৃপক্ষের অনুমতিক্রমে কার্যাদেশ
                                            প্রদানের জন্য স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র ও প্রস্তাব মূল্যায়ন কমিটি
                                            সর্বসম্মতিক্রমে সুপারিশ করেন।
                                        </p>
                                    </div>

                                    <div className="table table-bordered table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th>ক্রমিক <br/>নং</th>
                                                <th>প্রতিষ্ঠানের নাম</th>
                                                <th>কমিটি কর্তৃক সুপারিশকৃত আইটেম</th>
                                                <th>টাকার পরিমাণ</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>০১</td>
                                                <td><strong> {comName} </strong> <br/>
                                                    {comDesc}
                                                </td>
                                                <td>{items}
                                                </td>
                                                <td>{amount}/-</td>
                                            </tr>
                                            </tbody>

                                        </table>

                                    </div>
                                    <div className="notetext">
                                        <p className="text">
                                            ১০। বর্ণিত অবস্থার প্রেক্ষিতে স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র ও প্রস্তাব
                                            মূল্যায়ন কমিটির সুপারিশের আলোকে {comName} কে
                                            = {amount}/- ({amountFinal}) টাকার কার্যাদেশ প্রদানের সদয় অনুমোদনের জন্য
                                            উপস্থাপন করা হলো।
                                        </p>

                                    </div>
                                    <div className="row">
                                        {step10Acc}
                                        {step11Dir}
                                    </div>
                                    <p className="text">
                                        ১১। অনুচ্ছেদ নং ১০ এর অনুমোদনের আলোকে দরপত্রের কার্যাদেশ স্বাক্ষরের অনুমতির জন্য
                                        উপস্থাপন করা হলো।
                                    </p>
                                    <div className="row">
                                        {this.genSignBlock("হিসাবরক্ষক", this.props.RFQ_details.step1011accountant)}
                                        {this.genSignBlock("অনুমোদনকারী", this.props.RFQ_details.step1011director)}
                                    </div>
                                    <br/>
                                    <br/>

                                </div>
                                <div className="notefooter">
                                    <hr/>
                                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                    <h4>Tel : 02 9671830, 01715032057</h4>
                                </div>

                            </div>

                            <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-top col-md-12">
                                            <img src="/dricmlogo.jpg" className="center-block"/>
                                            <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                            <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text">
                                        ১২। {WOdate} ইং তারিখে {this.props.RFQ_details.purchase.order_no}/WO-01 সংখ্যক কার্যাদেশের
                                        মাধ্যমে {comName}-কে {items} সরবরাহ বাবদ = {amount}/- ({amountFinal}) টাকার কার্যাদেশ প্রদান করা হয়।
                                        নথি যোগাযোগ পৃষ্ঠা নং- মোতাবেক সরবরাহকারী প্রতিষ্ঠান {comName} কার্যাদেশ চুক্তির শর্ত মোতাবেক
                                        {items} ভালো অবস্থায় সরবরাহ করেছে। (চালান পৃ: নং- )
                                    </p>


                                    <p className="text">
                                        ১৩। অত্র ইনষ্টিটিউট- এ {chahida_potro.title} এর প্রয়োজনীয়তা দেখা দেয়ায় {items} ক্রয়ের সিদ্ধান্ত নেয়া হয়।
                                        ক্রয়ের জন্য নোটিশ বোর্ডে দরপত্র বিজ্ঞপ্তি দেয়া হয়। (নথি পৃষ্ঠা নং- )। <br/>
                                        <br/> সে সূত্রে নির্দিষ্ট দিনে ও সময়ে {standardNum} টি দরপত্র পাওয়া যায়। প্রাপ্ত
                                        দরপত্রগুলোর তুলনামূলক বিবরণী {WOdate} তারিখে অনুষ্ঠিত স্বল্পমূল্যের ক্রয়ের
                                        জন্য দরপত্র ও প্রস্তাব মূল্যায়ন
                                        কমিটির সভায় উপস্থাপন করা হলে কমিটি দরপত্রগুলো পর্যালোচনা করতঃ সর্বনিম্ন দরদাতা
                                        হিসেবে {comName}-কে সর্বমোট = {amount}/- ({amountFinal}) টাকায় কার্যাদেশ দেয়ার জন্য সুপারিশ করে।
                                        সে মতে {comName}-কে পত্র পৃষ্ঠা নং তে রাখা কার্যাদেশ দেয়া হয়। অতঃপর কার্যাদেশে উল্লিখিত সময়সীমার
                                        মধ্যে সরবরাহকারী মালামাল সরবরাহ করেছে। চালান পত্র পৃষ্ঠা নং তে রাখা হলো। {items} গবেষণাগারে সঠিকভাবে ব্যবহৃত
                                        হচ্ছে মর্মে সংশ্লিষ্ট বিজ্ঞানীরা জানান (নথি পৃষ্ঠা নং )। <br/>
                                        <br/> {items} এর স্টক এন্ট্রি করা হয়েছে (স্টক বই পৃষ্ঠা নং )।
                                        <br/>
                                        <br/>
                                        কাজেই বিল পরিশোধ্য হিসেবে পরিক্ষান্তে পাওয়া গেল। বিলের বিবরণ নিম্নরূপ-
                                    </p>

                                    <div className="text-center">
                                        <p id="text-stnd1">
                                            <strong>{comName}</strong> <br/>
                                            <br/>
                                            মোট টাকার পরিমাণ = {amount} /- <br/>
                                            ভ্যাট ৫% কর্তন = (-) {amount*0.05} /- <br/>
                                            <br/> মোট = {amount*0.95} /-


                                        </p>

                                    </div>
                                </div>
                                <div className="notefooter">
                                    <hr/>
                                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                    <h4>Tel : 02 9671830, 01715032057</h4>
                                </div>

                            </div>

                            <div className="col-md-12 jumbotron text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="title-top col-md-12">
                                            <img src="/dricmlogo.jpg" className="center-block"/>
                                            <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                            <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                            <hr/>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text">
                                        ১৪। বর্ণনা মোতাবেক সরবরাহকারীকে = ১,৩৩,০০০ /- (এক লক্ষ তেত্রিশ হাজার টাকা মাত্র)
                                        টাকা পরিশোধ্য এবং কর্তিত ভ্যাট = ৭,০০০.০০ /- (সাত হাজার টাকা মাত্র) টাকা সরকারী
                                        কোষাগারে জমাযোগ্য। উক্তরূপ পরিশোধ ব্যবস্থা গ্রহণ করা যেতে পারে । বিল ফরমে
                                        প্রয়োজনীয় রেকর্ড করা হয়েছে। বিলের অর্থ ২০১৫-২০১৬ অর্থবছরের রাজস্ব বরাদ্দের
                                        রাসায়নিক দ্রব্যাদি ক্রয় খাত হতে পরিশোধযোগ্য।
                                    </p>

                                    <p className="text">
                                        ১৫। প্রস্তাব সদয় অনুমোদনের জন্য নথি উপস্থাপন করা হলো।

                                    </p>


                                    <p className="text">
                                        ১৬। অনুমোদন মোতাবেক নিম্নের চেক ইস্যু করা হলো-
                                    </p>
                                    <div className="row notetext">
                                        <div className="col-md-9">
                                            <div className="col-md-12 form-style-4">
                                                <label htmlFor="checkno">
                                                    <span>সরবরাহকারী চেক নং- </span>
                                                    <input style={{width: "60%"}} ref="checkno" placeholder="চেক নং "
                                                           name="checkno"
                                                           type="text"/>
                                                </label>
                                            </div>
                                            <div className="col-md-12 form-style-4">
                                                <label htmlFor="checkno">
                                                    <span> তারিখ- </span>
                                                    <input ref="tarikhno" placeholder=" তারিখ " name="tarikhno"
                                                           type="text"/>
                                                </label>
                                            </div>
                                            <div className="col-md-12 form-style-4">
                                                <label htmlFor="taka">
                                                    <span> টাকা = </span>
                                                    <input ref="taka" placeholder=" টাকা " name="taka"
                                                           type="text"/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                        </div>
                                    </div>
                                    <div className="row notetext">
                                        <div className="col-md-6">
                                            <div className="col-md-12 form-style-4">
                                                <label htmlFor="checkno">
                                                    <span> ভ্যাট চেক নং- </span>
                                                    <input style={{width: "60%"}} ref="checkno" placeholder="চেক নং "
                                                           name="checkno"
                                                           type="text"/>
                                                </label>
                                            </div>
                                            <div className="col-md-12 form-style-4">
                                                <label htmlFor="checkno">
                                                    <span> তারিখ- </span>
                                                    <input ref="tarikhno" placeholder=" তারিখ " name="tarikhno"
                                                           type="text"/>
                                                </label>
                                            </div>
                                            <div className="col-md-12 form-style-4">
                                                <label htmlFor="taka">
                                                    <span> টাকা = </span>
                                                    <input ref="taka" placeholder=" টাকা  " name="taka"
                                                           type="text"/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                        </div>
                                    </div>
                                </div>
                                <div className="notefooter">
                                    <hr/>
                                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                    <h4>Tel : 02 9671830, 01715032057</h4>
                                </div>

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


Note.propTypes = {
    RFQ_details: PropTypes.object
};

export default createContainer(props => {
    var RFQ = RFQDetails.findOne(props.id);
    var Acc, Dir;
    if (RFQ) {
        Acc = Meteor.users.find({_id: RFQ.chahida.accountant.user_id}).fetch();
        Dir = Meteor.users.find({_id: RFQ.chahida.director.user_id}).fetch();
    }
    return {
        RFQ_details: RFQ,
        Acc: Acc,
        Dir: Dir,
        SpOf: Meteor.users.find(
            {
                'profile.committee.name': "Specification Committee",
                'profile.committee.des': 'Shochib'
            }).fetch()
    };
}, Note);
