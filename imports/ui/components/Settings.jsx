import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import $ from "jquery";
import Committee from "./CommitteeWrapper";


export default class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {};
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

        }
    }

    render() {
        var sideBar =
            <div className="navbar navbar-inverse navbar-fixed-left sidebar">

                <ul className="sidebar_ul">
                    <div>
                        <li>
                            <a className="sidebar_a" href="#">
                                Committee
                            </a>
                        </li>
                    </div>
                </ul>
            </div>

        var height = screen.height - (screen.height * 0.257);
        return (
            <div className="row ">
                <div className="col-md-3">
                    {sideBar}
                </div>
                <div className="col-md-9" style={{minHeight: height}}>
                    <div ref="div1">
                        <div>
                            <Committee refVal="com1" name="Specification Committee"

                            />
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}