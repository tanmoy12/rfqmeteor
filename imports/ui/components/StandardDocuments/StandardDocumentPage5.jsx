import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import TableStandard from "../TableStandard";

export default class StandardDocumentPage5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: this.props.products
        }
    }

    getdatafromtable(products) {

        this.props.productChange(products);
    }



    render() {
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
                                <p id="text-stnd">
                                    <strong>Technical Specification of {this.props.RFQ.chahida.title}</strong>
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
                                    <strong>RFQ NO :  {this.props.RFQno} </strong>
                                </div>
                            </div>
                            <div className="col-md-6 text-right">
                                {this.props.dateToday()}
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <TableStandard data={this.props.products}
                                   sendData={(products) => this.getdatafromtable(products) }/>
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
                <div>
                    <hr/>
                    <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                    <h4>Tel : 02 9671830, 01715032057</h4>
                </div>
            </div>
        );
    }
}