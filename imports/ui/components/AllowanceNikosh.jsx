import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import SideBar from './SideBar';

class AllowanceNikosh extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
        this.state = {
            signed: false
        };
    }

    handleSign(){
        Meteor.call('updateAllowanceNikosh', this.props.RFQ_details._id, Meteor.userId());
    }

    passwordcheck(e) {
        if (e.key === 'Enter') {
            var that = this;
            var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
            var digest = Package.sha.SHA256(password);
            Meteor.call('checkPassword', digest, function (err, result) {
                if (result) {
                    that.handleSign();
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

    genSignBlock(user) {
        const cursor = ImagesCol.findOne({_id: user.pic});
        var link = '';
        if (cursor) {
            link = cursor.link();
        }
        if (user.signed) {
            return (
                <div className="col-md-12 center-block">
                    <img id="signPic" src={link} alt="User Image"/>
                </div>
            )
        }
        else if (user.user_id && !user.signed) {
            if (Meteor.userId() == user.user_id) {
                if (this.state.signed) {
                    return (
                        <div className="col-md-12 center-block">
                            <img id="signPic" src={link} alt="User Image"/>
                        </div>
                    )
                } else {
                    return (
                        <div className="col-md-12 center-block form-group">
                            <div id="signblock" className="form-style-4">
                                <input style={{float: "center"}} onKeyPress={this.passwordcheck.bind(this)} type="password" name="password"
                                       ref="password"
                                       placeholder="Password"/><br/>
                            </div>
                            <div>
                            </div>
                        </div>
                    )
                }
            }
            else {
                return (
                    <div className="col-md-12 center-block">
                    </div>
                )
            }
        }
        else {
            return (
                <div className="col-md-12 center-block">
                </div>
            )
        }
    }

    genSignBlock2(user) {
        const cursor = ImagesCol.findOne({_id: user.pic});
        var link = '';
        if (cursor) {
            link = cursor.link();
        }
        if (user.signed) {
            return (
                <div className="col-md-12 center-block">
                    <img id="signPic" src={link} alt="User Image"/>
                </div>
            )
        }

        else {
            return (
                <div className="col-md-12 center-block">
                </div>
            )
        }
    }

    genTable(){
        var that=this;
        //this.handleSign();
        var i=0;
        return this.props.RFQ_details.allowance_nikosh.map(function (member) {
            var block=that.genSignBlock(member);
            //console.log(member);
            i++;
            return (
                <tr key={member.user_id}>
                    <td>{i}</td>
                    <td>{member.name}</td>
                    <td>{member.designation}<br/>
                        {"DRiCM , BCSIR"}<br/>
                        {member.comdes}, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/> ও প্রস্তাব মূল্যায়ন
                        কমিটি
                    </td>
                    <td>{block}</td>
                </tr>
            );
        });
    }

    genTable2(){
        var that=this;
        //this.handleSign();
        var i=0;
        return this.props.RFQ_details.allowance_nikosh.map(function (member) {
            var block=that.genSignBlock2(member);
            //console.log(member);
            i++;
            return (
                <tr key={member.user_id}>
                    <td>{i}</td>
                    <td>{member.name}<br/>
                        {"DRiCM , BCSIR"}<br/>
                        {member.comdes}, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/> ও প্রস্তাব মূল্যায়ন
                        কমিটি
                    </td>
                    <td scope="colgroup">৩০০/-</td>
                    <td scope="colgroup">৩০/-</td>
                    <td scope="colgroup">২৭০/-</td>
                    <td scope="colgroup">{block}</td>
                </tr>
            );
        });
    }

    render() {
        if (this.props.RFQ_details && this.props.SpCh) {
            return (
                <div className="container">
                    <div className="col-md-3">
                        <SideBar goToNote={'/Note/' + this.props.RFQ_details._id}
                        />
                    </div>
                    <div className="col-md-8">
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
                                            <p id="dateload"><strong>{this.datefromcreate(this.props.RFQ_details.meeting.dateOfMeeting)}</strong></p>
                                        </div>
                                    </div>

                                    <div id="text-stnd" className="text-left">
                                        {this.datefromcreate(this.props.RFQ_details.meeting.dateOfMeeting)} তারিখে অনুষ্ঠিত ডেজিগনেটেড রেফারেন্স ইনষ্টিটিউট ফর
                                        কেমিক্যাল
                                        মেজারমেন্টস- এর
                                        Supply of {this.props.RFQ_details.chahida.title} কাজের জন্য আহবানকৃত স্বল্পমূল্যের ক্রয় সংক্রান্ত দরপত্র
                                        মূল্যায়ন
                                        কমিটির
                                        সভা কমিটির সভাপতি {this.props.SpCh.profile.name}-এর সভাপতিত্বে অনুষ্ঠিত হয়। সভায় সন্মানিত
                                        সদস্যগনের
                                        উপস্থিতির
                                        তালিকা। <br/>
                                        <br/>
                                        <br/>
                                        সভার স্থান : ডিআরআইসিএম সভা কক্ষ। <br/>
                                        <br/>

                                        সময় : বিকাল ৩:৩০ ঘটিকা। <br/>
                                        <br/>
                                        <br/>

                                    </div>

                                    <div className="table table-bordered table-responsive">
                                        <table className="table">
                                            <thead className="text-center">
                                            <tr>
                                                <th>ক্র.নং</th>
                                                <th id="nss">কর্মকর্তার নাম</th>
                                                <th id="nss">পদবী ও প্রতিষ্ঠান</th>
                                                <th id="nss">স্বাক্ষর</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.genTable()}

                                            </tbody>

                                        </table>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <hr/>
                                <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                <h4>Tel : 02 9671830, 01715032057</h4>
                            </div>
                        </div>


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
                                            <p id="dateload"><strong>DATE {this.datefromcreate(this.props.RFQ_details.meeting.dateOfMeeting)}</strong></p>
                                        </div>
                                    </div>

                                    <div id="text-stnd" className="text-left">
                                        {this.datefromcreate(this.props.RFQ_details.meeting.dateOfMeeting)} তারিখে অনুষ্ঠিত ডেজিগনেটেড রেফারেন্স ইনষ্টিটিউট ফর
                                        কেমিক্যাল
                                        মেজারমেন্টস- এর
                                        Supply of {this.props.RFQ_details.chahida.title} কাজের জন্য আহবানকৃত স্বল্পমূল্যের ক্রয় সংক্রান্ত দরপত্র
                                        মূল্যায়ন
                                        কমিটির
                                        সভা কমিটির সভাপতি {this.props.SpCh.profile.name}-এর সভাপতিত্বে অনুষ্ঠিত হয়। সভায় সন্মানিত
                                        সদস্যগনের
                                        উপস্থিতির
                                        তালিকা। <br/>
                                        <br/>
                                        <br/>
                                        সভার স্থান : ডিআরআইসিএম সভা কক্ষ। <br/>
                                        <br/>

                                        সময় : বিকাল ৩:৩০ ঘটিকা। <br/>
                                        <br/>
                                        <br/>

                                    </div>

                                    <div className="table table-bordered table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <th rowSpan="2">ক্র.নং</th>
                                                <th rowSpan="2" id="nss">কর্মকর্তার নাম ও পদবী</th>
                                                <th colSpan="4" id="nss">সন্মানী</th>
                                            </tr>
                                            <tr>
                                                <th scope="col">মোট</th>
                                                <th scope="col">আয়কর <br/>
                                                    কর্তন <br/>
                                                    (১০%)
                                                </th>
                                                <th scope="col">পরিশোধ্য</th>
                                                <th scope="col">স্বাক্ষর</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.genTable2()
                                            }

                                            </tbody>

                                        </table>

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

AllowanceNikosh.propTypes = {
    RFQ_details: PropTypes.object,
    SpCh: PropTypes.object
};

export default createContainer(props => {
    return {
        SpCh: Meteor.users.findOne(
            {
                'profile.committee.name': "Specification Committee",
                'profile.committee.des': 'Chairman'
            }),
        RFQ_details: RFQDetails.findOne({_id: props.id})
    };
}, AllowanceNikosh);