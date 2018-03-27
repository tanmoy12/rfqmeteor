import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";

export default class StandardApplyLoad4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

    genSignBlock(signfor, user) {
        const cursor = ImagesCol.findOne({_id: user.seal});
        var link = '';
        if (cursor) {
            link = cursor.link();
        }
        if (user.signed) {
            return (
                <div className="col-md-12 center-block">
                    <img id="signPic" src={link} alt="User Image"/>
                    <p id="signLabel"><strong>Signature
                        of Quotationer with Seal</strong></p>
                </div>
            )
        }
        else {
            return (
                <div className="col-md-12 center-block">
                    <hr id="unsignhr" style={{width: "100%"}}/>
                    <p id="signTag"><strong>{signfor} </strong></p>
                </div>
            )
        }
    }

    genTable() {
        return (
            this.props.stan.StandardApply.map(function (detailsrow) {
                return (
                    <tr key={detailsrow.id}>
                        <td className="col-md-1 text-center">{detailsrow.item_no}</td>
                        <td className="col-md-4 text-left">{detailsrow.desc}</td>
                        <td className="col-md-2 text-right">{detailsrow.unit}</td>
                        <td className="col-md-1 text-right">{detailsrow.qty}</td>
                        <td className="col-md-2 text-right">{detailsrow.rate}</td>
                        <td className="col-md-2 text-right">{detailsrow.total}</td>
                        <td> DRiCM,BCSIR</td>
                    </tr>

                );
            })
        )
    }

    convertNumberToWords(amount) {
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


    render(){
        //console.log(this.props.stan);
        return(
            <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                <div className="row">
                    <div className="col-md-12">
                        {this.props.head}
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
                                    <strong>RFQ NO : {this.props.RFQ.standard.RFQ_no} </strong>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p id="dateload"><strong>DATE
                                    : {this.datefromcreate(this.props.RFQ.standard.createdAt)}</strong></p>
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
                            <th rowSpan="1" colSpan="1" scope="colgroup">Unit rate or price</th>
                            <th rowSpan="1" colSpan="1" scope="colgroup">Total amount</th>
                            <th rowSpan="2">Destination <br/> for <br/>Delivery of <br/> Goods</th>
                        </tr>
                        <tr>
                            <th scope="col">In figures</th>
                            <th scope="col"> In figures/inwords</th>

                        </tr>
                        {this.genTable()}

                        </thead>
                        <tbody>
                        <tr>
                            <td colSpan="4" rowSpan="2" scope="colgroup" className="text-center"><strong>Total
                                Amount for Supply of Goods and related services <br/>
                                (inclusive of VAT and all applicable taxes; see Note 2 below) </strong></td>

                            <td scope="colgroup">In figures</td>
                            <td rowSpan="1" colSpan="2" className="text-right">{this.props.stan.amount}</td>
                        </tr>

                        <tr>
                            <td scope="colgroup">In Words</td>
                            <td rowSpan="1" colSpan="2" className="text-right">{this.convertNumberToWords(this.props.stan.amount)}</td>
                        </tr>

                        <tr>
                            <td colSpan="3" scope="colgroup" className="text-left"> Goods to be supplied
                                to
                            </td>

                            <td colSpan="9" scope="colgroup" className="text-center">
                                {this.props.stan.destination}
                            </td>

                        </tr>

                        <tr>
                            <td colSpan="3" scope="colgroup" className="text-left"> Total Amount in taka

                            </td>

                            <td colSpan="9" scope="colgroup" className="text-center">
                                {this.convertNumberToWords(this.props.stan.amount)}
                            </td>

                        </tr>

                        <tr>
                            <td colSpan="3" scope="colgroup" className="text-left"> Delivery Offered</td>

                            <td colSpan="9" scope="colgroup" className="text-center"> {this.props.stan.delivery}
                            </td>

                        </tr>
                        <tr>
                            <td colSpan="3" scope="colgroup" className="text-left"> Warranty Provided</td>

                            <td colSpan="9" scope="colgroup" className="text-center"> {this.props.stan.warranty}
                            </td>

                        </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text"><strong>[insert number] number corrections made by me/us have been duly
                    initialed
                    in this Price Schedule. My/Our Offer is valid
                    until . </strong></p>

                <div className="table table-bordered table-responsive">
                    <table id="customers" className="table">
                        <tbody>
                        <tr>
                            <td colSpan="4" scope="colgroup" className="text-center">
                                {this.genSignBlock('Signature of Quotationer with Seal', this.props.stan.company)}
                            </td>

                            <td colSpan="8" rowSpan="2" scope="colgroup">
                                <br/>
                                <br/>
                                <br/>DATE:{this.datefromcreate(this.props.stan.company.sign_date)}
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
                {this.props.foot}
            </div>
        );
    }
}