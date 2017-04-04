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

        };
    }

    sidebar_link_click(e) {
        //console.log(e);
        if (e == "1") {
            this.setState({
                addClass1: "current sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",


            });
        }
        else if (e == "2") {
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "current sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",


            });
        }
        else if (e == "3") {
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "current sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",


            });
        }
        else if (e == "4") {
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "current sidebar_li",
                addClass5: "sidebar_li",


            });
        }
        else if (e == "5") {
            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "current sidebar_li",


            });
        }


    }


    render() {
        var forward_to_style = {
            // backgroundColor: "#7a9c9c",
            // backgroundColor: "#7a9c9c",
            backgroundColor: "#222",
            padding: "3.5%",
            margin: "3%",
            color: "white",
            borderRadius: "3px",

        }
        var forward_to;
        var chahidapotro_block;
        if (this.state.addClass1 == "current sidebar_li") {
            chahidapotro_block =
                <div style={forward_to_style}>
                    <p>Forward To:&emsp;&emsp;&emsp;
                        যাচাইকারী
                    </p>

                    <div className="form-group" style={{backgroundColor: "#2b2b2a", borderRadius: "3px"}}>
                        <select ref="AcOf" className="form-control">
                            {/*{this.renderAcOf()}*/}
                            Shadman
                        </select>
                    </div>

                    <div>
                        <input
                            type="submit" name="login-submit"
                            id="submit-all"
                            className="btn btn-primary sidebarButt"  value="Forward"/>
                    </div>
                </div>
        }
        if (this.state.addClass2 == "current sidebar_li") {
            forward_to =
                <div style={forward_to_style}>
                    <p>Forward To:&emsp;&emsp;&emsp;
                        যাচাইকারী
                    </p>
                    <div className="form-group" style={{backgroundColor: "#2b2b2a", borderRadius: "3px"}}>
                        <select ref="ScOf" className="form-control">


                        </select>
                    </div>

                    <div>
                        <input type="submit" name="login-submit"
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