import React, {Component, PropTypes} from 'react';
import ReactDOM from "react-dom";

export default class SideBar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {


        return (
            <ul className="nav nav-stacked nav2" id="sidebar2">
                <li style={{marginTop: 0}}><a href="#sec0">Settings</a></li>
                <li style={{marginTop: 0}}><a href="#sec1">Commitee</a></li>
                <li style={{marginTop: 0}}><a href="#sec2">Create Standard Document</a></li>
                <li style={{marginTop: 0}}><a href="#sec3">Create Standard Document</a></li>
                <li style={{marginTop: 0}}><a href="#sec4">Create Standard Document</a></li>
            </ul>




        );
    }
}