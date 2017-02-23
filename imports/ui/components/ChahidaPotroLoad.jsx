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
                    <p id="signLabel"><strong>নিবেদক</strong></p>
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
                        <p id="signLabel"><strong>নিবেদক</strong></p>
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
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">



                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 id="chahidatitle"> চাহিদা পত্র</h2>
                                </div>
                                <div className="col-md-12 form-style-4">
                                    <label htmlFor="title">
                                        <span>RFQ Title :</span>
                                        <input ref="title" id="title" name="title" type="text"/>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text"> ১। বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)- এ
                                        অন্তকালীন
                                        ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস (ডিআরআইসিএম) - এ
                                        নিম্নক্ত
                                        ....................................... ক্রয় করা প্রয়োজন। </p>


                                    <p className="text">
                                        ২। এ জন্য আনুমানিক .......................................
                                        (কথায়)
                                        ................................. টাকা ব্যয়।
                                        <br/>
                                        ৩। অতএব ড়ুক্ত
                                    </p>


                                </div>
                            </div>
                            <div className="row">
                                {signBlock}
                                <div className="col-md-6 center-block">

                                    <p id="unsignLabel"><strong>যাচাইকারী </strong></p>
                                </div>
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

export default createContainer( props => {
    return {
        chahidapotro: Chahida_Potro.findOne(props.id)
    };
}, ChahidaPotroLoad);