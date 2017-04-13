import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

export default class MeetingNotice extends Component {

    render() {
        return (
            <div className="container">
                <div id="chahidajumbo" className="col-md-10 jumbotron text-center">
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

                            <div>
                                <p className="text-center">
                                    <br/>
                                    <br/>
                                    <strong> অফিস স্মারক </strong>
                                </p>
                                <p id="meeting">
                                    বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)- এর আওতাধীন ডেজিগনেটেড রেফারেন্স
                                    ইনষ্টিটিউট ফর কেমিক্যাল মেজারমেন্টস্ (ডিআরআইসিএম)- এ ২০১৫-২০১৬ অর্থবছরের রাজস্ব ক্রয়
                                    পরিকল্পনা অনুযায়ী Supply of Chemicals ক্রয়ের জন্য RFQ পদ্ধতিতে দরপত্র আহবান করা
                                    হয়েছে । জমাকৃত দরপত্রগুলোর তুলনামূলক তালিকা প্রস্তুতপূর্বক যাচাই বাছাই করার লক্ষ্যে
                                    স্বল্প মূল্যের ক্রয়ের জন্য দরপত্র প্রস্তাব ও মূল্যায়ন কমিটি (TEC) এর সভা অদ্য
                                    ২৮/০২/২০১৬ ইং তারিখ দুপুর ৩:৩০ ঘটিকার সময় ডিআরআইসিএম সভা কক্ষে অনুষ্ঠিত হবে ।
                                    (meeting date) <br/>
                                    <br/>

                                    উক্ত সভায় উপস্থিত থাকার জন্য কমিটির সকল সদস্যকে অনুরোধ জানানো যাচ্ছে।

                                </p>

                                <p id="meeting" className="pull-right text-center">
                                    <br/>
                                    <br/>
                                    <br/>
                                    (signature)
                                    <br/>
                                    <br/>
                                    সুমাইয়া আক্তার <br/>
                                    সদস্য-সচিব, স্বল্পমূল্যের ক্রয়ের জন্য দরপত্র <br/>
                                    ও প্রস্তাব মূল্যায়ন কমিটি <br/>
                                    ডিআরআইসিএম, বিসিএসআইআর
                                </p>

                                <p id="meeting" className="pull-left">
                                    <br/>
                                    <br/>
                                    বিতরন ও কার্যার্থে (জেষ্ঠ্যতার ভিত্তিতে নয়) <br/>
                                    <br/>
                                    ক)  ফারজানা হোসেন, বৈজ্ঞানিক কর্মকর্তা, ডিআরআইসিএম, বিসিএসআইআর। <br/>
                                    খ)  ড. বিলকিস আরা বেগম, প্রধান বৈজ্ঞানিক কর্মকর্তা (পিএসও) ও বিভাগীয় প্রধান, রসায়ন বিভাগ, পরমানু শক্তি
                                    কেন্দ্র, ঢাকা । <br/>
                                    গ)  মো: আব্দুল হাই, টেকনিকাল অফিসার (ক্রয়শাখা), বিসিএসআইআর । <br/>
                                    ঘ)  মো: জুয়েল হোসেন, বৈজ্ঞানিক কর্মকর্তা, ডিআরআইসিএম, বিসিএসআইআর। <br/>
                                    ঙ)  অফিস কপি।


                                </p>
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


        );
    }
}
