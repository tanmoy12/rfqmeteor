import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleForward(e) {
        e.preventDefault();
        var select = ReactDOM.findDOMNode(this.refs.ForwardSelect).value.trim();
        this.props.forwardTo.sendSelect(select);
    }

    gotoStan(e) {
        e.preventDefault();
        FlowRouter.go(this.props.createStandardDoc);
    }

    gotoMeeting(e) {
        e.preventDefault();
        FlowRouter.go(this.props.createMeetingNotice);
    }

    gotoMinutes(e) {
        e.preventDefault();
        FlowRouter.go(this.props.minutesCreate);
    }

    gotoWoCreate(e) {
        e.preventDefault();
        FlowRouter.go(this.props.WOCreate);
    }

    render() {
        var forward_to_style = {
            // backgroundColor: "#7a9c9c",
            // backgroundColor: "#7a9c9c",
            padding: "3.5%",
            // margin: "3%",
            color: "#5e5e5e",
            borderBottom: "1px solid burlywood",
            borderTop: "1px solid burlywood"
        }

        var forward_to;
        var standard_block;

        var create_chahida_block;
        if (this.props.chahidaBlock) {
            create_chahida_block =
                <div>
                    <li>
                        <a className="sidebar_a"
                           href={this.props.chahidaBlock.link}><span className="glyphicon glyphicon-pencil"></span>Requisition
                            Form</a>
                    </li>
                </div>
        }


        //FORWARD CREATE
        var create_forward_block;
        if (this.props.forwardTo) {
            create_forward_block =
                <div>
                    <li>
                        <div style={forward_to_style}>
                            <p style={{
                                display: "inline-block",
                                fontWeight: "bold"
                            }}>Forward To : </p>
                            <p style={{
                                display: "inline-block",
                                float: "right"
                            }}>{this.props.forwardTo.toWhom}</p>

                            <div className="form-group" style={{borderRadius: "3px"}}>
                                <select ref="ForwardSelect" className="form-control">
                                    {
                                        this.props.forwardTo.dropdownList.map(function (User) {
                                            return (<option value={User._id} key={User._id}
                                                            style={{color: "black"}}>
                                                {User.profile.name}</option>)
                                        })
                                    }
                                </select>
                            </div>
                            <div>
                                <input
                                    onClick={this.handleForward.bind(this)}
                                    type="submit" name="login-submit"
                                    id="submit-all"
                                    className="btn btn-primary sidebarButt" value="Forward"/>
                            </div>
                        </div>
                    </li>
                </div>
        }
        //SATNDARD DOC CREATE

        var create_standard_block;
        if (this.props.standardBlock) {
            create_standard_block =
                <div>
                    <li>
                        <a className="sidebar_a" href={this.props.standardBlock.link}><span
                            className="glyphicon glyphicon-blackboard"></span>Standard Document</a>
                    </li>
                </div>
        }
        //CREATE_STANDARD_DOC BUTT CREATE
        var create_standard_doc_butt_create, allowanceNikosh, meetingNotice, application;
        if (this.props.createStandardDoc) {
            create_standard_doc_butt_create =
                <div>
                    <li>
                        <div style={{
                            padding: "3.5%",
                            color: "#5e5e5e"
                        }}>
                            <div>
                                <input
                                    onClick={this.gotoStan.bind(this)}
                                    type="submit" name="login-submit"
                                    id="submit-all"
                                    className="btn btn-primary sidebarButt" value="Create Standard Document"/>
                            </div>
                        </div>
                    </li>
                </div>
        }
        if (this.props.allowApplication) {
            create_standard_doc_butt_create =
                <div>
                    <li>
                        <div style={{
                            padding: "3.5%",
                            color: "#5e5e5e"
                        }}>
                            <div>
                                <input
                                    onClick={this.props.allowApplication}
                                    type="submit" name="login-submit"
                                    id="submit-all"
                                    className="btn btn-primary sidebarButt" value="Open Company Applications"/>
                            </div>
                        </div>
                    </li>
                </div>
        }
        //Go To Note
        var go_to_note, cs, createMeetingNotice,clickFunc,minutes;
        if (this.props.goToNote) {
            go_to_note =
                <div>
                    <li>
                        <a className="sidebar_a" href={this.props.goToNote}>
                            <span className="glyphicon glyphicon-chevron-left"></span>Go to Note
                        </a>
                    </li>
                </div>
        }
        if (this.props.allowanceNikosh) {
            allowanceNikosh =
                <div>
                    <li>
                        <a className="sidebar_a" href={this.props.allowanceNikosh}>
                            <span className="glyphicon glyphicon-film"></span>Allowance Nikosh
                        </a>
                    </li>
                </div>
        }
        if (this.props.meetingNotice) {
            meetingNotice =
                <div>
                    <li>
                        <a className="sidebar_a" href={this.props.meetingNotice}>
                            <span className="glyphicon glyphicon-file"></span>Meeting Notice
                        </a>
                    </li>
                </div>
        }
        if (this.props.createMeetingNotice) {
            createMeetingNotice =
                <div>
                    <li>
                        <div style={{
                            padding: "3.5%",
                            color: "#5e5e5e"
                        }}>
                            <div>
                                <input
                                    onClick={this.gotoMeeting.bind(this)}
                                    type="submit" name="login-submit"
                                    id="submit-all"
                                    className="btn btn-primary sidebarButt" value="Create Meeting Notice"/>
                            </div>
                        </div>
                    </li>
                </div>
        }
        if (this.props.minutesCreate) {
            //console.log(this.props.minutesCreate);
            minutes =
                <div>
                    <li>
                        <div style={{
                            padding: "3.5%",
                            color: "#5e5e5e"
                        }}>
                            <div>
                                <input
                                    onClick={this.gotoMinutes.bind(this)}
                                    type="submit" name="login-submit"
                                    id="submit-all"
                                    className="btn btn-primary sidebarButt" value="Minutes Of Meeting"/>
                            </div>
                        </div>
                    </li>
                </div>
            //console.log(minutes);
        }
        var WO;
        if (this.props.WOCreate) {
            //console.log(this.props.minutesCreate);
            WO =
                <div>
                    <li>
                        <div style={{
                            padding: "3.5%",
                            color: "#5e5e5e"
                        }}>
                            <div>
                                <input
                                    onClick={this.gotoWoCreate.bind(this)}
                                    type="submit" name="login-submit"
                                    id="submit-all"
                                    className="btn btn-primary sidebarButt" value="Create Work Order"/>
                            </div>
                        </div>
                    </li>
                </div>
            //console.log(minutes);
        }
        if (this.props.WO) {
            WO =
                <div>
                    <li>
                        <a className="sidebar_a" href={this.props.WO}>
                            <span className="glyphicon glyphicon-file"></span>Work Order
                        </a>
                    </li>
                </div>
        }
        if (this.props.clickFunc) {
            clickFunc =
                <div>
                    <li>
                        <div style={{
                            padding: "3.5%",
                            color: "#5e5e5e"
                        }}>
                            <div>
                                <input
                                    onClick={this.props.clickFunc.sendSelect}
                                    type="submit" name="login-submit"
                                    id="submit-all"
                                    className="btn btn-primary sidebarButt" value={this.props.clickFunc.name}/>
                            </div>
                        </div>
                    </li>
                </div>
        }
        if (this.props.cs) {
            cs =
                <div>
                    <li className="sidebar_li">
                        <a className="sidebar_a" href={this.props.cs}>
                            <span className="glyphicon glyphicon-triangle-right"></span>Company Sales
                        </a>
                    </li>
                </div>
        }
        if (this.props.minutes) {
            minutes =
                <div>
                    <li className="sidebar_li">
                        <a className="sidebar_a" href={this.props.minutes}>
                            <span className="glyphicon glyphicon-folder-close"></span>Minutes Of Meeting
                        </a>
                    </li>
                </div>
        }

        if (this.props.Apply) {
            go_to_note =
                <div>
                    <li>
                        <div style={{
                            padding: "3.5%",
                            color: "#5e5e5e"
                        }}>
                            <div>
                                <input
                                    onClick={this.props.Apply}
                                    type="submit" name="login-submit"
                                    id="submit-all"
                                    className="btn btn-primary sidebarButt" value="Apply for RFQ"/>
                            </div>
                        </div>
                    </li>
                </div>
        }
        if (this.props.applications) {
            var that = this;
            var i = 0;
            var app =
                this.props.applications.map(function (application) {
                    i++;
                    return (
                        <li key={i} className="sidebar_li" style={{marginLeft: "8%", height: "25px"}}>
                            <a className="sidebar_a"
                               href={"/StandardApplyLoad/" + that.props.RFQ_id + "/" + application.company.user_id}>
                                <span className="glyphicon glyphicon-circle-arrow-down"></span>{application.company.name}
                            </a>
                        </li>
                    )
                });
            application =
                <div key={i} style={{marginBottom: "10px"}}>
                    <li style={{height: "30px"}} className="sidebar_li">
                        <a className="sidebar_a"
                           href={"/RFQSellingList/" + that.props.RFQ_id}>
                            <span className="glyphicon glyphicon-briefcase"></span>RFQ Selling List
                        </a>
                    </li>
                    {app}
                </div>

        }

        //*********************************FOR SETTINGS.JSX*************************************
        //CREATE FIVE BUTTONS


        return (
            <div className="navbar navbar-inverse navbar-fixed-left sidebar">

                <ul className="sidebar_ul">
                    {go_to_note}
                    {create_chahida_block}

                    {create_standard_block}
                    {create_standard_doc_butt_create}
                    {application}
                    {createMeetingNotice}
                    {meetingNotice}
                    {allowanceNikosh}
                    {cs}
                    {minutes}
                    {WO}
                    {clickFunc}

                    {create_forward_block}
                </ul>
            </div>


        );
    }
}