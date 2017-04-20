import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import $ from "jquery";

var specCommDivRows = [];
var spec_id = [];

export default class Committee extends Component {
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

    specCommMemAddButtClick(todo, re) {
        var x = parseInt(this.state.noOfSpecCommMem);
        var ind_id = parseInt(this.props.idx);
        if (todo == "add") {
            this.state.specCommMemAdd[ind_id] = true;
            x++;

        }
        else {

            var elm = document.getElementById(re);
            //console.log(elm);
            var newAra = [];
            // console.log("BEFORE");
            // console.log(specCommDivRows);
            for (var i = 0; i < specCommDivRows[ind_id].length; i++) {
                var r = specCommDivRows[ind_id][i].ref;
                var id = elm.id;
                if (r != id || specCommDivRows[ind_id].length == 1) {
                    newAra.push(specCommDivRows[ind_id][i]);
                    //console.log("DHUKSI");
                }
                //console.log(specCommDivRows[ind_id][i].ref);
                //console.log(elm.id);
            }
            specCommDivRows[ind_id] = [];
            for (var i = 0; i < newAra.length; i++) {
                specCommDivRows[ind_id].push(newAra[i]);
            }
            // console.log("AFTER");
            // console.log(specCommDivRows);
            x--;


        }

        var a = [];
        for (var i = 0; i < x; i++) {
            a[i] = "btn btn-danger btn-remove bb";
        }
        a[x] = "btn btn-success btn-add bb";
        this.state.specCommButtClassRows[ind_id] = a;
        this.setState({
            noOfSpecCommMem: x,
        });

    }

    showSelectedOption(spanId, option) {
        var s = '#' + spanId;
        $(s).text(option);
    }


    render() {
        var specCommDiv;
        var ind_id = parseInt(this.props.idx);
        if (this.state.commDivShow) {
            var x = parseInt(this.state.noOfSpecCommMem);
            var ref_val = spec_id[ind_id].toString() + "_" + this.props.refVal;
            var addButton =
                <div className="control-group" id="fields">
                    <div className="controls">
                        <form role="form" autoComplete="off">
                            <div className="entry input-group col-xs-5">
                                <button className="btn btn-success btn-add bb" style={{
                                    marginBottom: "7px",
                                    float: "right",
                                    fontSize: "12px",
                                    fontWeight: "bold"
                                }}
                                        onClick={this.specCommMemAddButtClick.bind(this, "add", ref_val)}
                                        title="Add More To Committee" type="button" value="Add More">
                                    Add More
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            var butt_id = ref_val + "butt";

            if (this.state.specCommMemAdd[ind_id]) {
                //console.log("BUTTON ADDED: "+butt_id);
                specCommDivRows[ind_id].push(<div key={ref_val} ref={ref_val} id={ref_val} className="row"
                                                  style={{paddingLeft: "2%", paddingRight: "2%"}}>
                    <div className="control-group" id="fields">
                        <div className="controls">
                            <form role="form" autoComplete="off">
                                <div className="entry input-group col-xs-5">

                                    <div className="dropdown" style={{display: "inline-block", width: "55%"}}>
                                        <button type="button" className="btn btn-default dropdown-toggle"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                style={{width: "100%"}}>
                                            <span id="selected">Name</span>
                                            <span className="caret" style={{marginLeft: "3px"}}></span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-header">Usernames</li>
                                            <li><a
                                                onClick={this.showSelectedOption.bind(this, "selected", "shadman264")}
                                                href="#">shadman264</a></li>
                                            <li><a
                                                onClick={this.showSelectedOption.bind(this, "selected", "tanmoy12")}
                                                href="#">tanmoy12</a></li>
                                            <li><a
                                                onClick={this.showSelectedOption.bind(this, "selected", "hasib123")}
                                                href="#">hasib123</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown" style={{display: "inline-block", width: "45%"}}>
                                        <button type="button" className="btn btn-default dropdown-toggle"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                style={{width: "100%"}}>
                                            <span id="selected2">Designation</span>
                                            <span className="caret" style={{marginLeft: "3px"}}></span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-header">Designation</li>
                                            <li><a
                                                onClick={this.showSelectedOption.bind(this, "selected2", "Member")}
                                                href="#">Member</a></li>
                                            <li><a
                                                onClick={this.showSelectedOption.bind(this, "selected2", "Chairperson")}
                                                href="#">Chairperson</a></li>
                                            <li><a
                                                onClick={this.showSelectedOption.bind(this, "selected2", "সদস্যসচিব")}
                                                href="#">সদস্যসচিব</a></li>
                                        </ul>
                                    </div>

                                    <span className="input-group-btn">
                                            <button className="btn btn-danger btn-remove bb"
                                                    onClick={this.specCommMemAddButtClick.bind(this, "rmv", ref_val)}
                                                    title="Remove From Committee" type="button">
                                                 <span className="glyphicon glyphicon-minus"></span>
                                             </button>
                                        </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>);
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
//
// Committee.propTypes = {
//     members: PropTypes.array.isRequired,
//     allusers: PropTypes.array.isRequired
// };
// export default createContainer( props => {
//     return {
//         members: Meteor.users.find(
//             {
//                 'profile.committee': props.name
//             }
//         ).fetch(),
//         allusers: Meteor.users.find(
//             {
//                 'profile.committee' : {$ne: props.name}
//             }
//         ).fetch()
//
//     };
// }, Committee);