import React, {Component, PropTypes} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.showCurrentDate = this.showCurrentDate.bind(this);
        this.state = {
            value: moment().format('ll'), // The value of the input field
            month: new Date(), // The month to display in the calendar
            showCalander: false,
        };
    }

    showCurrentDate() {
        this.daypicker.showMonth(this.state.month);
    }

    handleInputChange(e) {
        const { value } = e.target;

        // Change the current month only if the value entered by the user
        // is a valid date, according to the `L` format
        if (moment(value, 'L', true).isValid()) {
            this.setState({
                month: moment(value, 'll').toDate(),
                value,
            }, this.showCurrentDate);
        } else {
            this.setState({ value }, this.showCurrentDate);
        }
    }

    handleDayClick(day) {
        this.setState({
            value: moment(day).format('ll'),
            month: day,
        });
    }

    showCalender(){
        var x = !this.state.showCalander;
        this.setState({
            showCalander: x,
        });
    }

    render() {
        const selectedDay = moment(this.state.value, 'll', true).toDate();
        var calender;
        if(this.state.showCalander){
            calender =

                    <DayPicker
                        ref={ el => this.daypicker = el }
                        initialMonth={ this.state.month }
                        selectedDays={ selectedDay }
                        onDayClick={ this.handleDayClick }
                    />

        }
        return (
            <div>
                <p>
                    <input
                        type="text"
                        value={ this.state.value }
                        placeholder="YYYY-MM-DD"
                        onChange={ this.handleInputChange }
                        onFocus={ this.showCurrentDate }
                        onClick={this.showCalender.bind(this)}
                    />
                </p>
                {calender}
            </div>
        );

    }
}