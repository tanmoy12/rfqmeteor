import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import StandardDocumentLoad1 from "./StandardLoadApply/StandardLoadApply1";
import StandardDocumentLoad2 from "./StandardLoadApply/StandardLoadApply2";
import StandardDocumentLoad3 from "./StandardLoadApply/StandardLoadApply3";
import StandardDocumentLoad4 from "./StandardLoadApply/StandardLoadApply4";
import StandardDocumentLoad5 from "./StandardLoadApply/StandardLoadApply5";
import SideBar from "./SideBar";

class StandardApplyLoad extends Component {
    constructor(props) {
        super(props);

        var pro = [];

        this.state = {
        }
    }

    render() {

        if (this.props.RFQ && this.props.AppliedDetails && this.props.company) {
            var stan=this.props.AppliedDetails;
            var com=this.props.company;

            let link = '';
            if (stan.company.user_id) {
                const cursor = ImagesCol.findOne({_id: stan.company.pic});
                if (cursor) {
                    link = cursor.link();
                }
            }
            var side = <SideBar />;

            var header =
                <div className="title-top col-md-12">
                    <img id="companylogo" src={link} className="center-block"/>
                    <h3>{com.profile.name}</h3>
                    <hr/>
                </div>
            var footer =
                <div>
                    <hr/>
                    <h4>{com.profile.description}</h4>
                    <h4>Tel : {com.profile.mobno}, Email: {com.emails[0].address} </h4>
                </div>
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {side}
                        </div>
                        <div className="col-md-9">
                            <div className="col-md-12">
                                <StandardDocumentLoad1 stan={stan} RFQ={this.props.RFQ} head={header} foot={footer}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentLoad2 stan={stan} RFQ={this.props.RFQ} head={header} foot={footer}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentLoad3 stan={stan} RFQ={this.props.RFQ} head={header} foot={footer}/>

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentLoad4 stan={stan} RFQ={this.props.RFQ} head={header} foot={footer}
                                />

                            </div>
                            <div className="col-md-12">
                                <StandardDocumentLoad5 stan={stan} RFQ={this.props.RFQ} head={header} foot={footer}/>

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


StandardApplyLoad.propTypes = {
    RFQ: PropTypes.object
};

export default createContainer(props => {

    var RFQ = RFQDetails.findOne(props.id);
    var AppliedDetails, company;

    var Director, Dcc;
    if (RFQ) {
        RFQ.standard_apply.map(function (app) {
            if(app.company.user_id==props.idx){
                AppliedDetails=app;
            }
        });
        if(AppliedDetails){
            company= Meteor.users.findOne(AppliedDetails.company.user_id);
        }
    }
    return {
        RFQ: RFQ,
        Dcc: Dcc,
        Director: Director,
        AppliedDetails: AppliedDetails,
        company: company
    };
}, StandardApplyLoad);

