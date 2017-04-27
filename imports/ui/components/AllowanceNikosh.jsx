import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import SideBar from './SideBar';

class AllowanceNikosh extends Component {

    render() {
        if (this.props.RFQ_details) {
            return (
                <div className="container">
                    <div className="col-md-3">
                        <SideBar
                        />
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
                                            className="pull-left"><strong>RFQ No :  <b></b></strong></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p id="dateload"><strong>DATE</strong></p>
                                        </div>
                                    </div>

                                    <div id="text-stnd" className="text-left">
                                        .................... তারিখে অনুষ্ঠিত ডেজিগনেটেড রেফারেন্স ইনষ্টিটিউট ফর
                                        কেমিক্যাল
                                        মেজারমেন্টস- এর
                                        Supply of Chemicals কাজের জন্য আহবানকৃত স্বল্পমূল্যের ক্রয় সংক্রান্ত দরপত্র
                                        মূল্যায়ন
                                        কমিটির
                                        সভা কমিটির সভাপতি ফারজানা হোসেন-এর সভাপতিত্বে অনুষ্ঠিত হয়। সভায় সন্মানিত
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
                                            {
                                                this.props.RFQ_details.allowance_nikosh.map(function (member) {
                                                    return (
                                                        <tr key={member.user_id}>
                                                            <td>০১</td>
                                                            <td>{member.name}</td>
                                                            <td>বৈজ্ঞানিক কর্মকর্তা <br/>
                                                                ডিআরআইসিএম, বিসিএসআইআর <br/>
                                                                ও সভাপতি, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/> ও প্রস্তাব মূল্যায়ন
                                                                কমিটি
                                                            </td>
                                                            <td>......................</td>
                                                        </tr>
                                                    )
                                                })
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
                                            className="pull-left"><strong>RFQ No :  <b></b></strong></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p id="dateload"><strong>DATE</strong></p>
                                        </div>
                                    </div>

                                    <div id="text-stnd" className="text-left">
                                        .................... তারিখে অনুষ্ঠিত ডেজিগনেটেড রেফারেন্স ইনষ্টিটিউট ফর
                                        কেমিক্যাল
                                        মেজারমেন্টস- এর
                                        Supply of Chemicals কাজের জন্য আহবানকৃত স্বল্পমূল্যের ক্রয় সংক্রান্ত দরপত্র
                                        মূল্যায়ন
                                        কমিটির
                                        সভা কমিটির সভাপতি ফারজানা হোসেন-এর সভাপতিত্বে অনুষ্ঠিত হয়। সভায় সন্মানিত
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
                                            <tr>
                                                <td>০১</td>
                                                <td>ফারজানা হোসেন <br/>
                                                    বৈজ্ঞানিক কর্মকর্তা <br/>
                                                    ডিআরআইসিএম, বিসিএসআইআর <br/>
                                                    ও সভাপতি, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/> ও প্রস্তাব মূল্যায়ন
                                                    কমিটি
                                                </td>
                                                <td scope="colgroup">৩০০/-</td>
                                                <td scope="colgroup">৩০/-</td>
                                                <td scope="colgroup">২৭০/-</td>
                                                <td scope="colgroup">.....</td>
                                            </tr>
                                            <tr>
                                                <td>০২</td>
                                                <td>ড. বিলকিস আরা বেগম <br/>
                                                    প্রধান বৈজ্ঞানিক কর্মকর্তা <br/>
                                                    ও বিভাগীয় প্রধান, রসায়ন বিভাগ, <br/>
                                                    পরমানু শক্তি কেন্দ্র, ঢাকা ও <br/>সদস্য, স্বল্পমূল্যের ক্রয়ের জন্য
                                                    দরপত্র <br/>
                                                    ও প্রস্তাব মূল্যায়ন কমিটি
                                                </td>
                                                <td scope="colgroup">৩০০/-</td>
                                                <td scope="colgroup">৩০/-</td>
                                                <td scope="colgroup">২৭০/-</td>
                                                <td scope="colgroup">.....</td>
                                            </tr>
                                            <tr>
                                                <td>০৩</td>
                                                <td>মো: আব্দুল হাই <br/>
                                                    টেকনিকাল অফিসার <br/>
                                                    ক্রয়শাখা, বিসিএসআইআর <br/>
                                                    ও সদস্য, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/>ও প্রস্তাব মূল্যায়ন
                                                    কমিটি
                                                </td>
                                                <td scope="colgroup">৩০০/-</td>
                                                <td scope="colgroup">৩০/-</td>
                                                <td scope="colgroup">২৭০/-</td>
                                                <td scope="colgroup">.....</td>
                                            </tr>
                                            <tr>
                                                <td>০৪</td>
                                                <td>মো: জুয়েল হোসেন <br/>
                                                    বৈজ্ঞানিক কর্মকর্তা <br/>
                                                    ডিআরআইসিএম, বিসিএসআইআর <br/>
                                                    ও সদস্য, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/>ও প্রস্তাব মূল্যায়ন
                                                    কমিটি
                                                </td>
                                                <td scope="colgroup">৩০০/-</td>
                                                <td scope="colgroup">৩০/-</td>
                                                <td scope="colgroup">২৭০/-</td>
                                                <td scope="colgroup">.....</td>
                                            </tr>

                                            <tr>
                                                <td>০৫</td>
                                                <td>সুমাইয়া আক্তার <br/>
                                                    বৈজ্ঞানিক কর্মকর্তা <br/>
                                                    ডিআরআইসিএম, বিসিএসআইআর <br/>
                                                    ও সদস্য-সচিব, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/>ও প্রস্তাব
                                                    মূল্যায়ন
                                                    কমিটি
                                                </td>
                                                <td scope="colgroup">৩০০/-</td>
                                                <td scope="colgroup">৩০/-</td>
                                                <td scope="colgroup">২৭০/-</td>
                                                <td scope="colgroup">.....</td>
                                            </tr>

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
    RFQ_details: PropTypes.object
};

export default createContainer(props => {
    return {
        RFQ_details: RFQDetails.findOne({_id: props.id})
    };
}, AllowanceNikosh);