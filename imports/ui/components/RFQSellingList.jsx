import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import SideBar from "./SideBar";

class RFQSellingList extends Component {

    genTable() {
        var i = 0;
        return this.props.RFQ_details.standard_apply.map(function (apply) {
            i++;
            const cursor = ImagesCol.findOne({_id: apply.company.pic});
            var link = '';
            if (cursor) {
                link = cursor.link();
            }
            return (
                <tr key={i}>
                    <td>{i}</td>
                    <td>M/S {apply.company.name}</td>
                    <td>
                        <div className="col-md-12 center-block">
                            <img id="signPic" src={link} alt="User Image"/>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    render() {
        if(this.props.RFQ_details) {
            var side = <SideBar goToNote={'/Note/' + this.props.RFQ_details._id}/>;
            return (
                <div className="container">
                    <div className="col-md-3">
                        {side}
                    </div>
                    <div id="chahidajumbo" className="col-md-8 jumbotron text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-top col-md-12">
                                    <img src="/dricmlogo.jpg" className="center-block"/>
                                    <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                    <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                    <hr/>
                                </div>
                            </div>
                            <div className="col-md-12 pull-right">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12 pull-left">
                                                <span
                                                    className="pull-left"><strong>RFQ No :  <b>{this.props.RFQ_details.standard.RFQ_no}</b></strong></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                    </div>
                                </div>

                                <p className="text">
                                    Request for Quotation for the “Supply of {this.props.RFQ_details.chahida.title}” as
                                    shown on the attached schedule of
                                    requirements is issued to:
                                </p>
                            </div>
                            <div className="table table-bordered table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <td>S/N</td>
                                        <td>Description</td>
                                        <td>Signature</td>

                                    </tr>
                                    </thead>
                                    <tbody className="text-left">
                                    {this.genTable()}

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
        else {
            return (
              <div>
                  Loading...
              </div>
            );
        }

    }
}

RFQSellingList.propTypes = {
    RFQ_details: PropTypes.object
};

export default createContainer(props => {
    return {
        RFQ_details: RFQDetails.findOne({_id: props.id})
    };
}, RFQSellingList);