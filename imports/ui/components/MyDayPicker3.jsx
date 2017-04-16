import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';
import KendoDatePicker from 'kendo-ui-react-jquery-datepicker';
import moment from 'moment';


//Don't forget CSS, webpack used to include CSS
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';

export default class MyDayPicker3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: moment().format('ll'), // The value of the input field
            month: new Date(), // The month to display in the calendar
        };
    }

    render() {

        return (
            <KendoDatePicker>
                <input
                    className="dayPickerInput"
                    type="text"
                    value={this.state.value}
                    placeholder="YYYY-MM-DD"
                />
            </KendoDatePicker>);

    }
}