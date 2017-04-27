import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import Calendar from "../Calendar";

export default class StandardDocumentPage1 extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        //console.log(this.props);
        return (
            <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
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
                                <p id="text-stnd"><strong>REQUEST FOR QUOTATION </strong><br/> for <br/>
                                    <strong> Supply of {this.props.RFQ.title}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12 form-style-4">
                                        <label htmlFor="sutrono">
                                            <span>RFQ NO : </span>
                                            <input onChange={this.props.RFQnoChange.bind(this)} value={this.props.RFQno}
                                                   ref="sutrono" placeholder="RFQ NO" name="sutrono"
                                                   type="text"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {this.props.dateToday()}
                            </div>
                        </div>

                        <div id="text-stnd" className="text-left">
                            TO <br/>
                            ...................................................... <br/>
                            ...................................................... <br/>
                            ...................................................... <br/><br/>

                        </div>

                        <div classID="standardbody">
                            <p className="text"> 1. The <strong>In- Charge </strong> of “Designated
                                Reference
                                Institute for
                                Chemical Measurements (DRiCM)” has been allocated public funds and intends
                                to
                                apply a portion of the funds to eligible payments under the Contract for
                                which
                                this Quotation Document is issued. </p>

                            <p className="text"> 2. Detailed Specifications for the intended Goods and
                                related
                                services shall be available in the office of the Procuring Entity for
                                inspection
                                by the potential Quotationers during office hours on all working days. </p>

                            <p className="text"> 3. Quotation shall be prepared and submitted using the
                                ‘Quotation Document’. </p>


                            <p className="text"> 4. Quotation shall be completed properly, duly signed-dated
                                each page by the authorized signatory and submitted by the date to the
                                office as
                                specified in <strong>Para 6 </strong> below. </p>

                            <p className="text"> 5. No Securities such as Quotation Security (i.e. the
                                traditionally termed Earnest Money, Tender Security) and Performance
                                Security
                                shall be required for submission of the Quotation and delivery of the Goods
                                (if
                                awarded) respectively. </p>


                            <div className="form-inline">
                                <span className="text">6. Quotation in a sealed envelope or by fax or through electronic mail shall be
                                    submitted to the office of the undersigned <strong>on or before</strong>
                                </span>
                                <span className="text">
                                    <Calendar datesubChange={(dateValue) => this.props.datesubChange(dateValue)}/>
                                </span>
                                <span className="text">The envelope containing the Quotation must be clearly marked
                                    <strong>“Quotation for Supply of
                                        {this.props.RFQ.title}” </strong> and <strong>DO NOT OPEN BEFORE</strong>
                                    ................................... Quotations received later than the time
                                    specified here in shall not be accepted.
                                </span>
                            </div>


                            <p className="text">
                                7. Quotations received by fax or through electronic mail shall be
                                sealed-enveloped by the Procuring Entity duly marked as stated in <strong>
                                Para 7 </strong> above
                                and, all Quotations thus received shall be sent to the Evaluation Committee
                                for
                                evaluation, without opening, by the same date of closing the Quotation.
                            </p>

                            <p className="text">
                                8. The Procuring Entity may extend the deadline for submission of Quotations
                                on
                                justifiably acceptable grounds duly recorded subject to threshold of ten
                                (10)
                                days pursuant to Rule 71 (4) of the Public Procurement Rules, 2008.
                            </p>

                            <p className="text">
                                9. All Quotations must be valid for a period of at least <strong> 20
                                days </strong> from the
                                closing date of the Quotation.
                            </p>

                            <p className="text">
                                10. No public opening of Quotations received by the closing date shall be
                                held.
                            </p>

                            <p className="text">
                                11. Quotationer’s rates or prices shall be inclusive of profit and overhead
                                and,
                                all kinds of taxes, duties, fees, levies, and other charges to be paid under
                                the
                                Applicable Law, if the Contract is awarded.
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
        );
    }
}