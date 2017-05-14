import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';


export default class RFQSellingList extends Component {

    render() {

        return (
            <div className="container">
                <div className="col-md-9 jumbotron text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-top col-md-12">
                                <img src="../dricmlogo.jpg" className="center-block"/>
                                <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                <hr/>
                            </div>
                        </div>
                        <div className="col-md-12 pull-right">
                            <div className="row">
                                <div className="col-md-6 text-left">
                                    RFQ No:
                                </div>
                                <div className="col-md-6">
                                    Date:
                                </div>
                            </div>

                            <p className="text">
                                Request for Quotation for the “Supply of Chemicals” as shown on the attached schedule of
                                requirements is issued to:
                            </p>
                        </div>
                        <div className="table table-responsive table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <td>S/N</td>
                                    <td>Description</td>
                                    <td>Signature</td>

                                </tr>
                                </thead>
                                <tbody className="text-left">
                                <tr>
                                    <td>01</td>
                                    <td>M/S</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>M/S</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>M/S</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>M/S</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>05</td>
                                    <td>M/S</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>06</td>
                                    <td>M/S</td>
                                    <td></td>
                                </tr>

                                </tbody>

                            </table>

                        </div>
                    </div>
                    <div className="col-md-12 incharge">
                        <div className="pull-right text-center">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            (Dr. Mala Khan) <br/>
                            In- Charge

                        </div>
                    </div>

                    <div>
                        <hr/>
                        <h4>Dr. Qudrat-I-Khuda Road, Dhanmondi, Dhaka-1205</h4>
                        <h4>Tel : 02 9671830, 01715032057</h4>
                    </div>
                </div>

            </div>


        );

    }
}