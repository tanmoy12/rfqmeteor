import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";

import StandardDocumentApply1 from "./StandardDocumentApply/StandardDocumentApply1";
import StandardDocumentApply2 from "./StandardDocumentApply/StandardDocumentApply2";
import StandardDocumentApply3 from "./StandardDocumentApply/StandardDocumentApply3";
import StandardDocumentApply4 from "./StandardDocumentApply/StandardDocumentApply4";
import StandardDocumentApply5 from "./StandardDocumentApply/StandardDocumentApply5";
import SideBar from "./SideBar";

class StandardDocumentApply extends Component {
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
            signed3: false,
            signed4: false,
            signed5: false,
            products: pro,
            estimate: 0,
            pageno: 1,
            destination: 'DRiCM,BCSIR',
            datesub: null
        }
    }

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
            destination: delivery
        });
    }

    getwarrantyfromtable(warranty) {
        this.setState({
            destination: warranty
        });
    }

    getSign(value){
        this.setState({
            signed3: value
        });
    }

    getSign4(value){
        console.log(value);
        this.setState({
            signed4: value
        });
    }

    getSign5(value){
        console.log(value);
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

    nextClick(e) {
        e.preventDefault();
        let pageno = this.state.pageno + 1;
        if (this.state.pageno < 5) {
            this.setState({
                pageno: pageno
            });
        }
    }

    prevClick(e) {
        e.preventDefault();
        let pageno = this.state.pageno - 1;
        if (this.state.pageno > 1) {
            this.setState({
                pageno: pageno
            });
        }
    }

    datesubChange(dateValue) {
        this.setState({
            datesub: dateValue
        })
    }

    handleApply(){
        console.log('applied');
    }

    render() {

        if (this.props.RFQ) {
            let link = '';
            if (Meteor.user()) {
                const cursor = ImagesCol.findOne({_id: Meteor.user().profile.ProPic});
                if (cursor) {
                    link = cursor.link();
                }
            }
            var side = <SideBar Apply={this.handleApply}/>;

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
            if (this.state.pageno == 1) {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                {side}
                            </div>
                            <div className="col-md-9">
                                <StandardDocumentApply1 RFQ={this.props.RFQ} head={header} foot={footer}/>

                                <div className="col-md-12">
                                    <button className="btn btn-lg btn-link pull-right"
                                            onClick={this.nextClick.bind(this)}>
                                        next
                                    </button>
                                    <button className="btn btn-lg btn-link pull-right"
                                            onClick={this.prevClick.bind(this)}>
                                        previous
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            } else if (this.state.pageno == 2) {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                {side}
                            </div>
                            <div className="col-md-9">
                                <StandardDocumentApply2 RFQ={this.props.RFQ} head={header} foot={footer}/>

                                <div className="col-md-12">
                                    <button className="btn btn-lg btn-link pull-right"
                                            onClick={this.nextClick.bind(this)}>
                                        next
                                    </button>
                                    <button className="btn btn-lg btn-link pull-right"
                                            onClick={this.prevClick.bind(this)}>
                                        previous
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else if (this.state.pageno == 3) {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                {side}
                            </div>
                            <div className="col-md-9">
                                <StandardDocumentApply4 products={this.state.products} getSign={(value) => this.getSign(value)}
                                                        sendData={(products, estimate) => this.getdatafromtable(products, estimate)}
                                                        sendDestination={(destination) => this.getdestinationfromtable(destination)}
                                                        senddelivery={(delivery) => this.getdeliveryfromtable(delivery)}
                                                        sendwarranty={(warranty) => this.getwarrantyfromtable(warranty)}
                                                        RFQ={this.props.RFQ} head={header} foot={footer}/>

                                <div className="col-md-12">
                                    <button className="btn btn-lg btn-link pull-right"
                                            onClick={this.nextClick.bind(this)}>
                                        next
                                    </button>
                                    <button className="btn btn-lg btn-link pull-right"
                                            onClick={this.prevClick.bind(this)}>
                                        previous
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else if (this.state.pageno == 4) {
                return (

                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                {side}
                            </div>
                            <div className="col-md-9">
                                <StandardDocumentApply3 RFQ={this.props.RFQ} head={header} foot={footer}
                                                        estimate={this.state.estimate}
                                                        getSign4={(value) => this.getSign4(value)}
                                                        datesubChange={(dateValue) => this.datesubChange(dateValue)}/>

                                <div className="col-md-12">
                                    <button className="btn btn-lg btn-link pull-right"
                                            onClick={this.nextClick.bind(this)}>
                                        next
                                    </button>
                                    <button className="btn btn-lg btn-link pull-right"
                                            onClick={this.prevClick.bind(this)}>
                                        previous
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else if (this.state.pageno == 5) {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                {side}
                            </div>
                            <div className="col-md-9">
                                <StandardDocumentApply5 getSign5={(value) => this.getSign5(value)}
                                                        RFQ={this.props.RFQ} head={header} foot={footer}/>

                                <div className="col-md-12">
                                    <button className="btn btn-lg btn-link pull-right"
                                            onClick={this.nextClick.bind(this)}>
                                        next
                                    </button>
                                    <button className="btn btn-lg btn-link pull-right"
                                            onClick={this.prevClick.bind(this)}>
                                        previous
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }

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


StandardDocumentApply.propTypes = {
    RFQ: PropTypes.object
};

export default createContainer(props => {
    var RFQ = RFQDetails.findOne(props.id);
    var Acc, Dcc;
    if (RFQ) {
        Acc = Meteor.users.find({_id: RFQ.chahida.accountant.user_id}).fetch();
    }
    return {
        RFQ: RFQ,
        Acc: Acc
    };
}, StandardDocumentApply);

