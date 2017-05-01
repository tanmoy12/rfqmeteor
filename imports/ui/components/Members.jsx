import React, {Component, PropTypes} from 'react';
import ReactDOM from "react-dom";
import {createContainer} from "meteor/react-meteor-data";
import $ from 'jquery';

var specCommDivRows = [];
var spec_id = [];
export default class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remove: false
        };


    }



    showSelectedOption(id, text) {
        var s = '#' + id;
        console.log(id + " EDITED");
        $(s).text(text);
    }

    removeMember() {
        this.setState({
            remove: true
        });
    }



    render() {

        var ind_id = parseInt(this.props.idx);
        var ref_val = this.props.ref_val;

        var selected_id1 = ref_val + "selected1";
        var selected_id2 = ref_val + "selected2";

        console.log("USER LIST");
        var that = this;
        var dropdownList1 =
            this.props.allUsersList.map(function (user) {
                //console.log(user);
                return (<li><a
                    href="#" key={user._id} id={selected_id1} onClick={that.showSelectedOption.bind(this, selected_id1, user.profile.name)}>{user.profile.name}</a></li>)
            });
        console.log(dropdownList1);



        console.log("HERE WITHOUT YOU! " + ref_val + " SERIAL: " + this.props.serial);
        let member;
        if (this.state.remove == false) {
            member =
                <div key={ref_val} ref={ref_val} id={ref_val} className="row"
                     style={{paddingLeft: "2%", paddingRight: "2%"}}>
                    <div className="control-group" id="fields">
                        <div className="controls">
                            <form role="form" autocomplete="off">
                                <div className="entry input-group col-xs-5">

                                    <div className="dropdown" style={{display: "inline-block", width: "55%"}}>
                                        <button type="button" className="btn btn-default dropdown-toggle"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                style={{width: "100%"}}>
                                            <span id={selected_id1}>{this.props.name}</span>
                                            <span className="caret" style={{marginLeft: "3px"}}></span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-header">Usernames</li>
                                            {dropdownList1}

                                        </ul>
                                    </div>
                                    <div className="dropdown" style={{display: "inline-block", width: "45%"}}>
                                        <button type="button" className="btn btn-default dropdown-toggle"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                style={{width: "100%"}}>
                                            <span id={selected_id2}>{this.props.des}</span>
                                            <span className="caret" style={{marginLeft: "3px"}}></span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-header">Designation</li>
                                            <li><a onClick={this.showSelectedOption.bind(this, selected_id2, "Member")}
                                                   href="#">Member</a></li>
                                            <li><a
                                                onClick={this.showSelectedOption.bind(this, selected_id2, "Chairperson")}
                                                href="#">Chairperson</a></li>
                                            <li><a
                                                onClick={this.showSelectedOption.bind(this, selected_id2, "সদস্যসচিব")}
                                                href="#">সদস্যসচিব</a></li>
                                        </ul>
                                    </div>

                                    <span className="input-group-btn">
                                                <button className="btn btn-danger btn-remove bb"
                                                        onClick={this.removeMember.bind(this)}
                                                        title="Remove From Committee" type="button">
                                                     <span className="glyphicon glyphicon-minus"></span>
                                                 </button>
                                            </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        }


        return (
            <div>
                {member}
            </div>
        );
    }
}

