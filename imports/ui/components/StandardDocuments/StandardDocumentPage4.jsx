import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import TableStandard from "../TableStandard";

export default class StandardDocumentPage4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    genTable() {
        return (
            this.props.RFQ.chahida.details.map(function (detailsrow) {
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


    render(){
        return(
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
                                    <strong>RFQ NO : </strong> {this.props.RFQno}
                                </div>
                            </div>
                            <div className="col-md-6 text-right">
                                {this.props.dateToday()}
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
                <div>
                    <hr/>
                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                    <h4>Tel : 02 9671830, 01715032057</h4>
                </div>
            </div>
        );
    }
}