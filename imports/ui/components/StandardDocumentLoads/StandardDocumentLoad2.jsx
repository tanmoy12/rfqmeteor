import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {createContainer} from "meteor/react-meteor-data";

export default class StandardDocumentLoad2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signed: false
        }
    }

    passwordcheck(e) {
        if (e.key === 'Enter') {
            var that = this;
            var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
            var digest = Package.sha.SHA256(password);
            Meteor.call('checkPassword', digest, function (err, result) {
                if (result) {
                    that.props.getSign(true);
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
                                <input style={{float: "center"}} onKeyPress={this.passwordcheck.bind(this)} type="password" name="password"
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

    render() {
        return (
            <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                <div className="title-top col-md-12">
                    <img src="../dricmlogo.jpg" className="center-block"/>
                    <h3>Designated Reference Institute for Chemical Measurements (DRiCM) </h3>
                    <h3>Bangladesh Council of Scientific & Industrial Research (BCSIR)</h3>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div classID="standardbody">
                            <p className="text">
                                12. Rates shall be quoted and, subsequent payments under this Contract shall
                                be
                                made in Taka currency. The price offered by the Quotationer, if accepted
                                shall
                                remain fixed for the duration of the Contract.
                            </p>

                            <p className="text">
                                13. Quotationer shall have legal capacity to enter into Contract.
                                Quotationer,
                                in support of its qualification shall be required to submit certified
                                photocopies of latest documents related to valid <strong>Trade License, Tax
                                Identification Number (TIN), VAT Registration Number and Financial Solvency
                                Certificate </strong> from any scheduled Bank; without which the Quotation
                                may
                                be
                                considered non-responsive.
                            </p>

                            <p className="text">
                                14. Quotations shall be evaluated based on information and documents
                                submitted
                                with the Quotations, by the Evaluation Committee and at least three (3)
                                responsive Quotations will be required to determine the lowest evaluated
                                responsive Quotations for award of the Contract.
                            </p>

                            <p className="text">
                                15. In case of anomalies between unit rates or prices and the total amount
                                quoted, the unit rates or prices shall prevail. In case of discrepancy
                                between
                                words and figures the former will govern. Quotationer shall remain bound to
                                accept the arithmetic corrections made by the Evaluation Committee.
                            </p>

                            <p className="text">
                                16. The supply of Goods and related services shall be completed within 20
                                days
                                from the date of issuing the Purchase Order.
                            </p>

                            <p className="text">
                                17. The Purchase Order that constitutes the Contract binding upon the
                                Supplier
                                and the Procuring Entity shall be issued within 15 days of receipt of
                                approval
                                from the Approving Authority.
                            </p>

                            <p className="text">
                                18. The Procuring Entity reserves the right to reject all the Quotations or
                                annul the procurement proceedings.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.genSignBlock("অনুমোদনকারী", this.props.RFQ.standard.director)}
                    <div className="col-md-6">

                    </div>
                </div>
                <p className="text text-left">
                    (Dr. Mala Khan) <br/>
                    In- Charge <br/>
                    Designated Reference Institute for Chemical Measurements (DRiCM) <br/>
                    BCSIR, Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205 <br/>
                    Phone No: 02 9671830, 01715032057, Fax No: 02 58613819 <br/>
                    e-mail: malakhan_07@yahoo.com <br/>

                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    Distribution: <br/>

                    1. In- Charge Office, DRiCM, BCSIR, Dhaka-1205 <br/>
                    2. Notice Board. <br/>
                    3. Office File. <br/>

                </p>
                <div>
                    <hr/>
                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                    <h4>Tel : 02 9671830, 01715032057</h4>
                </div>
            </div>
        );
    }
}