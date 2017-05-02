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
            initialize: false,

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
            this.state.specCommMemAdd[ind_id] = false;
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
            //this.state.initialize = true;
            x++;
        }
        this.setState({
            noOfSpecCommMem: x,
            initialize: true,
        });

    }

    doneCommittee(ara, id, idTail){
        //FOR SENDING DATA TO SERVER
        console.log("DATA IS GETTING READY FOR SERVER : ****************************");
        let noOfChairman = 0;
        let noOfShochib = 0;
        let errorFlag = 0;

        for(let i=0;i<ara[id].length;i++){
            console.log("NUMBER : "+ (i));

            let s1 = '#' + i.toString() + idTail + "selected1";
            let s2 = '#' + i.toString() + idTail + "selected2";

            let name = $(s1).text();
            let desig = $(s2).text();

            if(name=="Name" || desig=="Designation"){
                errorFlag = 1;
                break;
            }

            if(desig=="Chairperson"){
                desig = "Chairman";
                //console.log("plus Chairperson!!");
                noOfChairman++;
            }
            else if(desig=="সদস্যসচিব"){
                desig="Shochib";
                noOfShochib++;
            }
            else if(desig=="Member"){
                desig="member";
            }



            console.log("NAME : "+name);
            console.log("DESIGNATION : "+desig);


        }
        if(noOfChairman>1){
            //console.log("More than one Chairperson!!");
            Bert.alert('More than one Chairperson!!', 'danger', 'growl-top-right');
        }
        else if(noOfShochib>1){
            //console.log("More than one সদস্যসচিব!!");
            Bert.alert('More than one সদস্যসচিব!!', 'danger', 'growl-top-right');
        }
        else if(errorFlag==1){
            Bert.alert('Empty Fields Cannot Be Left Behind!!', 'danger', 'growl-top-right');
        }
        else{
            let com_name = this.props.name;
            com_name +=  " has been successfully created";
            Bert.alert(com_name, 'success', 'growl-top-right');
        }
        console.log("DATA IS SERVED FOR SERVER : ****************************");
    }


    render() {

        if (this.props.members && this.props.allusers) {
            console.log("FOR COMMITTE NO : "+ this.props.idx);
            console.log("MEMBERS");
            console.log(this.props.members);
            console.log("ALL USERS");
            console.log(this.props.allusers);

            let ind_id = parseInt(this.props.idx);
            let ref_val = "_" + this.props.refVal;
            //console.log("ref value : "+ref_val);
            let serial = spec_id[ind_id];
            let memAra = specCommDivRows[ind_id];
            let that = this;

            if(!this.state.initialize) {
                this.props.members.map(function (member, index) {
                    //console.log("ALL USERS FROM COMMITTEE : ");
                    //console.log(that.props.allusers);
                    //console.log(user);
                    let refValue = index.toString() + ref_val;
                    memAra.push(<Member serial={serial} ref_val={refValue}
                                        allUsersList={that.props.allusers} name={member.profile.name}
                                        des={member.profile.committee.des}/>)
                });
                spec_id[ind_id] = this.props.members.length;
            }


        }

        var specCommDiv;
        var ind_id = parseInt(this.props.idx);
        //console.log("IND_ID : "+ind_id);
        if (this.state.commDivShow) {
            var x = parseInt(this.state.noOfSpecCommMem);
            var ref_val = spec_id[ind_id].toString() + "_" + this.props.refVal;
            console.log("ref_val : " + ref_val);


            //CREATE ADD_BUTTON & DONE_BUTTON
            var done_val = "_" + this.props.refVal;

            var buttons =
                <div className="control-group" id="fields" style={{display: "inline"}}>
                    <div className="controls">
                        <form role="form" autocomplete="off">
                            <div className="entry input-group col-xs-5">
                                <button className="btn btn-success btn-add bb" style={{
                                    marginBottom: "7px",
                                    float: "right",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    paddingLeft: "3.3%",
                                    paddingRight: "3.3%"
                                }}
                                        onClick={this.specCommMemAddButtClick.bind(this, "add", ref_val, "")}
                                        title="Add More To Committee" type="button" value="Add More">
                                    <span className="glyphicon glyphicon-plus" style={{marginRight: 0}}></span>
                                </button>
                                <button className="btn btn-add bb" style={{
                                    marginBottom: "7px",
                                    float: "right",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    paddingLeft: "3.3%",
                                    paddingRight: "3.3%",
                                    marginRight: "3%",
                                    backgroundColor: "#1d9385"
                                }}
                                        onClick={this.doneCommittee.bind(this, specCommDivRows, ind_id, done_val)}
                                        title="Done Editing Committee" type="button" value="Add More">
                                    <span className="glyphicon glyphicon-ok" style={{marginRight: 0}}></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>



            if (this.state.specCommMemAdd[ind_id]) {
                console.log("NEW MEMBER ADDED!!!!!!");
                console.log(spec_id[ind_id]);
                addClickFunc = this.specCommMemAddButtClick.bind(this);
                specCommDivRows[ind_id].push(<Member serial={spec_id[ind_id]} ref_val={ref_val}
                                                     allUsersList={this.props.allusers} name="Name" des="Designation"/>);
                this.state.specCommMemAdd[ind_id] = false;
                spec_id[ind_id]++;
                console.log("AFTER THAT : "+ spec_id[ind_id]);
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
                {buttons}
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
            },
        ).fetch()

    };
}, Committee);