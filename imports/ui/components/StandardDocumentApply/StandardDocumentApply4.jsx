import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";

import TableApply from './TableApply';

export default class StandardDocumentApply4 extends Component {
    constructor(props) {
        super(props);

        var pro = [];
        this.props.RFQ.chahida.details.map(function (detail) {
            pro.push({
                id: detail.id,
                item_no: detail.item_no,
                rate: 0,
                desc: detail.desc,
                unit: detail.unit,
                qty: detail.qty,
                total: 0
            });
        });
        this.state = {
            products: pro
        }
    }

    getdatafromtable(products) {
        this.setState({
            products: products
        });
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


    render(){
        return(
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
                                    <strong>RFQ NO : </strong> {this.props.RFQ.standard.RFQ_no}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p id="dateload"><strong>DATE
                                    : {this.datefromcreate(this.props.RFQ.standard.createdAt)}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <TableApply data={this.state.products}
                            sendData={(products) => this.getdatafromtable(products) }/>
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