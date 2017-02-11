import React, {Component} from "react";
import DashHeader from '../components/DashHeader';
import Table from '../components/Table';

export default class Dash extends Component {

    render() {

        return (
            <div id="wrapper">
                <DashHeader/>
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
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#popupwindow">
                            Create
                            RFQ
                        </button>

                    </div>

                </div>
            </div>


        );
    }
}
