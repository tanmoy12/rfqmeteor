import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { check } from 'meteor/check';

import SideKick from "./SideKick";
import Table3 from "./Table3";

export default class ChahidaPotro extends Component {
    dateToday() {
        var d = new Date();
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var dateshow;
        if (month < 10) {
            var dateshow = date + '/0' + month + '/' + year;
        } else {
            var dateshow = date + '/' + month + '/' + year;
        }
        return <p>{dateshow}</p>;
    }

    handleCreate(e) {
        e.preventDefault();

        var sutrono = ReactDOM.findDOMNode(this.refs.sutrono).value.trim();
        var title = ReactDOM.findDOMNode(this.refs.title).value.trim();

        if(title) {
            RFQDetailsform = {
                title: title,
            }
            RFQDetails.insert(RFQDetailsform, function (err, res) {
                if(err) console.log(err)
                else console.log("success")
            });
        }else{
            console.log("error");
            Bert.alert('fill up form', 'danger', 'fixed-top', 'fa-frown-o');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.handleCreate.bind(this)}>
                        <div className="col-md-9">
                            <div className="jumbotron text-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="page-header">
                                            <img src="dricmlogo.jpg" className="center-block"/>
                                            <h2> ডেসিগ্নাতেদ রেফ্রেঞ্চে ইন্সিটিউট অফ কেমিক্যাল মেযারমেন্তস</h2>
                                            <h2> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <div className="col-md-3">
                                                    <label className="control-label" htmlFor="email">সুত্র নং</label>
                                                </div>
                                                <div className="col-md-9">
                                                    <input className="form-control" ref="sutrono"
                                                           placeholder="সুত্র নং"/>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-5">

                                            </div>
                                            <div className="col-md-7">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        {this.dateToday()}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2> চাহিদা পত্র</h2>
                                    </div>
                                    <div className="col-md-2">
                                        <label className="control-label">RFQ TITLE</label>
                                    </div>
                                    <div className="col-md-10" id="RFQ">
                                        <input className="form-control" ref="title" placeholder="RFQ TITLE"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text"> ১। বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)- এ
                                            অন্তকালীন
                                            ডেসিগ্নাতেদ রেফ্রেঞ্চে ইন্সিটিউট অফ কেমিক্যাল মেযারমেন্তস (ডিআরআইসিএম) - এ
                                            নিম্নক্ত
                                            ....................................... ক্রয় করা প্রয়োজন। </p>

                                        <Table3/>

                                        <p className="text"> ২। এ জন্য আনুমানিক .......................................
                                            (কথায়)
                                            ................................. টাকা ব্যয়। </p>
                                        <p className="text"> ৩। অতএব ড়ুক্ত </p>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="verify"> নিবেদক </p>
                                        <div className="boxed"> Image & Signature</div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="verify"> জাছাইকারি </p>
                                        <div className="boxed"> Image & Signature</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text"> ৪। উক্ত ব্যয় ..................... অর্থ বছরের রাজস্ব
                                            বাজেটের
                                            সরবরাহ
                                            ও সেবা খাতের (ঊপখাতঃ রসায়ন দ্রব্যাদি ক্রয় নং-৪৮৫২) হতে ক্রয় প্রক্রিয়া
                                            মাধ্যমে
                                            নির্বাহ করা যেতে পারে। </p>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="verify"> হিসাবরক্ষক </p>
                                        <div className="boxed"> Image & Signature</div>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="verify"> অন্মদঙ্কারি </p>
                                        <div className="boxed"> Image & Signature</div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                <input type="submit" name="login-submit" id="submit-all"
                                       className="btn btn-primary" value="Submit"/>
                            </div>
                        </div>
                    </form>

                    <SideKick/>
                </div>
            </div>
        );
    }
}
