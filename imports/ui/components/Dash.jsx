import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import RFQBox from './RFQBox';

export default class Dash extends TrackerReact(React.Component) {
    constructor() {
        super();
        //  this.state.products = [];
        this.state = {
            subscription: {
                RFQs: Meteor.subscribe('rfqdetails')
            }
        }
    }

    componentWillUnmount() {
        this.state.subscription.RFQs.stop();
    }

    RFQs() {
        return RFQDetails.find({}).fetch(); //fetch must be called to trigger reactivity
    }

    createRFQ(e) {
        e.preventDefault();
        FlowRouter.go("/chahidapotro");
    }

    renderRFQs() {
        let RFQs = RFQDetails.find({}).fetch();
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


                    </div>
                    <div>
                        {this.RFQs().map((RFQ) => {
                            return <RFQBox key={RFQ._id} RFQ={RFQ}/>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
