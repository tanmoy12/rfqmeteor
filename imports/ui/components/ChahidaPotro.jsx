import React, {Component} from "react";
import SideKick from "./SideKick";

export default class ChahidaPotro extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header">
                                        <img src="img/logo.png" className="center-block" alt="logo"/>
                                        <h2> ডেসিগ্নাতেদ রেফ্রেঞ্চে ইন্সিটিউট অফ কেমিক্যাল মেযারমেন্তস</h2>
                                        <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="form-group col-md-10">
                                            <div className="col-md-3">
                                                <label className="control-label" htmlFor="email">সুত্র নং</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input className="form-control" placeholder="সুত্র নং"/>
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
	          											<span className="input-group-addon">
	          												<span className="glyphicon glyphicon-calendar"></span>
	          											</span>
                                                    <input className="form-control" id="date" name="date"
                                                           placeholder="DATE" type="text"/>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 id="h2"> চাহিদা পত্র</h2>
                                </div>
                                <div className="form-group col-md-2">
                                    <label className="control-label" htmlFor="email">RFQ TITLE</label>
                                </div>
                                <div className="col-md-10" id="RFQ">
                                    <input className="form-control" placeholder="RFQ TITLE"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text"> ১। বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)- এ
                                        অন্তকালীন ডেসিগ্নাতেদ রেফ্রেঞ্চে ইন্সিটিউট অফ কেমিক্যাল মেযারমেন্তস (ডিআরআইসিএম)
                                        - এ নিম্নক্ত ....................................... ক্রয় করা প্রয়োজন। </p>
                                    <div className="table">
                                        <table
                                            className="table table-bordered table-hover table-condensed table-responsive">
                                            <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Description Of Item</th>
                                                <th>Quantity</th>
                                                <th>Unit rate of price</th>
                                                <th>Total Amount</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>d</td>
                                                <td>d</td>
                                                <td>d</td>
                                                <td>d</td>
                                                <td>d</td>
                                            </tr>
                                            <tr>
                                                <td>d</td>
                                                <td>d</td>
                                                <td>d</td>
                                                <td>d</td>
                                                <td>d</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text"> ২। এ জন্য আনুমানিক .......................................
                                        (কথায়) ................................. টাকা ব্যয়। </p>
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
                                    <p className="text"> ৪। উক্ত ব্যয় ..................... অর্থ বছরের রাজস্ব বাজেটের
                                        সরবরাহ ও সেবা খাতের (ঊপখাতঃ রসায়ন দ্রব্যাদি ক্রয় নং-৪৮৫২) হতে ক্রয় প্রক্রিয়া
                                        মাধ্যমে নির্বাহ করা যেতে পারে। </p>

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
                        <div className="col-md-3">
                            <SideKick/>
                        </div>

                        <div className="row">
                            <div className="col-md-9 col-lg-9">
                                <input type="submit" name="login-submit" id="submit-all"
                                       className="form-control1 btn btn-primary"
                                       value="Submit"/>
                            </div>
                            <div className="col-md-3">
                            </div>
                        </div>


                    </div>


                </div>
                <SideKick/>
            </div>

        );
    }
}
