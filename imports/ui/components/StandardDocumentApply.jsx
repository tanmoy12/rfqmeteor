import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import StandardApply from "./StandardDocumentApply/StandardApply";


class StandardDocumentApply extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.RFQ) {
            return (
                <StandardApply RFQ={this.props.RFQ} Acc={this.props.Acc}/>
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

