import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import StandardDocuments from "./StandardDocuments/StandardDocuments";

class StandardDocument extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.RFQ && this.props.Acc) {
            return(
                <div>
                    <StandardDocuments RFQ={this.props.RFQ} Acc={this.props.Acc}/>
                </div>

            );
        }
        else {
            return (
                <div>
                    Loading..
                </div>
            );
        }
    }
}


StandardDocument.propTypes = {
    RFQ: PropTypes.object
};

export default createContainer(props => {
    var RFQ = RFQDetails.findOne(props.id);
    var Acc;
    if (RFQ) {
        Acc = Meteor.users.find({_id: RFQ.chahida.accountant.user_id}).fetch();
    }
    return {
        RFQ: RFQ,
        Acc: Acc
    };
}, StandardDocument);

