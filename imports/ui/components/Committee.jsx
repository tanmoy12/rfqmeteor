import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import ReactDOM from "react-dom";

export default class Committee extends Component {
    constructor(props) {
        super(props);

        var des=['Chairman', 'Member', 'Member Secretary'];
        this.props.members.map(function (mem) {
            //console.log(des);
            if (mem.profile.committee.des == 'Chairman') {
                var I= des.indexOf('Chairman');
                des.splice(I, 1);
            } else if (mem.profile.committee.des == 'Shochib') {
                var I= des.indexOf('Member Secretary');
                des.splice(I, 1);
            }
        });
        //console.log(des);
        this.state = {
            des: des
        }
    }

    addMember(e) {
        e.preventDefault();
        var selectId = ReactDOM.findDOMNode(this.refs.selectName).value.trim();
        var selectDes = ReactDOM.findDOMNode(this.refs.selectDes).value.trim();

        var des;
        if (selectDes == 'Chairman') {
            des = 'Chairman';
        } else if (selectDes == 'Member Secretary') {
            des = 'Shochib';
        } else if (selectDes == 'Member') {
            des = 'Shodosho';
        }
        //console.log(selectId);
        //console.log(des);
        var that=this;
        Meteor.call('addMember', selectId, des, that.props.name);

        if (des == 'Chairman') {
            var I= this.state.des.indexOf('Chairman');
            this.state.des.splice(I, 1);
        } else if (des == 'Shochib') {
            var I= this.state.des.indexOf('Shochib');
            this.state.des.splice(I, 1);
        }

    }


    deleteMember(id, des){
        //e.preventDefault();
        console.log(id);
        console.log(des);
        Meteor.call('removeMember', id);
        if(des=='Chairman') this.state.des.push('Chairman');
        else if(des=='Shochib') this.state.des.push('Member Secretary');
    }

    renderCommittee() {
        var i=0;
        var that=this;
        var des;
        return  this.props.members.map(function (mem) {
            i++;
            if(mem.profile.committee.des == 'Chairman') des= 'Chairman';
            else if(mem.profile.committee.des == 'Shochib') des= 'Member Secretary';
            else if(mem.profile.committee.des == 'Shodosho') des= 'Member';
            return <tr key={i}>
                <td className="col-md-1 text-left">{i}</td>
                <td className="col-md-5 text-left">{mem.profile.name}</td>
                <td className="col-md-4 text-left">{des}</td>
                <td className="col-md-2 text-center">
                    <button
                            onClick={(value, val2) => that.deleteMember(mem._id, mem.profile.committee.des)}
                            className="btn btn-default btn-sm">
                        <span className="glyphicon glyphicon-minus"></span>
                    </button>

                </td>
            </tr>
        })
    }


    render() {

        if (this.props.members && this.props.allusers) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="pull-left col-md-8">
                            <div style={{marginTop: "10px"}} id="tabledesc" className="table">

                                <table id="customers" className="table table-responsive table-bordered table-condensed">
                                    <thead>
                                    <tr>
                                        <th className="col-md-12 text-center">{this.props.name}</th>
                                    </tr>
                                    </thead>
                                </table>
                                <table id="customers" className="table table-responsive table-bordered table-condensed">
                                    <thead>
                                    <tr>
                                        <th className="col-md-1 text-center">No.</th>
                                        <th className="col-md-5 text-center">Name</th>
                                        <th className="col-md-4 text-center">Designation</th>
                                        <th className="col-md-2 text-center"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                       this.renderCommittee()
                                    }
                                    </tbody>
                                </table>

                            </div>

                            <div style={{borderRadius: "3px"}}>
                                <div className="col-md-1"></div>
                                <div className="col-md-5">
                                    <select id="committeeDiv" ref="selectName" className="col-md-5 form-control">
                                        {
                                            this.props.allusers.map(function (User) {
                                                return (<option value={User._id} key={User._id}
                                                                style={{color: "black"}}>
                                                    {User.profile.name}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select id="committeeDiv" ref="selectDes" className="col-md-4 form-control">
                                        {
                                            this.state.des.map(function (des) {
                                                return (<option value={des} key={des}
                                                                style={{color: "black"}}>
                                                    {des}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <button id="committeeDiv"
                                            onClick={this.addMember.bind(this)}
                                            className="btn btn-default btn-sm">
                                        <span className="glyphicon glyphicon-plus"></span>
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            )
        }
        else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}