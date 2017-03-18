import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";

import StandardDocumentLoad1 from './StandardDocumentLoads/StandardDocumentLoad1';
import StandardDocumentLoad2 from './StandardDocumentLoads/StandardDocumentLoad2';
import StandardDocumentLoad3 from './StandardDocumentLoads/StandardDocumentLoad3';
import StandardDocumentLoad4 from './StandardDocumentLoads/StandardDocumentLoad4';
import StandardDocumentLoad5 from './StandardDocumentLoads/StandardDocumentLoad5';

class StandardDocumentLoad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RFQno: "",
            products: [],
            pageno: 1
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

    nextClick(e){
        e.preventDefault();
        let pageno= this.state.pageno+1;
        if(this.state.pageno<5) {
            this.setState({
                pageno: pageno
            });
        }
    }
    prevClick(e){
        e.preventDefault();
        let pageno= this.state.pageno-1;
        if(this.state.pageno>1) {
            this.setState({
                pageno: pageno
            });
        }
    }

    render() {

        if (this.props.RFQ && this.props.chahida && this.props.standard) {
            if(this.state.pageno==1){
                return (
                    <div className="container">
                        <div className="row">
                            <StandardDocumentLoad1 standard= {this.props.standard} RFQ={this.props.RFQ}/>

                            <div className="col-md-10">
                                <button className="btn btn-lg btn-link pull-right" onClick={this.nextClick.bind(this)}>next </button>
                                <button className="btn btn-lg btn-link pull-right" onClick={this.prevClick.bind(this)}>previous </button>
                            </div>
                        </div>

                    </div>
                );
            }else if(this.state.pageno==2){
                return (
                    <div className="container">
                        <div className="row">
                            <StandardDocumentLoad2 />

                            <div className="col-md-10">
                                <button className="btn btn-lg btn-link pull-right" onClick={this.nextClick.bind(this)}>next </button>
                                <button className="btn btn-lg btn-link pull-right" onClick={this.prevClick.bind(this)}>previous </button>
                            </div>
                        </div>
                    </div>
                );
            }else if(this.state.pageno==3){
                return (
                    <div className="container">
                        <div className="row">
                            <StandardDocumentLoad3 standard= {this.props.standard} RFQ={this.props.RFQ} chahida={this.props.chahida} RFQno={this.state.RFQno}
                                                   dateToday={this.dateToday}/>

                            <div className="col-md-10">
                                <button className="btn btn-lg btn-link pull-right" onClick={this.nextClick.bind(this)}>next </button>
                                <button className="btn btn-lg btn-link pull-right" onClick={this.prevClick.bind(this)}>previous </button>
                            </div>
                        </div>
                    </div>
                );
            }else if(this.state.pageno==4){
                return (
                    <div className="container">
                        <div className="row">
                            <StandardDocumentLoad4 standard= {this.props.standard} RFQ={this.props.RFQ} chahida={this.props.chahida} RFQno={this.state.RFQno}
                                                   dateToday={this.dateToday} genTable={this.genTable}/>

                            <div className="col-md-10">
                                <button className="btn btn-lg btn-link pull-right" onClick={this.nextClick.bind(this)}>next </button>
                                <button className="btn btn-lg btn-link pull-right" onClick={this.prevClick.bind(this)}>previous </button>
                            </div>
                        </div>
                    </div>
                );
            }else if(this.state.pageno==5){
                return (
                    <div className="container">
                        <div className="row">
                            <StandardDocumentLoad5 standard= {this.props.standard} RFQ={this.props.RFQ} chahida={this.props.chahida} RFQno={this.state.RFQno}
                                                   dateToday={this.dateToday}/>

                            <div className="col-md-10">
                                <button className="btn btn-lg btn-link pull-right" onClick={this.nextClick.bind(this)}>next </button>
                                <button className="btn btn-lg btn-link pull-right" onClick={this.prevClick.bind(this)}>previous </button>
                            </div>
                        </div>
                    </div>
                );
            }

        }
        else {
            return (
                <div>
                    Loading
                </div>
            )
        }
    }
}


StandardDocumentLoad.propTypes = {
    RFQ: PropTypes.object,
    chahida: PropTypes.object,
    standard: PropTypes.object
};

export default createContainer(props => {
    Meteor.subscribe('standards');
    var RFQ = RFQDetails.findOne(props.id);
    var chahida,standard;
    if (RFQ) {
        chahida = Chahida_Potro.findOne(RFQ.chahida_id);
        standard = StandardDocuments.findOne(RFQ.standard_id);
    }
    return {
        RFQ: RFQDetails.findOne(props.id),
        standard: standard,
        chahida: chahida
    };
}, StandardDocumentLoad);

