import React, {Component, PropTypes} from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

export default class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    handleCalender(){
        const el = findDOMNode(this.refs.datetimepicker1);
        $(el).datetimepicker();
    }


    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <div className='input-group date' ref='datetimepicker1' onClick={this.handleCalender.bind(this)}>
                                <input type='text' className="form-control" />
                                <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}