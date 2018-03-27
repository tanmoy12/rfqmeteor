import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";
import SideBar from "./SideBar";

class WO extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
        this.state = {
            signed: false
        };
    }

    dateToday() {
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
        return <p id="datetoday"><strong>Date : {dateshow}</strong></p>;
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

    addDays(someDate) {
        var numberOfDaysToAdd = 20;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

        return someDate;
    }

    genSignBlock(signfor, user) {
        const cursor = ImagesCol.findOne({_id: user.pic});
        var link = '';
        if (cursor) {
            link = cursor.link();
        }
        if (user.signed) {
            return (
                <div className="col-md-6 center-block">
                    <img id="signPic" src={link} className="img-circle" alt="User Image"/>
                    <hr id="signhr" style={{width: "100%"}}/>
                    <p id="signTag"><strong>{signfor}</strong></p>
                </div>
            )
        }
        else if (user.user_id && !user.signed) {
            if (Meteor.userId() == user.user_id) {
                if (this.state.signed) {
                    return (
                        <div className="col-md-6 center-block">
                            <img id="signPic" src={link} className="img-circle" alt="User Image"/>

                            <hr id="signhr" style={{width: "100%"}}/>
                            <p id="signTag"><strong>{signfor}</strong></p>
                        </div>
                    )
                } else {
                    return (
                        <div className="col-md-6 center-block form-group">
                            <div id="signblock" className="form-style-4">
                                <input style={{float: "center"}} onKeyPress={this.passwordcheck.bind(this)}
                                       type="password" name="password"
                                       ref="password"
                                       placeholder="Password"/><br/>
                            </div>
                            <hr id="signhr" style={{width: "100%"}}/>
                        </div>
                    )
                }
            }
            else {
                return (
                    <div className="col-md-6 center-block">
                        <hr id="unsignhr" style={{width: "100%"}}/>
                        <p id="signTag"><strong>{signfor} </strong></p>
                    </div>
                )
            }
        }
        else {
            return (
                <div className="col-md-6 center-block">
                    <hr id="unsignhr" style={{width: "100%"}}/>
                    <p id="signTag"><strong>{signfor} </strong></p>
                </div>
            )
        }
    }

    genSignBlocked(signfor, user) {
        const cursor = ImagesCol.findOne({_id: user.pic});
        var link = '';
        if (cursor) {
            link = cursor.link();
        }
        if (user.signed) {
            return (
                <div className="col-md-6 center-block">
                    <img id="signPic" src={link} className="img-circle" alt="User Image"/>

                    <hr id="signhr" style={{width: "100%"}}/>
                    <p id="signTag"><strong>{signfor}</strong></p>
                </div>
            )
        }
        else if (user.user_id && !user.signed) {
            if (Meteor.userId() == user.user_id) {
                if (this.state.signed) {
                    return (
                        <div className="col-md-6 center-block">
                            <img id="signPic" src={link} className="img-circle" alt="User Image"/>

                            <hr id="signhr" style={{width: "100%"}}/>
                            <p id="signTag"><strong>{signfor}</strong></p>
                        </div>
                    )
                } else {
                    return (
                        <div className="col-md-6 center-block">
                            <hr id="unsignhr" style={{width: "100%"}}/>
                            <p id="signTag"><strong>{signfor} </strong></p>
                        </div>
                    )
                }
            }
            else {
                return (
                    <div className="col-md-6 center-block">
                        <hr id="unsignhr" style={{width: "100%"}}/>
                        <p id="signTag"><strong>{signfor} </strong></p>
                    </div>
                )
            }
        }
        else {
            return (
                <div className="col-md-6 center-block">
                    <hr id="unsignhr" style={{width: "100%"}}/>
                    <p id="signTag"><strong>{signfor} </strong></p>
                </div>
            )
        }
    }

    handleForward(value) {
        //console.log(value);
        var that = this;
        var orderno;
        if (this.props.RFQ_details.step_no == 12) {
            this.state.signed = true;
            orderno = ReactDOM.findDOMNode(this.refs.orderno).value.trim();
        }
        if (this.props.RFQ_details.step_no == 13){
            orderno=true;
        }


        if (this.state.signed && orderno) {
            var StandardForm;
            if (this.props.RFQ_details.step_no == 12) {
                StandardForm = {
                    step_no: 13,
                    'purchase.order_no': orderno,
                    'purchase.createdAt': new Date(),
                    'purchase.initiator.signed': true,
                    'purchase.initiator.sign_date': new Date(),
                    'purchase.director.user_id': this.props.RFQ_details.chahida.director.user_id,
                    'purchase.director.name': this.props.RFQ_details.chahida.director.name,
                    'purchase.director.pic': this.props.RFQ_details.chahida.director.pic
                };
            }
            else if (this.props.RFQ_details.step_no == 13) {
                StandardForm = {
                    step_no: 14,
                    'purchase.director.signed': true,
                    'purchase.director.sign_date': new Date(),

                    'step1516accountant.user_id': this.props.RFQ_details.chahida.accountant.user_id,
                    'step1516accountant.name': this.props.RFQ_details.chahida.accountant.name,
                    'step1516accountant.pic': this.props.RFQ_details.chahida.accountant.pic
                };
            }

            RFQDetails.update(
                that.props.RFQ_details._id,
                {
                    $set: StandardForm
                }, function (err, res) {
                    if (err) {
                        console.log(err);
                        Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                    }
                    else {
                        FlowRouter.go('/Note/' + that.props.RFQ_details._id);
                    }
                });
        } else {
            Bert.alert('Please Fill Up All Details!!', 'danger', 'growl-top-right');
        }
    }

    passwordcheck(e) {
        if (e.key === 'Enter') {
            var that = this;
            var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
            var digest = Package.sha.SHA256(password);
            Meteor.call('checkPassword', digest, function (err, result) {
                if (result) {
                    that.setState({
                        signed: true
                    })
                }
                else {
                    Bert.alert('Incorrect Password!!', 'danger', 'growl-top-right');
                }
            });
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

    render() {
        if (this.props.RFQ_details && this.props.Dir) {
            var viewApp, goToNote;
            var forward_to, dropdownList, date;
            var order = <div className="col-md-12 pull-left">
                            <span className="pull-left"><strong>Purchase order no: <b>{this.props.RFQ_details.purchase.order_no}</b></strong></span>
                        </div>
            if (this.props.RFQ_details.step_no == 12 && Meteor.userId() == this.props.RFQ_details.purchase.initiator.user_id) {
                forward_to = {
                    toWhom: "অনুমোদনকারী",
                    dropdownList: this.props.Dir,
                    sendSelect: (value) => this.handleForward(value)
                };
                date = new Date();
                order = <div className="col-md-12 form-style-4">
                            <label htmlFor="orderno">
                            <span>Purchase order No :</span>
                            <input style={{
                                    width: "60%"
                                }} ref="orderno" placeholder="Order No." name="orderno" type="text"/>
                            </label>
                        </div>
            }
            var clickFunc;
            if (this.props.RFQ_details.step_no == 13 && Meteor.userId() == this.props.RFQ_details.purchase.director.user_id) {
                clickFunc = {
                    name: 'Send to Company',
                    sendSelect: (value) => this.handleForward(value)
                };
            }
            if(this.props.RFQ_details.step_no > 12){
                date= this.props.RFQ_details.purchase.createdAt
            }
            if (Meteor.user().profile.tradelicenseno) {
                viewApp = "/StandardApplyLoad/" + this.props.RFQItem._id + "/" + Meteor.userId();
            }
            else if (Meteor.user().profile.designation) {
                goToNote = '/Note/' + this.props.RFQ_details._id;
            }
            return (
                <div className="container">
                    <div className="col-md-3">
                        <SideBar viewApp={viewApp} goToNote={goToNote} forwardTo={forward_to} clickFunc={clickFunc}/>
                    </div>
                    <div className="col-md-8">
                        <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-top col-md-12">
                                        <img src="/dricmlogo.jpg" className="center-block"/>
                                        <h3>Designated Reference Institute for Chemical Measurements (DRiCM) </h3>
                                        <h3>Bangladesh Council of Scientific & Industrial Research (BCSIR)</h3>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <h3>
                                            PURCHASE ORDER FOR THE SUPPLY OF GOODS
                                        </h3>
                                        <p>Supply of {this.props.RFQ_details.chahida.title}</p>
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="row">
                                                {order}
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <p id="dateload"><strong>DATE
                                                : {this.datefromcreate(date)}</strong></p>
                                        </div>
                                    </div>


                                    <div className="table table-bordered table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <td className="text-left"><strong>RFQ No:
                                                    {this.props.RFQ_details.standard.RFQ_no} </strong></td>
                                                <td className="text-left">
                                                    <strong>Date: {this.datefromcreate(this.props.RFQ_details.standard.createdAt)}</strong>
                                                </td>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td className="text-left">To: <br/>
                                                    <strong>{this.props.RFQ_details.minutes.company.name}</strong> <br/>
                                                    {this.props.RFQ_details.minutes.company.description}
                                                </td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td className="text-left"><strong>Delivery
                                                    Date: {this.datefromcreate(this.addDays(date))}</strong></td>
                                                <td className="text-left"><strong>Order Value:
                                                    TK. {this.convertNumberToWords(this.props.RFQ_details.minutes.amount)}/=</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" className="text-center"><strong>Delivery: As per Terms
                                                    and
                                                    Conditions</strong></td>
                                            </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                    <div>
                                        <p className="text">The Purchaser has accepted your Quotation
                                            dated
                                            <strong>{this.datefromcreate(this.props.RFQ_details.standard.createdAt)} </strong>
                                            for
                                            the supply of Goods and related services as listed below and requests that
                                            you supply the Goods and
                                            related services within the delivery date stated above, in the quantities
                                            and units in
                                            conformity with the Technical Specifications under the Terms and Conditions
                                            as annexed.
                                        </p>

                                    </div>

                                    <div className="table table-bordered table-responsive">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <td colSpan="2" className="text-center"><strong>ORDER ITEMS</strong>
                                                </td>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    Attached Certified photocopy of approved Priced Schedule for Goods
                                                    and
                                                    related services <br/>
                                                    Attached Certified photocopy of approved Technical Specification of
                                                    the
                                                    Goods Required <br/>
                                                    Attached Certified photocopy of Terms and Conditions
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-left"><strong>For the Purchaser</strong> <br/>
                                                    <div className="row">
                                                        {this.genSignBlock('', this.props.RFQ_details.purchase.director)}
                                                        <div className="col-md-6">

                                                        </div>
                                                    </div>
                                                    ({this.props.RFQ_details.chahida.director.name})<br/>
                                                    Project Director <br/>
                                                    “Establishment of Designated Reference Institute for Chemical
                                                    Measurements
                                                    Project” <br/>
                                                    BCSIR, Dr. Qudrat-i-Khuda Road, Dhanmondi, Dhaka-1205 <br/>
                                                    Phone No: 02 9671830, 01715032057, Fax No: 02 8613819 <br/>
                                                    <br/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-left" colSpan="2">
                                                    Date: {this.datefromcreate(this.props.RFQ_details.purchase.createdAt)}</td>
                                            </tr>
                                            </tbody>

                                        </table>

                                    </div>
                                    <div className="text-left">
                                        <p id="text-stnd"><strong>Attachments:</strong> As stated above
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

                        <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-top col-md-12">
                                        <img src="/dricmlogo.jpg" className="center-block"/>
                                        <h3>Designated Reference Institute for Chemical Measurements (DRiCM) </h3>
                                        <h3>Bangladesh Council of Scientific & Industrial Research (BCSIR)</h3>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <p>
                                            <strong> Terms and Conditions <br/>
                                                for <br/>
                                                Supply of Goods and Payment </strong>
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text">
                                            1. Terms and Conditions contained herein shall be binding upon both the
                                            Procuring
                                            Entity and the Supplier for the purpose of administration and management of
                                            this
                                            Contract.
                                        </p>
                                        <p className="text">
                                            2. Implementation and interpretation of these Terms and Conditions shall, in
                                            general, be under the purview of the Public Procurement Act, 2006 and the
                                            Public
                                            Procurement Rules, 2008.
                                        </p>

                                        <p className="text">
                                            3. The Supplier shall have to complete the delivery in all respects within
                                            20
                                            days
                                            of issuing the Purchase Order in conformity with the Terms and Conditions.
                                        </p>
                                        <p className="text">
                                            4. The Supplier shall be entitled to an extension of the Delivery Schedule
                                            if
                                            the
                                            Procuring Entity delays in receiving the Goods and related services or if
                                            Force
                                            Majeure situation occurs or for any other reasons acceptable to the
                                            Procuring
                                            Entity
                                            on justifiable grounds duly recorded.
                                        </p>
                                        <p className="text">
                                            5. All delivery under the Contract shall at all times be open to
                                            examination,
                                            inspection, measurements, testing, commissioning, and supervision of the
                                            Procuring
                                            Entity or his/her authorized representative.
                                        </p>
                                        <p className="text">
                                            6. The Procuring Entity shall check and verify the delivery made by the
                                            Supplier
                                            in
                                            conformity with the Technical Specifications and notify the Supplier of any
                                            Defects
                                            found.
                                        </p>
                                        <p className="text">
                                            7. If the Goods are found to be defective or otherwise not in accordance
                                            with
                                            the
                                            specifications, the Procuring Entity may reject the supplies by giving due
                                            notice to
                                            the Supplier, with reasons.
                                        </p>
                                        <p className="text">
                                            8. The Supplier shall be entirely responsible for payment of all taxes,
                                            duties,
                                            fees, and such other levies under the Applicable Law.
                                        </p>
                                        <p className="text">
                                            9. Notwithstanding any other practice, the payment shall be based on the
                                            actual
                                            delivery of goods on the basis of the quantity of each item of Goods in
                                            accordance
                                            with the Priced Schedule and Specifications. 100% of the Contract price of
                                            the
                                            Goods
                                            and related services shall be paid after submission and acceptance of the
                                            Delivery
                                            Chalan.
                                        </p>
                                        <p className="text">
                                            10. The Supplier’s rates or prices shall be inclusive of profit and overhead
                                            and,
                                            all kinds of taxes, duties, fees, levies, and other charges to be paid under
                                            the
                                            Applicable Law.
                                        </p>
                                        <p className="text">
                                            11. The total Contract Price is BD
                                            TK <strong>{this.props.RFQ_details.minutes.amount} /= </strong>
                                            ({this.convertNumberToWords(this.props.RFQ_details.minutes.amount)}).
                                        </p>

                                        <p className="text">
                                            12. The minimum Warranty Period of the Supplies shall be 12 months starting
                                            from
                                            the
                                            date of completion of delivery in the form of submission by the Supplier and
                                            acceptance by the Procuring Entity, of the Delivery Chalan.
                                        </p>

                                        <p className="text">
                                            13. The Supplier shall remain liable to fulfil the obligations pursuant to
                                            Rule
                                            40 (5) of the Public Procurement Rules, 2008.
                                        </p>

                                        <p className="text">
                                            14. The Supplier shall keep the Procurement Entity harmless and indemnify
                                            from
                                            any
                                            claim, loss of property or life to himself/herself, his/her workmen or
                                            staff,
                                            any
                                            staff of the Procurement Entity or any third party while delivering the
                                            Goods
                                            and
                                            related services.
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
                        <div id="chahidajumbo" className="col-md-12 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-top col-md-12">
                                        <img src="/dricmlogo.jpg" className="center-block"/>
                                        <h3>Designated Reference Institute for Chemical Measurements (DRiCM) </h3>
                                        <h3>Bangladesh Council of Scientific & Industrial Research (BCSIR)</h3>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div>
                                        <p className="text">
                                            15. Any claim arising out of delivery of Goods and related services shall be
                                            settled
                                            by the Supplier at his/her own cost and responsibility.
                                        </p>
                                        <p className="text">
                                            15. Any claim arising out of delivery of Goods and related services shall be
                                            settled
                                            by the Supplier at his/her own cost and responsibility.
                                        </p>

                                        <p className="text">
                                            16. Damage to the Goods during the Warranty Period shall be remedied by the
                                            Supplier
                                            at the Supplier’s own cost, if the damage arises from the supply and
                                            installation by
                                            the Supplier.
                                        </p>
                                        <p className="text">
                                            17. No modification to Scope of Supply and no Variations to the quantities
                                            ordered
                                            shall be permissible under any circumstances.
                                        </p>
                                        <p className="text">
                                            18. The Procuring Entity contracting shall amend the Contract incorporating
                                            required
                                            approved changes subsequently introduced to the original Terms and
                                            Conditions in
                                            line with Rules, where necessary.
                                        </p>
                                        <p className="text">
                                            19. The Procuring Entity may, by written Notice sent to the Supplier,
                                            terminate
                                            the
                                            Contract in whole or in part at any time, if the Supplier: <br/>
                                        </p>
                                        <p className="wo">
                                            a. fails to deliver Goods and related services as per Delivery Schedule and
                                            Specifications. <br/>
                                            b. in the judgement of the Procuring Entity, has engaged in any corrupt,
                                            fraudulent,
                                            collusive or coercive practices in competing for or in delivery of goods and
                                            related
                                            services. <br/>
                                            c. fails to perform any other obligation(s) under the Contract.
                                        </p>
                                        <p className="text">
                                            20. The Procuring Entity and the Supplier shall use their best efforts to
                                            settle
                                            amicably all possible disputes arising out of or in connection with this
                                            Contract or
                                            its interpretation.
                                        </p>
                                        <p className="text">
                                            21. The Supplier shall be subject to, and aware of provision on corruption,
                                            fraudulence, collusion and coercion in Section 64 of the Public Procurement
                                            Act,
                                            2006 and Rule 127 of the Public Procurement Rules, 2008.
                                        </p>
                                    </div>

                                    <div className="table table-responsive table-bordered">
                                        <table className="table">
                                            <thead>
                                            <tr>
                                                <td className="text-left">For the Purchaser:
                                                    <div className="row">
                                                        {this.genSignBlocked('', this.props.RFQ_details.purchase.director)}
                                                        <div className="col-md-6">

                                                        </div>
                                                    </div>
                                                    ({this.props.RFQ_details.chahida.director.name}) <br/>
                                                    Project Director <br/>
                                                    “Establishment of Designated Reference Institute for Chemical
                                                    Measurements
                                                    Project” <br/>
                                                    BCSIR, Dr. Qudrat-i-Khuda Road, Dhanmondi, Dhaka-1205 <br/>
                                                    Phone No: 02 9671830, 01715032057, Fax No: 02 8613819 <br/>
                                                </td>
                                                <td className="text-left">
                                                    For the Supplier:
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    Signature of the Supplier with name Designation


                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-left">
                                                    Date: {this.datefromcreate(date)}
                                                </td>
                                                <td className="text-left">
                                                    Date:
                                                </td>
                                            </tr>
                                            </thead>

                                        </table>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <hr/>
                                <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                                <h4>Tel : 02 9671830, 01715032057</h4>
                            </div>
                        </div>
                    </div>
                </div>


            );
        }
        else {
            return (
                <div>
                    Loading...
                </div>
            );
        }
    }
}


WO.propTypes = {
    RFQ_details: PropTypes.object
};

export default createContainer(props => {
    var RFQ = RFQDetails.findOne(props.id);
    var Acc, Dir;
    if (RFQ) {
        Acc = Meteor.users.find({_id: RFQ.chahida.accountant.user_id}).fetch();
        Dir = Meteor.users.find({_id: RFQ.chahida.director.user_id}).fetch();
    }
    return {
        RFQ_details: RFQ,
        Acc: Acc,
        Dir: Dir
    };
}, WO);
