import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";

import TableApply from './TableApply';

export default class StandardDocumentApply4 extends Component {
    constructor(props) {
        super(props);


        this.state = {
            signed: false,
            date: '................'
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
                    that.props.getSign(true);
                    that.setState({
                        signed: true,
                        date: that.datefromcreate(new Date())
                    })
                }
                else {
                    Bert.alert('Incorrect Password!!', 'danger', 'growl-top-right');
                }
            });
        }
    }


    render(){
        var signBlock;
        let link='';
        if(Meteor.user()) {
            const cursor = ImagesCol.findOne({_id: Meteor.user().profile.SealPic});
            if (cursor) {
                link = cursor.link();
            }
        }
        if (this.state.signed) {
            signBlock =
                <div className="col-md-12 center-block">
                    <img id="signPic" src={link}  alt="User Image"/>
                    <p id="signLabel"><strong>Signature
                        of Quotationer with Seal</strong></p>
                </div>
        } else {
            signBlock =
                <div className="col-md-12 center-block form-group">
                    <div id="signblock" className="col-md-12 form-style-4">
                        <input onKeyPress={this.passwordcheck.bind(this)} type="password" name="password" ref="password"
                               placeholder="Password"/><br/>
                    </div>
                    <div>
                        <p id="signLabel"><strong>Signature
                            of Quotationer with Seal</strong></p>
                    </div>

                </div>
        }

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
                <TableApply data={this.props.products}
                            sendData={this.props.sendData}
                            sendDestination={this.props.sendDestination}
                            senddelivery={this.props.senddelivery}
                            sendwarranty={this.props.sendwarranty}
                />

                <p className="text"><strong>[insert number] number corrections made by me/us have been duly
                    initialed
                    in this Price Schedule. My/Our Offer is valid
                    until dd/mm/yy [insert Quotation Validity date]. </strong></p>

                <div className="table table-bordered table-responsive">
                    <table id="customers" className="table">
                        <tbody>
                        <tr>
                            <td colSpan="4" scope="colgroup" className="text-center">
                                {signBlock}
                            </td>
                            <td colSpan="8" rowSpan="2" scope="colgroup">
                                <br/>
                                <br/>
                                <br/>Date: {this.state.date}
                            </td>
                        </tr>
                        <tr>
                            <td className="form-style-4" colSpan="4" scope="colgroup">
                                <strong>{Meteor.user().profile.name}</strong>
                            </td>
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