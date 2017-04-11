import React, {Component, PropTypes} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <DayPicker onDayClick={ day => console.log(day) } />
            </div>
        );

    }
}