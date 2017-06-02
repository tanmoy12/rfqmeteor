import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";

export default class StandardApplyLoad5 extends Component {
    constructor(props) {
        super(props);

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
            this.props.stan.StandardApply.map(function (detail) {
                    return (
                        <tr key={detail.id}>
                            <td className="col-md-1">{detail.item_no}</td>
                            <td className="col-md-3">{detail.desc}</td>
                            <td><textarea readOnly defaultValue={detail.spec} rows="4" cols="50"></textarea></td>
                            <td><textarea readOnly defaultValue={detail.making} rows="4" cols="50"></textarea></td>
                            <td className="col-md-2 text-center">{detail.qty}</td>
                        </tr>
                    )
                }
            )
        )
    }

    render() {
        return (
            <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                <div className="row">
                    <div className="col-md-12">
                        {this.props.head}
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
                                    <strong>RFQ NO : {this.props.RFQ.standard.RFQ_no}</strong>
                                </div>
                            </div>
                            <div className="col-md-6 text-right">
                                <p id="dateload"><strong>DATE
                                    : {this.datefromcreate(this.props.RFQ.standard.createdAt)}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="tabledesc" className="table">
                        <table id="customers" className="table table-responsive table-bordered table-condensed">

                            <thead>
                            <tr >
                                <th className="col-md-1">SL No</th>
                                <th className="col-md-3">Description of Items</th>
                                <th className="col-md-4">Full Technical Specification
                                    and Standards
                                </th>
                                <th className="col-md-2">Make and Origin</th>
                                <th className="col-md-2 text-center">Quantity</th>
                            </tr>

                            </thead>
                            <tbody>
                            {this.genTable()}
                            </tbody>
                        </table>
                        <br/><br/>

                    </div>
                </div>

                <p className="text">
                    I/We declare to supply Goods and related services offered by me/us fully in compliance
                    with the Technical Specifications and Standards mentioned hereinabove.

                </p>

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
                {this.props.foot}
            </div>
        );
    }
}