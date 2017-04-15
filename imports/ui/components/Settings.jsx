import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import Committee from './Committee';


export default class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addClass1: "sidebar_li",
            addClass2: "sidebar_li",
            addClass3: "sidebar_li",
            addClass4: "sidebar_li",
            addClass5: "sidebar_li",
            commShow: [false,false,false,false,false]
        };
    }



    sidebar_link_click(e) {
        //console.log(e);
        if (e == "1") {

            //SCROLL ANIMATE
            var x = this.refs.div1;
            var top = $(x).offset().top - 70;
                $('html, body').animate({
                    scrollTop: top
                }, 600);

            this.setState({
                addClass1: "current sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",

            });
        }
        else if (e == "2") {

            //SCROLL ANIMATE
            var x = this.refs.div2;
            var top = $(x).offset().top - 70;
            $('html, body').animate({
                scrollTop: top
            }, 600);

            this.setState({
                addClass1: "sidebar_li",
                addClass2: "current sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",

            });
        }
        else if (e == "3") {

            //SCROLL ANIMATE
            var x = this.refs.div3;
            var top = $(x).offset().top - 70;
            $('html, body').animate({
                scrollTop: top
            }, 600);

            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "current sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",


            });
        }
        else if (e == "4") {

            //SCROLL ANIMATE
            var x = this.refs.div4;
            var top = $(x).offset().top - 70;
            $('html, body').animate({
                scrollTop: top
            }, 600);

            this.setState({
                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "current sidebar_li",
                addClass5: "sidebar_li",

            });
        }
        else if (e == "5") {

            //SCROLL ANIMATE
            var x = this.refs.div5;
            var top = $(x).offset().top - 70;
            $('html, body').animate({
                scrollTop: top
            }, 600);

            this.state = {

                addClass1: "sidebar_li",
                addClass2: "sidebar_li",
                addClass3: "sidebar_li",
                addClass4: "sidebar_li",
                addClass5: "sidebar_li",
                bgColorSpecComm: "#337ab7",
            };
        }


    }

    render() {
        var sideBar =
            <div className="navbar navbar-inverse navbar-fixed-left sidebar">
                <ul className="sidebar_ul">
                    <li className={this.state.addClass1}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "1")}>
                            Settings
                        </a>
                    </li>

                    <li className={this.state.addClass2}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "2")}>
                            Committee
                        </a>
                    </li>

                    <li className={this.state.addClass3}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "3")}>
                            Create Standard Doc
                        </a>
                    </li>

                    <li className={this.state.addClass4}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "4")}>
                            Create Standard Doc
                        </a>
                    </li>

                    <li className={this.state.addClass5}>
                        <a className="sidebar_a" onClick={this.sidebar_link_click.bind(this, "5")}>
                            Create Standard Doc
                        </a>
                    </li>
                </ul>

            </div>
        var height = screen.height - (screen.height*0.257);
        return (
            <div className="row ">
                <div className="col-md-2">
                    {sideBar}
                </div>
                <div className="col-md-10" style={{minHeight: height}}>
                    <div  ref="div1" style={{marginLeft:"3%",marginRight:"3%", marginTop:"2%", marginBottom:"6%",backgroundColor:"white"}}>
                        <Committee refVal="com1" name="Specification Committee" idx="0"/>
                    </div>

                    <div  ref="div2" style={{marginLeft:"3%",marginRight:"3%", marginTop:"2%", marginBottom:"6%",backgroundColor:"white"}}>
                        <Committee refVal="com2" name="Verification Committee" idx="1"/>
                    </div>

                </div>
            </div>
        );

    }
}