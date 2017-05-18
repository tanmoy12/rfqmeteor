import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import StandardDocumentApply1 from "./StandardDocumentApply1";
import StandardDocumentApply2 from "./StandardDocumentApply2";
import StandardDocumentApply3 from "./StandardDocumentApply3";
import StandardDocumentApply4 from "./StandardDocumentApply4";
import StandardDocumentApply5 from "./StandardDocumentApply5";
import SideBar from "../SideBar";

export default class StandardDocumentApply extends Component {
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
                total: 0,
                destination: 'DRiCM, BCSIR',
                spec: '',
                making: '',
            });
        });
        var i=0;
        this.props.RFQ.standard.standard_details.map(function (detail) {
                pro[i].spec= detail.spec;
                pro[i].making= detail.making;
                i++;
            }
        );
        //console.log(pro);

        this.state = {
            signed3: false,
            signed4: false,
            signed5: false,
            products: pro,
            estimate: 0,
            pageno: 1,
            destination: 'DRiCM,BCSIR',
            delivery: '',
            warranty: '',
            datesub: null
        }
    }

    handleProductTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var products = this.state.products;

        var newProducts = products.map(function (product) {
            for (var key in product) {
                //console.log(key);
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
            }
            return product;
        });

        //console.log(newProducts);
        this.setState({
            products: newProducts
        });

    };

    getdatafromtable(products, estimate) {
        this.setState({
            products: products,
            estimate: estimate
        });
    }

    getdestinationfromtable(destination) {
        this.setState({
            destination: destination
        });
    }

    getdeliveryfromtable(delivery) {
        this.setState({
            delivery: delivery
        });
    }

    getwarrantyfromtable(warranty) {
        this.setState({
            warranty: warranty
        });
    }

    getSign(value) {
        this.setState({
            signed3: value
        });
    }

    getSign4(value) {
        this.setState({
            signed4: value
        });
    }

    getSign5(value) {
        this.setState({
            signed5: value
        });
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



    handleApply(e) {
        var productbool = true;
        if (this.state.destination && this.state.warranty && this.state.delivery && this.state.estimate
            && this.state.signed3 && this.state.signed4 && this.state.signed5) {
            this.state.products.map(function (product) {
                if (product.rate && product.total) {

                } else {
                    productbool = false;
                }
            });
            if (productbool) {
                //console.log(this.state);
                var company = {
                    user_id: Meteor.userId(),
                    name: Meteor.user().profile.name,
                    pic: Meteor.user().profile.ProPic,
                    seal: Meteor.user().profile.SealPic,
                    address: Meteor.user().profile.description,
                    signed: true,
                    sign_date: new Date()
                };
                var standardApply= {
                    amount: this.state.estimate,
                    createdAt: new Date(),
                    company: company,
                    StandardApply: this.state.products,
                    destination: this.state.destination,
                    delivery: this.state.delivery,
                    warranty: this.state.warranty,
                    datesub: this.state.datesub
                }
                RFQDetails.update(
                    this.props.RFQ._id,
                    {
                        $push:
                        {
                            standard_apply: standardApply
                        }
                    }, function (err, res) {
                        if (err) {
                            console.log(err);
                            Bert.alert('UnKnown Error!!', 'danger', 'growl-top-right');
                        }
                        else {
                            FlowRouter.go('/dashboard');
                        }
                    });
            } else {
                Bert.alert('Please Fill up Table details!!', 'danger', 'growl-top-right');
            }
        } else {
            Bert.alert('Please Fill up All Details!!', 'danger', 'growl-top-right');
        }

    }

    render() {
        if (this.props.RFQ && this.props.Acc) {
            let link = '';
            if (Meteor.user()) {
                const cursor = ImagesCol.findOne({_id: Meteor.user().profile.ProPic});
                if (cursor) {
                    link = cursor.link();
                }
            }
            var side = <SideBar Apply={this.handleApply.bind(this)}/>;

            var header =
                <div className="title-top col-md-12">
                    <img id="companylogo" src={link} className="center-block"/>
                    <h3>{Meteor.user().profile.name}</h3>
                    <hr/>
                </div>
            var footer =
                <div>
                    <hr/>
                    <h4>{Meteor.user().profile.description}</h4>
                    <h4>Tel : {Meteor.user().profile.mobno}, Email: {Meteor.user().emails[0].address} </h4>
                </div>
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {side}
                        </div>
                        <div className="col-md-8">
                            <div className="col-md-12">
                                <StandardDocumentApply1 RFQ={this.props.RFQ} head={header} foot={footer}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentApply2 RFQ={this.props.RFQ} head={header} foot={footer}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentApply4 products={this.state.products}
                                                        getSign={(value) => this.getSign(value)}
                                                        sendData={(products, estimate) => this.getdatafromtable(products, estimate)}
                                                        sendDestination={(destination) => this.getdestinationfromtable(destination)}
                                                        senddelivery={(delivery) => this.getdeliveryfromtable(delivery)}
                                                        sendwarranty={(warranty) => this.getwarrantyfromtable(warranty)}
                                                        RFQ={this.props.RFQ} head={header} foot={footer}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentApply3 RFQ={this.props.RFQ} head={header} foot={footer}
                                                        estimate={this.state.estimate}
                                                        getSign4={(value) => this.getSign4(value)}
                                />

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentApply5 getSign5={(value) => this.getSign5(value)} handleProductUpdate={this.handleProductTable.bind(this)}
                                                        RFQ={this.props.RFQ} head={header} foot={footer}/>

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
            )
        }
    }
}
