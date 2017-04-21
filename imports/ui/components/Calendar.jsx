import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';

import DatePicker from "react-bootstrap-date-picker";

export default class MyDayPicker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: new Date().toISOString(),
        };
    }

    handleChange(value, formattedValue) {
        this.setState({
            value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
            formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
        });
        this.props.dateSubChange(value);
    }
    componentDidUpdate(){
        // Access ISO String and formatted values from the DOM.
        var hiddenInputElement = document.getElementById("example-datepicker");
    }
    render(){

        var cal = <span style={{fontSize: "11px", top: "0", left: "3px"}} className='glyphicon glyphicon-remove'></span>;
        var prev_butt_elem = <span className='glyphicon glyphicon-menu-left'></span>;
        var next_butt_elem = <span className='glyphicon glyphicon-menu-right'></span>;

        return (
            <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange.bind(this)}
                        dateFormat="DD/MM/YYYY"
                        previousButtonElement={prev_butt_elem} nextButtonElement={next_butt_elem}
                        style={{width: "100%"}} />
        );
    }
}