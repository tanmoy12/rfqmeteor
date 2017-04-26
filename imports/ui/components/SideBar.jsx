import React, {Component, PropTypes} from 'react';
import ReactDOM from "react-dom";

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signed: false,
            addClass1: "sidebar_li",
            addClass2: "sidebar_li",
            addClass3: "sidebar_li",
            addClass4: "sidebar_li",
            addClass5: "sidebar_li",
            minimizeDiv: [false, false, false, false, false],
        };
    }

    sidebar_link_click(e) {
        //console.log(e);
        if (e == "1") {
            var x = !this.state.minimizeDiv[0];
            var newMinimizeDiv = {};
            for (var i = 0; i < 5; i++) {
                newMinimizeDiv[i] = this.state.minimizeDiv[i];
            }
            newMinimizeDiv[0] = x;
            // console.log(newMinimizeDiv);
            this.setState({
                addClass1: "current sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",
                minimizeDiv: newMinimizeDiv

            });
        }
        else if (e == "2") {
            var x = !this.state.minimizeDiv[1];
            var newMinimizeDiv = {};
            for (var i = 0; i < 5; i++) {
                newMinimizeDiv[i] = this.state.minimizeDiv[i];
            }
            newMinimizeDiv[1] = x;
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "current sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",
                minimizeDiv: newMinimizeDiv

            });
        }
        else if (e == "3") {
            var x = !this.state.minimizeDiv[2];
            var newMinimizeDiv = {};
            for (var i = 0; i < 5; i++) {
                newMinimizeDiv[i] = this.state.minimizeDiv[i];
            }
            newMinimizeDiv[2] = x;
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "current sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",
                minimizeDiv: newMinimizeDiv

            });
        }
        else if (e == "4") {
            var x = !this.state.minimizeDiv[3];
            var newMinimizeDiv = {};
            for (var i = 0; i < 5; i++) {
                newMinimizeDiv[i] = this.state.minimizeDiv[i];
            }
            newMinimizeDiv[3] = x;
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "current sidebar_li",
                addClass5: "sidebar_li",
                minimizeDiv: newMinimizeDiv

            });
        }
        else if (e == "5") {
            var x = !this.state.minimizeDiv[4];
            var newMinimizeDiv = {};
            for (var i = 0; i < 5; i++) {
                newMinimizeDiv[i] = this.state.minimizeDiv[i];
            }
            newMinimizeDiv[4] = x;
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "current sidebar_li",

                minimizeDiv: newMinimizeDiv

            });
        }


    }

    butt_val_create(x){
        var str = "Go To ";
        str = str.concat(x);
        return str;
    }

    create_chahida_link(x){
        if(x.name==="চাহিদা পত্র"){

        }
    }

    handleForward(e){
        e.preventDefault();
        var select = ReactDOM.findDOMNode(this.refs.ForwardSelect).value.trim();
        this.props.forwardTo.sendSelect(select);
    }

    render() {
        var forward_to_style = {
            // backgroundColor: "#7a9c9c",
            // backgroundColor: "#7a9c9c",
            backgroundColor: "#222",
            padding: "3.5%",
            // margin: "3%",
            color: "white",
            borderRadius: "3px",

        }

        var forward_to;
        var chahidapotro_block;
        var standard_block;


        //CHAHIDA POTRO CREATE
        if ((this.state.addClass1 == "current sidebar_li" && this.state.minimizeDiv[0] == true)) {
            chahidapotro_block =
                <div style={forward_to_style}>
                    <div className="form-group">
                        {
                            this.props.chahidaBlock.info.map(function (x) {
                                return (<div key={x.title} style={{marginLeft: "22px"}}>
                                    <p style={{
                                        color: "white",
                                        fontStyle: "italic",
                                        fontSize: "x-small",
                                        marginBottom: "5px"
                                    }}>
                                        {x.title}
                                    </p>
                                    <p style={{color: "white", marginBottom: "25px"}}>{x.details}</p>
                                </div>)
                            })
                        }
                    </div>

                    <nav className=" navbar-custom navbar navbar-default text-center">
                        <div className="container">
                            <div className="navbar-header">
                                <a href={this.props.chahidaBlock.link} className="navbar-brand">Chahida
                                    Potro</a>
                            </div>
                        </div>
                    </nav>
                </div>
        }
        var create_chahida_block;
        if(this.props.chahidaBlock) {
            create_chahida_block =
                <div>
                    <li className={this.state.addClass1}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "1")}
                           href="#">চাহিদা পত্র</a>
                        {chahidapotro_block}
                    </li>
                </div>
        }


        //FORWARD CREATE
        if (this.state.addClass2 == "current sidebar_li" && this.state.minimizeDiv[1] == true && this.props.forwardTo) {
            forward_to =
                <div style={forward_to_style}>
                    <p style={{display: "inline-block", float: "left", marginLeft: "4%"}}>To:</p>
                    <p style={{
                        display: "inline-block",
                        float: "right",
                        marginRight: "2%"
                    }}>{this.props.forwardTo.toWhom}</p>

                    <div className="form-group" style={{borderRadius: "3px"}}>
                        <select ref="ForwardSelect" className="form-control" style={{color: "white"}}>
                            {
                                this.props.forwardTo.dropdownList.map(function (User) {
                                    return (<option value={User._id} key={User._id}
                                                    style={{color: "black"}}>{User.profile.name}</option>)
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
        }
        var create_forward_block;
        if(this.props.forwardTo) {
            create_forward_block =
                <div>
                    <li className={this.state.addClass2}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "2")} href="#">Forward
                            to</a>
                        {forward_to}
                    </li>
                </div>
        }
        //SATNDARD DOC CREATE
        if ((this.state.addClass3 == "current sidebar_li" && this.state.minimizeDiv[2] == true)) {
            standard_block =
                <div style={forward_to_style}>
                    <div className="form-group">
                        {
                            this.props.standardBlock.info.map(function (x) {
                                return (<div key={x.title} style={{marginLeft: "22px"}}>
                                    <p style={{
                                        color: "white",
                                        fontStyle: "italic",
                                        fontSize: "x-small",
                                        marginBottom: "5px"
                                    }}>
                                        {x.title}
                                    </p>
                                    <p style={{color: "white", marginBottom: "25px"}}>{x.details}</p>
                                </div>)
                            })
                        }
                    </div>

                    <nav className=" navbar-custom navbar navbar-default text-center">
                        <div className="container">
                            <div className="navbar-header">
                                <a href={this.props.standardBlock.link} className="navbar-brand">Standard Document</a>
                            </div>
                        </div>
                    </nav>
                </div>
        }
        var create_standard_block;
        if(this.props.standardBlock) {
            create_standard_block =
                <div>
                    <li className={this.state.addClass3}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "3")} href="#">Standard Document</a>
                        {standard_block}
                    </li>
                </div>
        }


        //CREATE_STANDARD_DOC BUTT CREATE
        var create_standard_doc_butt_create, allowanceNikosh,meetingNotice;
        if(this.props.createStandardDoc) {
            create_standard_doc_butt_create =
                <div>
                    <li className={this.state.addClass4}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "4")} href={this.props.createStandardDoc}>
                            Create Standard Document
                        </a>
                    </li>
                </div>
        }
        //Go To Note
        var go_to_note;
        if(this.props.goToNote) {
            go_to_note =
                <div>
                    <li className={this.state.addClass5}>
                        <a className="sidebar_a" href={this.props.goToNote}>
                            Go To Note
                        </a>
                    </li>
                </div>
        }
        if(this.props.allowanceNikosh) {
            allowanceNikosh =
                <div>
                    <li className={this.state.addClass4}>
                        <a className="sidebar_a" href={this.props.allowanceNikosh}>
                            Allowance Nikosh
                        </a>
                    </li>
                </div>
        }
        if(this.props.meetingNotice) {
            meetingNotice =
                <div>
                    <li className="sidebar_li">
                        <a className="sidebar_a" href={this.props.meetingNotice}>
                            Meeting Notice
                        </a>
                    </li>
                </div>
        }
        if(this.props.Apply) {
            go_to_note =
                <div>
                    <li className={this.state.addClass5}>
                        <button onClick={this.props.Apply} className="sidebar_a btn btn-link">
                            Apply
                        </button>
                    </li>
                </div>
        }

        //*********************************FOR SETTINGS.JSX*************************************
        //CREATE FIVE BUTTONS



        return (
            <div className="navbar navbar-inverse navbar-fixed-left sidebar">

                <ul className="sidebar_ul">
                    {go_to_note}
                    {create_chahida_block}
                    {create_forward_block}
                    {create_standard_block}
                    {create_standard_doc_butt_create}
                    {allowanceNikosh}
                    {meetingNotice}
                </ul>
            </div>


        );
    }
}