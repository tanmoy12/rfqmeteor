import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import RFQBox from './RFQBox';

class Dash extends Component {
    constructor() {
        super();
        //  this.state.products = [];

    }

    createRFQ(e) {
        e.preventDefault();
        FlowRouter.go("/chahidapotro");
    }

    renderRFQs() {
        return this.props.RFQList.map(function (RFQItem) {
            return <RFQBox key={RFQItem._id} RFQItem={RFQItem}/>
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div classID="Dasboardjumbo" className="jumbotron text-center">
                        <h1 className="page-header"> Designated Reference for Institute of Chemical Measurements</h1>
                        <div id="mysidemenu">
                            <button onClick={this.createRFQ.bind(this)} id="btnrfqdash" className="btn btn-primary"
                                    data-toggle="modal" data-target="#popupwindow">
                                Create
                                RFQ
                            </button>
                        </div>
                    </div>
                    {this.renderRFQs()}

                </div>
            </div>
        );
    }
}


Dash.propTypes = {
    RFQList: PropTypes.array.isRequired
};

export default createContainer(() => {
    Meteor.subscribe('rfqdetails');
    return {
        RFQList: RFQDetails.find({}).fetch()
    };
}, Dash);
