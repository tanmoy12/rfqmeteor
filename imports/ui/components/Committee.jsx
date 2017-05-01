import React, {Component, PropTypes} from 'react';
import ReactDOM from "react-dom";
import {createContainer} from "meteor/react-meteor-data";
import $ from 'jquery';

import Member from './Members';

var specCommDivRows = [];
var spec_id = [];
class Committee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColorComm: "#337ab7",
            commDivShow: false,
            noOfSpecCommMem: 0,
            specCommButtClassRows: [],
            specCommMemAdd: [],
            init: [],
        };

        var ind_id = parseInt(this.props.idx);
        specCommDivRows[ind_id] = [];
        spec_id[ind_id] = 0;
        this.state.init[ind_id] = true;
    }

    commClicked(e) {
        var ind_id = parseInt(this.props.idx);

        var col = "#337ab7";
        if (!this.state.commDivShow) {
            col = "#32127a";
        }

        var newBgColorComm = col;
        this.state.specCommButtClassRows = [];
        this.state.specCommButtClassRows.push("btn btn-success btn-add bb");
        var ind_id = parseInt(this.props.idx);
        if (this.state.init[ind_id]) {
            this.state.specCommMemAdd[ind_id] = true;
            this.state.init[ind_id] = false;
            specCommDivRows[ind_id] = [];
            spec_id[ind_id] = 0;
        }

        this.setState({
            bgColorComm: newBgColorComm,
            commDivShow: !this.state.commDivShow,
        });

        // console.log("specCommButtClassRows : "+this.state.specCommButtClassRows);


    }

    specCommMemAddButtClick(todo, re, serial) {
        var x = parseInt(this.state.noOfSpecCommMem);
        var ind_id = parseInt(this.props.idx);
        if (todo == "add") {
            this.state.specCommMemAdd[ind_id] = true;
            x++;
        }
        this.setState({
            noOfSpecCommMem: x,
        });

    }


    render() {

        if (this.props.members && this.props.allusers) {
            console.log("FOR COMMITTE NO : "+ this.props.idx);
            console.log("MEMBERS");
            console.log(this.props.members);
            console.log("ALL USERS");
            console.log(this.props.allusers);
        }

        var specCommDiv;
        var ind_id = parseInt(this.props.idx);
        //console.log("IND_ID : "+ind_id);
        if (this.state.commDivShow) {
            var x = parseInt(this.state.noOfSpecCommMem);
            var ref_val = spec_id[ind_id].toString() + "_" + this.props.refVal;
            console.log("ref_val : " + ref_val);
            var addButton =
                <div className="control-group" id="fields">
                    <div className="controls">
                        <form role="form" autocomplete="off">
                            <div className="entry input-group col-xs-5">
                                <button className="btn btn-success btn-add bb" style={{
                                    marginBottom: "7px",
                                    float: "right",
                                    fontSize: "12px",
                                    fontWeight: "bold"
                                }}
                                        onClick={this.specCommMemAddButtClick.bind(this, "add", ref_val, "")}
                                        title="Add More To Committee" type="button" value="Add More">
                                    Add More
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            if (this.state.specCommMemAdd[ind_id]) {
                addClickFunc = this.specCommMemAddButtClick.bind(this);
                specCommDivRows[ind_id].push(<Member serial={spec_id[ind_id]} ref_val={ref_val}
                                                     allUsersList={this.props.allusers}/>);
                this.state.specCommMemAdd[ind_id] = false;
                spec_id[ind_id]++;
            }
            //console.log("FROM :"+this.props.refVal);
            //console.log(specCommDivRows);

        }


        var specCommDivRow2 = [];
        specCommDivRow2[ind_id] = [];
        if (this.state.commDivShow) {

            for (var i = 0; i < specCommDivRows[ind_id].length; i++) {
                specCommDivRow2[ind_id].push(specCommDivRows[ind_id][i]);
            }
        }
        // console.log("FINAL: ");
        // console.log(specCommDivRow2[ind_id]);

        var specCommitte =
            <div>
                <button type="button" className="btn btn-primary"
                        style={{width: "100%", backgroundColor: this.state.bgColorComm}}
                        onClick={this.commClicked.bind(this)}>
                    {this.props.name}
                </button>
                {specCommDivRow2[ind_id]}
                {addButton}
            </div>


        return (
            <div ref={this.props.refVal}>
                {specCommitte}
            </div>
        );
    }
}

export default createContainer(props => {
    //console.log(props.name);
    return {
        members: Meteor.users.find(
            {
                'profile.committee.name': props.name,

            }).fetch(),
        allusers: Meteor.users.find(
            {
                'profile.committee.name': {$ne: props.name}
            }
        ).fetch()

    };
}, Committee);