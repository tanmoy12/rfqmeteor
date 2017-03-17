import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import Table from "./Table";

export default class ChahidaPotroLoad extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
        this.state = {
            signed: false,
            addClass1: "current sidebar_li",
            addClass2: "sidebar_li",
            addClass3: "sidebar_li",
            addClass4: "sidebar_li",
            addClass5: "sidebar_li",

        };
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

    sidebar_link_click(e){
        //console.log(e);
        if(e=="1"){
            this.setState({
                addClass1: "current sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",


            });
        }
        else if(e=="2"){
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "current sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",


            });
        }
        else if(e=="3"){
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "current sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",


            });
        }
        else if(e=="4"){
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "current sidebar_li",
                addClass5: "sidebar_li",


            });
        }
        else if(e=="5"){
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "current sidebar_li",


            });
        }


    }

    render() {
        var signBlock;
        if (this.state.signed) {
            signBlock =
                <div className="col-md-6 center-block">
                    <img src="sign1.png" className="img-circle" alt="User Image"/>
                    <p id="signLabel"><strong>যাচাইকারী </strong></p>
                </div>
        } else {
            signBlock =
                <div className="col-md-6 center-block form-group">
                    <div className="col-md-1">
                    </div>
                    <div id="signblock" className="col-md-10 col-md-offset-1 form-style-4">
                        <input onKeyPress={this.passwordcheck.bind(this)} type="password" name="password" ref="password"
                               placeholder="Password"/><br/>
                    </div>
                    <div>
                        <p id="signLabel"><strong>যাচাইকারী </strong></p>
                    </div>

                </div>
        }
        var forward_to_style = {
            backgroundColor: "white",
            padding: "3.5%",
            marginTop: "3%",
            marginBottom: "3%",

        }
        var forward_to;
        if(this.state.addClass2=="current sidebar_li"){
            forward_to =
                <div style={forward_to_style}>
                    <p>FORWARD TO <strong>যাচাইকারী :</strong></p>
                    <div className="form-group">
                        <select ref="ScOf" className="form-control">


                        </select>
                    </div>

                    <div>
                        <input type="submit" name="login-submit"
                               id="submit-all"
                               className="btn btn-primary" value="FORWARD"/>
                    </div>
                </div>
        }

        return (


            <div className="container">

                <div className="row " style={{marginTop: "-2.4%", marginLeft: "-2.3%"}}>
                    <div className="col-md-3">
                        <div className="navbar navbar-inverse navbar-fixed-left sidebar">

                            <ul className="sidebar_ul">
                                <li className = {this.state.addClass1}>
                                    <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "1")} href="#">Chahidapotro</a>

                                </li>
                                <li className={this.state.addClass2}>
                                    <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "2")} href="#">Forward to</a>
                                    {forward_to}
                                </li>
                                <li className={this.state.addClass3}>
                                    <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "3")} href="#">Blog</a>
                                </li>
                                <li className={this.state.addClass4}>
                                    <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "4")} href="#">About</a>
                                </li>
                                <li className={this.state.addClass5}>
                                    <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "5")} href="#">Contact</a>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div className="col-md-9 pageContainer" style={{marginTop: "2.4%"}}>
                        <div id="chahidajumbo" className="jumbotron text-center">
                            <div className="row">
                                <div className="title-top col-md-12">
                                    <img src="/dricmlogo.jpg" className="center-block"/>
                                    <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                    <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                    <hr/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12 pull-left">
                                            <span className="pull-left"><strong>সুত্র নং : <b>123456</b></strong></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p id="dateload"><strong>DATE : 22/02/2027</strong></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 id="chahidatitle"> চাহিদা পত্র</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <br/>
                                    <p className="text"> ১। বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)- এ
                                        অন্তকালীন
                                        ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস (ডিআরআইসিএম) - এ
                                        নিম্নক্ত
                                        <strong> RFQ Title 1 </strong>ক্রয় করা প্রয়োজন। </p>

                                    <br/>
                                    <div id="tabledesc" className="table">
                                        <table id="customers"
                                               className="table table-responsive table-bordered table-condensed">

                                            <thead>
                                            <tr>
                                                <th className="col-md-1 text-center">Item</th>
                                                <th className="col-md-4 text-center">Description Of Item</th>
                                                <th className="col-md-2 text-center">Unit</th>
                                                <th className="col-md-1 text-center">Quantity</th>
                                                <th className="col-md-2 text-center">Rate/unit</th>
                                                <th className="col-md-2 text-center">Total Amount</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="col-md-1 text-left">Item</td>
                                                <td className="col-md-4 text-left">Description Of Item</td>
                                                <td className="col-md-2 text-left">Unit</td>
                                                <td className="col-md-1 text-left">Quantity</td>
                                                <td className="col-md-2 text-left">Rate/unit</td>
                                                <td className="col-md-2 text-left">Total Amount</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <br/><br/>

                                    </div>
                                    <p className="text">
                                        ২। এ জন্য আনুমানিক .......................................
                                        (কথায়)
                                        ................................. টাকা ব্যয়।
                                        <br/>
                                        ৩। অতএব, উপরোক্ত বর্ণনামাতে ............................. ক্রয়ের অনুমোদনের জন্য
                                        বিনীতভাবে অনুরোধ জানানো যাচ্ছে।
                                    </p>
                                    <br/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 center-block">
                                    <img src="sign1.png" className="img-circle" alt="User Image"/>
                                    <p id="signLabel"><strong>নিবেদক</strong></p>
                                </div>
                                {signBlock}
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text2"> ৪। উক্ত ব্যয় ..................... অর্থ বছরের রাজস্ব
                                        বাজেটের
                                        সরবরাহ
                                        ও সেবা খাতের (ঊপখাতঃ রসায়ন দ্রব্যাদি ক্রয় নং-৪৮৫২) হতে ক্রয় প্রক্রিয়া
                                        মাধ্যমে
                                        নির্বাহ করা যেতে পারে। </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 center-block">

                                    <p id="unsignLabel"><strong>হিসাবরক্ষক </strong></p>
                                </div>
                                <div className="col-md-6 center-block">

                                    <p id="unsignLabel"><strong>অনুমোদনকারী </strong></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-9">
                        <div className="col-md-2"></div>
                        <div id="chahidajumbo" className="jumbotron col-md-8 col-md-offset-2">
                            <div className="form-group text-center">
                                <p>FORWARD TO <strong>যাচাইকারী :</strong></p>
                                <div className="form-group">
                                    <select ref="ScOf" className="form-control">


                                    </select>
                                </div>

                                <div>
                                    <input type="submit" name="login-submit"
                                           id="submit-all"
                                           className="btn btn-primary" value="FORWARD"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
