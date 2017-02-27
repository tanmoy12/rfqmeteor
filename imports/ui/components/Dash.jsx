import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import RFQBox from './RFQBox';

class Dash extends Component {
    createRFQ(e) {
        e.preventDefault();
        FlowRouter.go("/chahidapotro");
    }

    renderRFQs() {
        let RFQs = this.props.RFQs;
        console.log(RFQs);
        return RFQs.map(function (RFQ) {
            console.log(RFQ._id);
            return
                <RFQBox key={RFQ._id} id={RFQ._id}/>
        });
    }

    render() {
        return (
            <div>

                <div className="container">
                    <div className="jumbotron text-center">
                        <h1 className="page-header"> Designated Reference for Institute of Chemical Measurements</h1>
                        <button onClick={this.createRFQ.bind(this)} type="button" className="btn btn-primary"
                                data-toggle="modal" data-target="#popupwindow">
                            Create
                            RFQ
                        </button>
                        <div>
                            {this.renderRFQs()}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

Dash.propTypes = {
    RFQs: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        RFQs: RFQDetails.find({}, {sort: {date: -1}}).fetch()
    };
}, Dash);
