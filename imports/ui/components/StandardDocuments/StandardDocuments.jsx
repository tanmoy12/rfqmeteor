import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import StandardDocumentPage1 from "./StandardDocumentPage1";
import StandardDocumentPage2 from "./StandardDocumentPage2";
import StandardDocumentPage3 from "./StandardDocumentPageThree";
import StandardDocumentPage4 from "./StandardDocumentPage4";
import StandardDocumentPage5 from "./StandardDocumentPage5";
import SideBar from "../SideBar";

export default class StandardDocuments extends Component {
    constructor(props) {
        super(props);
        var pro = [];
        this.props.RFQ.chahida.details.map(function (detail) {
            pro.push({
                id: detail.id,
                item_no: detail.item_no,
                desc: detail.desc,
                spec: '\nPack size: ' + detail.unit,
                making: 'To be mentioned',
                qty: detail.qty
            });
        });

        this.state = {
            RFQno: "",
            products: pro,
            pageno: 1,
            datesub: '',
            formatdate: ' ....................... '
        }
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

    datesubChange(dateValue, formatDate) {
        this.setState({
            datesub: dateValue,
            formatdate: formatDate
        })
    }

    productChange(products) {
        this.setState({
            products: products
        })
    }

    handleForward(value) {
        var productbool = true;
        var that = this;
        if (this.state.RFQno && value && this.state.datesub) {
            this.state.products.map(function (product) {
                if (product.spec && product.making) {

                } else {
                    productbool = false;
                }
            });
            if (productbool) {
                var StandardForm = {
                    step_no: 4,
                    'standard.apply_date': this.state.datesub,
                    'standard.RFQ_no': this.state.RFQno,
                    'standard.standard_details': this.state.products,
                    'standard.createdAt' : new Date(),
                    'standard.initiator.signed': true,
                    'standard.initiator.sign_date': new Date(),
                    'standard.accountant.user_id': this.props.RFQ.chahida.accountant.user_id,
                    'standard.accountant.name': this.props.RFQ.chahida.accountant.name,
                    'standard.accountant.pic': this.props.RFQ.chahida.accountant.pic

                };

                RFQDetails.update(
                    that.props.RFQ._id,
                    {
                        $set: StandardForm
                    }, function (err, res) {
                        if (err) {
                            console.log(err);
                            Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                        }
                        else {
                            FlowRouter.go('/Note/' + that.props.RFQ._id);
                        }
                    });

            } else {
                Bert.alert('Please Fill up Table details!!', 'danger', 'growl-top-right');
            }
        } else {
            Bert.alert('Please Fill up all Details!!', 'danger', 'growl-top-right');
        }
    }

    render() {
        if (this.props.RFQ && this.props.Acc) {
            var forward_to;
            forward_to = {
                toWhom: "হিসাবরক্ষক",
                dropdownList: this.props.Acc,
                sendSelect: (value) => this.handleForward(value)
            };

            var side = <SideBar forwardTo={forward_to}
                                goToNote={'/Note/' + this.props.RFQ._id}/>;
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {side}
                        </div>
                        <div className="col-md-8">
                            <div className="col-md-12">
                                <StandardDocumentPage1 RFQ={this.props.RFQ} RFQno={this.state.RFQno}
                                                       RFQnoChange={this.RFQnoChange.bind(this)}
                                                       datesubChange={(dateValue, formatDate) => this.datesubChange(dateValue, formatDate)}
                                                       dateToday={this.dateToday}
                                                       dateSelect={(this.state.formatdate)}/>
                            </div>
                            <div className="col-md-12">
                                <StandardDocumentPage2 RFQ={this.props.RFQ}/>
                            </div>
                            <div className="col-md-12">
                                <StandardDocumentPage3 RFQ={this.props.RFQ} RFQno={this.state.RFQno}
                                                       dateToday={this.dateToday}/>
                            </div>
                            <div className="col-md-12">
                                <StandardDocumentPage4 RFQ={this.props.RFQ} RFQno={this.state.RFQno}
                                                       dateToday={this.dateToday}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentPage5 RFQ={this.props.RFQ} RFQno={this.state.RFQno}
                                                       dateToday={this.dateToday} products={this.state.products}
                                                       productChange={(products) => this.productChange(products)}/>

                            </div>

                        </div>

                    </div>

                </div>
            );
        }
        else {
            return (
                <div>
                    Loading..
                </div>
            )
        }
    }
}

