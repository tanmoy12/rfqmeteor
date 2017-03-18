import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import TableStandard from "../TableStandard";

export default class StandardDocumentLoad5 extends Component {
    constructor(props) {
        super(props);
        var pro=[];
        this.props.chahida.details.map(function (detail) {
            pro.push({
                id: detail.id,
                item_no: detail.item_no,
                desc: detail.desc,
                spec: 'Pack size: '+ detail.unit,
                making: 'To be mentioned',
                qty: detail.qty
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
    handleCreate(e) {
        e.preventDefault();
        var productbool = true;
        if (this.props.RFQno) {
            this.state.products.map(function (product) {
                if (product.spec && product.making) {

                } else {
                    productbool = false;
                }
            });
            if (productbool) {
                var StandardForm = {
                    RFQ_no: this.props.RFQno,
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
                                    <strong>RFQ NO : </strong> {this.props.RFQno}
                                </div>
                            </div>
                            <div className="col-md-6 text-right">
                                {this.props.dateToday()}
                            </div>
                            <div id="input" className="pull-right">
                                <input/>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <TableStandard data={this.state.products}
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
                <input onClick={this.handleCreate.bind(this)} type="submit" name="login-submit"
                       id="submit-all"
                       className="btn btn-primary" value="FORWARD"/>
            </div>
        );
    }
}