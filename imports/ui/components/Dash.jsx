import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import Footer from './Footer';

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
                    <div style={{marginTop : "3px"}} className="pull-right">
                        <button id="shadowPut" onClick={this.createRFQ.bind(this)} className="btn btn-primary"
                                data-toggle="modal" data-target="#popupwindow">
                            <span className="glyphicon glyphicon-edit"></span> Create an
                            RFQ today
                        </button>
                    </div>
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#home">Running RFQs</a></li>
                        <li><a data-toggle="tab" href="#menu1">Complete RFQs</a></li>
                    </ul>

                    <div className="tab-content">
                        <div id="home" className="tab-pane fade in active">
                            <div>
                                <input style={{width: "50%", marginTop : "10px", fontSize: "15px"}} className='form-control'
                                       placeholder='Search RFQs' type='text'
                                    />
                            </div>
                            <div id="Dasboardjumbo" className="jumbotron text-center">
                                <h1 className="page-header"> Designated Reference for Institute of Chemical Measurements</h1>
                                <button onClick={this.createRFQ.bind(this)} className="btn btn-primary"
                                        data-toggle="modal" data-target="#popupwindow">
                                    <span className="glyphicon glyphicon-edit"></span> Create
                                    RFQ
                                </button>
                            </div>
                            <div id="Dasboardjumbo" className="jumbotron text-center">
                                <h1 className="page-header"> Designated Reference for Institute of Chemical Measurements</h1>
                                <button onClick={this.createRFQ.bind(this)} className="btn btn-primary"
                                        data-toggle="modal" data-target="#popupwindow">
                                    <span className="glyphicon glyphicon-edit"></span> Create
                                    RFQ
                                </button>
                            </div>
                            <div id="Dasboardjumbo" className="jumbotron text-center">
                                <h1 className="page-header"> Designated Reference for Institute of Chemical Measurements</h1>
                                <button onClick={this.createRFQ.bind(this)} className="btn btn-primary"
                                        data-toggle="modal" data-target="#popupwindow">
                                    <span className="glyphicon glyphicon-edit"></span> Create
                                    RFQ
                                </button>
                            </div>
                            <div id="Dasboardjumbo" className="jumbotron text-center">
                                <h1 className="page-header"> Designated Reference for Institute of Chemical Measurements</h1>
                                <button onClick={this.createRFQ.bind(this)} className="btn btn-primary"
                                        data-toggle="modal" data-target="#popupwindow">
                                    <span className="glyphicon glyphicon-edit"></span> Create
                                    RFQ
                                </button>
                            </div>
                        </div>
                        <div id="menu1" className="tab-pane fade">
                            {this.renderRFQs()}
                        </div>
                    </div>


                </div>
                <Footer/>
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
        RFQList: RFQDetails.find({}, {sort: {createdAt: -1}}).fetch()
    };
}, Dash);
