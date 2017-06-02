import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <footer className="footer-distributed">

                <div className="footer-right ">

                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>

                </div>

                <div className="footer-left">


                    <a className="navbar-brand" href=""> eRFQ System &copy; 2017</a>
                </div>

            </footer>
        );

    }
}