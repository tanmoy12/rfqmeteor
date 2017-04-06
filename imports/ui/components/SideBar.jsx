import React, {Component, PropTypes} from 'react';

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

        butt_val_create(x){
            var str = "Go To ";
            str = str.con 
        }

        var forward_to;
        var chahidapotro_block;
        if (this.state.addClass1 == "current sidebar_li" && this.state.minimizeDiv[0] == true) {
            chahidapotro_block =
                <div style={forward_to_style}>

                    <div className="form-group">
                        {
                            this.props.chahidaStandardBlock.info.map(function (x) {
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

                    <div>
                        <form action={this.props.chahidaStandardBlock.link} method="get">
                            <input
                                type="submit" name="login-submit"
                                id="submit-all"
                                className="btn btn-primary sidebarButt" value="Go To"/>
                        </form>
                    </div>
                </div>
        }
        if (this.state.addClass2 == "current sidebar_li" && this.state.minimizeDiv[1] == true) {
            forward_to =
                <div style={forward_to_style}>
                    <p style={{display: "inline-block", float: "left", marginLeft: "2%"}}>Forward To:</p>
                    <p style={{
                        display: "inline-block",
                        float: "right",
                        marginRight: "2%"
                    }}>{this.props.forwardTo.toWhom}</p>


                    <div className="form-group" style={{borderRadius: "3px"}}>
                        <select ref="AcOf" className="form-control" style={{color: "white"}}>
                            {/*<option value="" disabled selected hidden>Select to forward</option>*/}
                            {
                                this.props.forwardTo.dropdownList.map(function (username) {
                                    return (<option value={username} key={username}
                                                    style={{color: "black"}}>{username}</option>)
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <input
                            type="submit" name="login-submit"
                            id="submit-all"
                            className="btn btn-primary sidebarButt" value="Forward"/>
                    </div>
                </div>
        }

        return (
            <div className="navbar navbar-inverse navbar-fixed-left sidebar">

                <ul className="sidebar_ul">
                    <li className={this.state.addClass1}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "1")}
                           href="#">চাহিদা পত্র</a>
                        {chahidapotro_block}
                    </li>
                    <li className={this.state.addClass2}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "2")} href="#">Forward
                            to</a>
                        {forward_to}
                    </li>
                    <li className={this.state.addClass3}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "3")} href="#">Blog</a>
                    </li>
                    <li className={this.state.addClass4}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "4")} href="#">About</a>
                    </li>
                    <li className={this.state.addClass5}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "5")} href="#">Contact</a>
                    </li>
                </ul>
            </div>


        );
    }
}