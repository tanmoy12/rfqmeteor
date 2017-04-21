import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";
import Calendar from "../Calendar";

export default class StandardDocumentApply3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signed: false
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

    passwordcheck(e) {
        if (e.key === 'Enter') {
            var that = this;
            var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
            var digest = Package.sha.SHA256(password);
            Meteor.call('checkPassword', digest, function (err, result) {
                if (result) {
                    that.props.getSign4(true);
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
        var signBlock;
        let link = '';
        if (Meteor.user()) {
            const cursor = ImagesCol.findOne({_id: Meteor.user().profile.SealPic});
            if (cursor) {
                link = cursor.link();
            }
        }
        if (this.state.signed) {
            signBlock =
                <div className="col-md-3 pull-left" style={{paddingLeft: "0"}}>
                    <img className="col-md-12 pull-left" id="signPic" src={link}  alt="User Image"/>
                    <p className="text" style={{display: "block"}}>
                        Signature of Quotationer with Seal <br/>
                        Date: {this.datefromcreate(new Date())}
                    </p>
                </div>

        } else {
            signBlock =
                <div className="col-md-3 pull-left form-group" style={{paddingLeft: "0"}}>
                    <div id="signblock" className="col-md-12 form-style-4"  style={{paddingLeft: "0"}}>
                        <input onKeyPress={this.passwordcheck.bind(this)} type="password" name="password"
                               ref="password"
                               placeholder="Password" style={{marginLeft: "0px"}}/><br/>
                    </div>
                    <div>
                        <p className="text">
                            Signature of Quotationer with Seal <br/>
                            Date:
                        </p>
                    </div>

                </div>

        }

        return (
            <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                <div className="row">
                    <div className="col-md-12">
                        {this.props.head}
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p id="text-stnd">
                                    Quotation Submission Letter <br/>
                                    <strong>Use Letter-head Pad</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text-left">
                                    <strong>RFQ NO : </strong> {this.props.RFQ.standard.RFQ_no}
                                </div>


                            </div>
                            <div className="col-md-6">
                                <p id="dateload"><strong>DATE
                                    : {this.datefromcreate(this.props.RFQ.standard.createdAt)}</strong></p>
                            </div>
                        </div>

                        <div id="text-stnd" className="text-left">
                            TO <br/>
                            [Name and address of Procuring Entity]

                        </div>

                        <div classID="standardbody">
                            <p className="text">
                                I/We, the undersigned, offer to supply in conformity with the Terms and
                                Conditions for delivery of the Goods and related services named <strong>Supply
                                of
                                {this.props.RFQ.title} </strong>
                            </p>

                            <p className="text displayinblock">
                                The total Price of my/our Quotation is BDT
                                <strong>{this.props.estimate}</strong>

                            </p>

                            <p className="text">
                                My/Our Quotation shall remain valid for the period stated in the RFQ
                                Document
                                and it shalll remain binding upon us and, may be accepted at any time prior
                                to
                                the expiration of its validity period.
                            </p>


                            <p className="text">
                                I/We declare that I/we have the legal capacity to enter into a contract with
                                you, and have not been declared ineligible by the Government of Bangladesh
                                on
                                charges of engaging in corrupt, fraudulent, collusive or coercive practices.
                                Furthermore, I/we am/are aware of Para 21(b) of the Terms and Conditions and
                                pledge not to indulge in such practices in competing for or completion of
                                delivery of Goods.
                            </p>

                            <p className="text">
                                I/We am/are not submitting more than one Quotation in this RFQ process in
                                my/our
                                own name or other name or in different names. I/We understand that the
                                Purchase
                                Order issued by you shall constitute the Contract and will be binding upon
                                me/us.
                            </p>

                            <p className="text displayinblock">
                                I/We have examined and have no reservations to the RFQ Document issued by
                                you on
                                <Calendar dateSubChange={this.props.datesubChange}/>
                            </p>

                            <p className="text">
                                I/We understand that you reserve the right to reject all the Quotations or
                                annul
                                the procurement proceedings without incurring any liability to me/us.
                            </p>
                            {signBlock}

                        </div>


                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {this.props.foot}
            </div>

        );
    }
}