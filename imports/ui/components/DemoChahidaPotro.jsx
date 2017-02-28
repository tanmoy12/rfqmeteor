import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import Table from "./Table";

class ChahidaPotroLoad extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
        this.state = {
            signed: false
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

    render() {
        console.log(this.props.chahidapotro);
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
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div id="chahidajumbo" className="jumbotron text-center">
                            <div className="row">
                                <div className="title-top col-md-12">
                                    <img src="dricmlogo.jpg" className="center-block"/>
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
                                            <td className="col-md-1 text-left">Item</td>
                                            <td className="col-md-4 text-left">Description Of Item</td>
                                            <td className="col-md-2 text-left">Unit</td>
                                            <td className="col-md-1 text-left">Quantity</td>
                                            <td className="col-md-2 text-left">Rate/unit</td>
                                            <td className="col-md-2 text-left">Total Amount</td>
                                            </tbody>
                                        </table>
                                        <br/><br/>

                                    </div>
                                    <p className="text">
                                        ২। এ জন্য আনুমানিক .......................................
                                        (কথায়)
                                        ................................. টাকা ব্যয়।
                                        <br/>
                                        ৩। অতএব, উপরোক্ত বর্ণনামাতে ............................. ক্রয়ের অনুমোদনের জন্য বিনীতভাবে অনুরোধ জানানো যাচ্ছে।
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
                    <div className="col-md-10">
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


ChahidaPotroLoad.propTypes = {
    chahidapotro: PropTypes.object
};

export default createContainer(props => {
    Meteor.subscribe('chahidapotroone', props.id);
    return {
        chahidapotro: Chahida_Potro.findOne(props.id)
    };
}, ChahidaPotroLoad);