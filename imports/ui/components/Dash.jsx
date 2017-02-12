import React, {Component} from "react";
import Table from '../components/Table';

export default class Dash extends Component {
    createRFQ(e){
        e.preventDefault();
        FlowRouter.go("/createRFQ");
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Table/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="jumbotron text-center">
                        <h1 className="page-header"> Designated Reference for Institute of Chemical Measurements</h1>
                        <button onClick={this.createRFQ.bind(this)} type="button" className="btn btn-primary" data-toggle="modal" data-target="#popupwindow">
                            Create
                            RFQ
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}
