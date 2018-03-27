import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import Minutes from './Minutes';

class MinuteWrapper extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
    }

    render() {
        if (this.props.RFQ_details) {
            return (
                <Minutes RFQ_details={this.props.RFQ_details}/>
            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}

MinuteWrapper.propTypes = {
    RFQ_details: PropTypes.object
};

export default createContainer(props => {
    return {
        RFQ_details: RFQDetails.findOne({_id: props.id}),
    };
}, MinuteWrapper);
