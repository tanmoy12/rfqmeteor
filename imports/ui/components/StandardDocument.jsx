import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";

import TableStandard from "./TableStandard";

class StandardDocument extends Component {
    constructor(props) {
        super(props);

        var pro= [];
        this.props.chahida.details.map(function (product) {
            var Item = {
                id: product.id,
                item_no: product.item_no,
                desc: product.desc,
                spec: "Pack size: " + product.unit,
                making: "To Be Mentioned",
                qty: product.qty
            }
            pro.push(Item);
        });

        this.state = {
            RFQno: "",
            products: pro
        }
    }
    getdatafromtable(products) {
        this.setState({
            products: products
        });


    }

    static convertNumberToWords(amount) {
        var words = [];
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        amount = amount.toString();
        var atemp = amount.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        var value;
        if (n_length <= 9) {
            var n_array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            var received_n_array = new Array();
            for (var i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
                n_array[i] = received_n_array[j];
            }
            for (var i = 0, j = 1; i < 9; i++, j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            value = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Lakhs ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        return words_string;
    }


    static dateToday() {
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
        return <p id="datetodaystand"><strong>Date : {dateshow}</strong></p>;
    }

    RFQnoChange(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        this.setState({
            RFQno: item.value
        })
    }

    genTable() {
        var that = this;
        return (
            this.props.chahida.details.map(function (detailsrow) {
                return (
                    <tr key={detailsrow.id}>
                        <td className="col-md-1 text-center">{detailsrow.item_no}</td>
                        <td className="col-md-4 text-left">{detailsrow.desc}</td>
                        <td className="col-md-2 text-right">{detailsrow.unit}</td>
                        <td className="col-md-1 text-right">{detailsrow.qty}</td>
                        <td className="col-md-2 text-right"></td>
                        <td className="col-md-2 text-right"></td>
                        <td className="col-md-2 text-right"></td>
                        <td> DRiCM,BCSIR</td>
                    </tr>

                );
            })
        )
    }
    handleCreate(e){
        e.preventDefault();
        var productbool= true;
        if (this.state.RFQno) {
            this.state.products.map(function (product) {
                if (product.spec && product.making) {

                } else {
                    productbool = false;
                }
            });
            if (productbool) {
                var StandardForm = {
                    RFQ_no: this.state.RFQno,
                    standard_details: this.state.products,

                };
                console.log(StandardForm);
                StandardDocuments.insert(StandardForm, function (err, res) {
                    if (err) Bert.alert('Unknown Error1!!', 'danger', 'growl-top-right');
                    else {
                        console.log(res);
                        /*
                        var RFQDetailsForm = {
                            chahida_id: res,
                            title: title,
                            estimate: that.state.estimate
                        };
                        RFQDetails.insert(RFQDetailsForm, function (err, res) {
                            if (err) Bert.alert('Unknown Error2!!', 'danger', 'growl-top-right');
                            else {
                                var Rfqid = res;
                                var NotificationForm = {
                                    from_id : Meteor.userId(),
                                    to_id: ScOff,
                                    type: 1,
                                    title: title,
                                    RFQ_id: Rfqid
                                };
                                NotificationsSchema.validate(NotificationForm);
                                Notifications.insert(NotificationForm, function (err, res) {
                                    if (err) Bert.alert('Unknown Error3!!', 'danger', 'growl-top-right');
                                    else {
                                        FlowRouter.go('/Note/' + Rfqid);
                                    }
                                })
                            }
                        });
                        */
                    }
                })
            } else {
                Bert.alert('Please Fill up Table details!!', 'danger', 'growl-top-right');
            }
        } else {
            Bert.alert('Please Fill up all Details!!', 'danger', 'growl-top-right');
        }
    }

    render() {
        if (this.props.RFQ && this.props.chahida) {
            return (
                <div className="container">
                    <div className="row">

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
                                                        <input onChange={this.RFQnoChange.bind(this)}
                                                               ref="sutrono" placeholder="RFQ NO" name="sutrono"
                                                               type="text"/>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            {StandardDocument.dateToday()}
                                        </div>
                                        <div id="input" className="pull-right">
                                            <input/>

                                        </div>
                                    </div>

                                    <div id="text-stnd" className="text-left">
                                        TO <br/>
                                        ...................................................... <br/>
                                        ...................................................... <br/>
                                        ...................................................... <br/>

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


                                        <p className="text">
                                            6. Quotation in a sealed envelope or by fax or through electronic mail shall
                                            be
                                            submitted to the office of the undersigned
                                            ............................................................... . The
                                            envelope containing the Quotation must be clearly marked <strong>“Quotation
                                            for
                                            Supply
                                            of </strong> ..........................” and <strong>DO NOT OPEN </strong>
                                            before
                                            ................................... Quotations received later than the time
                                            specified herein shall not be accepted.
                                        </p>

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
                                    <p className="text text-left">
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
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
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div id="StandardJumbo" className="col-md-9 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header">
                                        <img src="img/logo.png" className="center-block"/>
                                        <h2> Designated Reference Institute for Chemical Measurements (DRiCM)</h2>
                                        <h3> Bangladesh Council of Scientific & Industrial Research (BCSIR) </h3>
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
                                                <strong>RFQ NO : </strong> {this.state.RFQno}
                                            </div>


                                        </div>
                                        <div className="col-md-6 text-right">
                                            {StandardDocument.dateToday()}
                                        </div>
                                        <div className="input pull-right">
                                            <input/>

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
                        </div>

                    </div>


                    <div className="row">
                        <div id="StandardJumbo" className="col-md-9 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header">
                                        <img src="img/logo.png" className="center-block"/>
                                        <h2> Designated Reference Institute for Chemical Measurements (DRiCM)</h2>
                                        <h3> Bangladesh Council of Scientific & Industrial Research (BCSIR) </h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <p id="text-stnd">
                                                <strong>Use Price Schedule for {this.props.RFQ.title}</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="text-left">
                                                <strong>RFQ NO : </strong> {this.state.RFQno}
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            {StandardDocument.dateToday()}
                                        </div>
                                        <div id="input" className="pull-right" >
                                            <input/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table table-bordered table-responsive">
                                <table id="customers" className="table">

                                    <thead>
                                    <tr>
                                        <th rowSpan="2">Item No</th>
                                        <th rowSpan="2">Description of Items</th>
                                        <th rowSpan="2">Unit of Measurement</th>
                                        <th rowSpan="2">Qty</th>
                                        <th colSpan="2" scope="colgroup">Unit rate or price</th>
                                        <th rowSpan="1" colSpan="1" scope="colgroup">Total amount</th>
                                        <th rowSpan="2">Destination <br/> for <br/>Delivery of <br/> Goods</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">In figures</th>
                                        <th scope="col"> In words</th>
                                        <th scope="col"> In figures/inwords</th>

                                    </tr>
                                    {this.genTable()}

                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td colSpan="5" rowSpan="2" scope="colgroup" className="text-center"><strong>Total
                                            Amount for Supply of Goods and related services <br/>
                                            (inclusive of VAT and all applicable taxes; see Note 2 below) </strong></td>

                                        <td scope="colgroup">In figures</td>
                                        <td ></td>

                                        <td rowSpan="1"></td>
                                    </tr>

                                    <tr>
                                        <td scope="colgroup">In Words</td>
                                        <td ></td>

                                        <td rowSpan="1"></td>
                                    </tr>

                                    <tr>
                                        <td colSpan="3" scope="colgroup" className="text-left"> Goods to be supplied
                                            to
                                        </td>

                                        <td colSpan="9" scope="colgroup" className="text-center"> [insert destination of
                                            Goods]
                                        </td>

                                    </tr>

                                    <tr>
                                        <td colSpan="3" scope="colgroup" className="text-left"> Total Amount in taka
                                            (inwords)
                                        </td>

                                        <td colSpan="9" scope="colgroup" className="text-center"> [enter the Total
                                            Amount as
                                            in Col.8 above for the delivery of Goods and related services].
                                        </td>

                                    </tr>

                                    <tr>
                                        <td colSpan="3" scope="colgroup" className="text-left"> Delivery Offered</td>

                                        <td colSpan="9" scope="colgroup" className="text-center"> [insert weeks/days]
                                            from
                                            date of issuing the Purchase Order]
                                        </td>

                                    </tr>

                                    <tr>
                                        <td colSpan="3" scope="colgroup" className="text-left"> Warranty Provided</td>

                                        <td colSpan="9" scope="colgroup" className="text-center"> [insert weeks/months
                                            from
                                            date of completion of the delivery; state none if not applicable]
                                        </td>

                                    </tr>


                                    </tbody>

                                </table>


                            </div>

                            <p className="text"><strong>[insert number] number corrections made by me/us have been duly
                                initialed
                                in this Price Schedule. My/Our Offer is valid
                                until dd/mm/yy [insert Quotation Validity date]. </strong></p>

                            <div className="table table-bordered table-responsive">
                                <table id="customers" className="table">
                                    <tbody>
                                    <tr>
                                        <td colSpan="4" scope="colgroup" className="text-center"><strong>
                                            <br/>
                                            <br/>
                                            <br/>Signature
                                            of Quotationer with Seal </strong></td>

                                        <td colSpan="8" rowSpan="2" scope="colgroup">
                                            <br/>
                                            <br/>
                                            <br/>DATE:given date
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colSpan="4" scope="colgroup">Name of Quotationer</td>
                                    </tr>


                                    </tbody>

                                </table>


                            </div>
                            <p className="text">
                                <strong> Note: <br/>
                                    1. Col. 1, 2, 3, 4 and 8 to be filled in by the Procuring Entity and Col. 5, 6 & 7
                                    by the Quotationer.
                                    <br/>
                                    <br/> 2. Rates or Prices shall include profit and overhead and, all kinds of taxes,
                                    duties, fees, levies, and other charges earlier paid or to be paid under the
                                    Applicable Law, if the Contract is awarded; including transportation, insurance etc.
                                    whatsoever up to the point of delivery of Goods and related services in all respects
                                    to the satisfaction of the Procuring Entity.
                                </strong>
                            </p>

                        </div>
                    </div>

                    <div className="row">
                        <div id="StandardJumbo" className="col-md-9 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header">
                                        <img src="img/logo.png" className="center-block"/>
                                        <h2> Designated Reference Institute for Chemical Measurements (DRiCM)</h2>
                                        <h3> Bangladesh Council of Scientific & Industrial Research (BCSIR) </h3>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <p id="text-stnd">
                                                <strong>Technical Specification of Chemicals</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="text-left">
                                                <strong>RFQ NO : </strong> {this.state.RFQno}
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            {StandardDocument.dateToday()}
                                        </div>
                                        <div id="input" className="pull-right" >
                                            <input/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <TableStandard data={this.state.products}
                                               sendData= {(products) => this.getdatafromtable(products) }/>
                            </div>

                            <p className="text">
                                I/We declare to supply Goods and related services offered by me/us fully in compliance
                                with the Technical Specifications and Standards mentioned hereinabove.

                            </p>

                            <div className="table table-bordered table-responsive">
                                <table id="customers" className="table">
                                    <tbody>
                                    <tr>
                                        <td colSpan="4" scope="colgroup" className="text-center"><strong>
                                            <br/>
                                            <br/>
                                            <br/>Signature
                                            of Quotationer with Seal </strong></td>

                                        <td colSpan="8" rowSpan="2" scope="colgroup">
                                            <br/>
                                            <br/>
                                            <br/>DATE:given date
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colSpan="4" scope="colgroup">Name of Quotationer</td>
                                    </tr>

                                    </tbody>

                                </table>


                            </div>
                            <p className="text">
                                <strong> Note: <br/>
                                    1. Col. 1, 2, 3, 4 and 8 to be filled in by the Procuring Entity and Col. 5, 6 & 7
                                    by the Quotationer.
                                    <br/>
                                    <br/> 2. Specifications are to be filled in by the Procuring Entity. A set of
                                    precise and clear specifications is a pre-requisite for Quotations to respond
                                    realistically and competitively to the requirements of the Procuring Entity. In the
                                    context of competitive Quotations, the specifications shall be prepared to permit
                                    the widest possible competition and, at the same time, present a clear statement of
                                    the required standards of workmanship, materials, and performance of the Goods and
                                    related services to be procured. The specifications should require that all items,
                                    materials and accessories to be included or incorporated in the Goods be new, unused
                                    and of most recent or current models, and that they include or incorporate all
                                    recent improvements in design and materials.
                                    <br/>
                                    <br/> 3. Technical Specifications of the Goods and related services shall be in
                                    compliance with the requirements of the Procuring Entity specified in this document.
                                    Quotationer is required to mention make/model (as applicable) of the Goods offered
                                    and must attach the appropriate original printed (if not available copied)
                                    literature/brochures for the listed items.
                                </strong>
                            </p>
                            <input onClick={this.handleCreate.bind(this)} type="submit" name="login-submit"
                                   id="submit-all"
                                   className="btn btn-primary" value="FORWARD"/>
                        </div>
                    </div>

                </div>





            )
                ;
        }
        else {
            return (
                <div>
                    Loading
                </div>
            )
        }
    }
}


StandardDocument.propTypes = {
    RFQ: PropTypes.object,
    chahida: PropTypes.object
};

export default createContainer(props => {
    Meteor.subscribe('standards');
    var RFQ = RFQDetails.findOne(props.id);
    var chahida;
    if (RFQ) {
        chahida = Chahida_Potro.findOne(RFQ.chahida_id);
    }
    return {
        RFQ: RFQDetails.findOne(props.id),
        chahida: chahida
    };
}, StandardDocument);

