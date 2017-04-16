import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';
import DatePicker from 'react-datepicker';
import moment from 'moment';


import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// require('react-datepicker/dist/react-datepicker-cssmodules.css');

export default class MyDayPicker2 extends Component{
    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(), // The value of the input field
            displayName: 'Example',
        };
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render(){
        return (<DatePicker style={{marginLeft: "7px", marginRight: "7px"}}
            selected={this.state.startDate}
            onChange={this.handleChange.bind(this)} />);
    }
}