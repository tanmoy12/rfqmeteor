import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";

export default class StandardDocumentLoad3 extends Component {
    constructor(props) {
        super(props);

        this.state = {}
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

    render() {
        return (
            <div id="chahidajumbo" className="col-md-10 jumbotron text-center">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-top col-md-12">
                            <img src="../dricmlogo.jpg" className="center-block"/>
                            <h3>Designated Reference Institute for Chemical Measurements (DRiCM) </h3>
                            <h3>Bangladesh Council of Scientific & Industrial Research (BCSIR)</h3>
                            <hr/>
                        </div>
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

                            <p className="text">
                                The total Price of my/our Quotation is BDT <strong>[insert amount both in
                                figure
                                and words] </strong>
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

                            <p className="text">
                                I/We have examined and have no reservations to the RFQ Document issued by
                                you on
                                <strong> [insert date] </strong>
                            </p>

                            <p className="text">
                                I/We understand that you reserve the right to reject all the Quotations or
                                annul
                                the procurement proceedings without incurring any liability to me/us.
                            </p>

                        </div>
                        <p className="text text-right">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            Signature of Quotationer with Seal <br/>
                            Date:
                        </p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <hr/>
                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                    <h4>Tel : 02 9671830, 01715032057</h4>
                </div>
            </div>

        );
    }
}