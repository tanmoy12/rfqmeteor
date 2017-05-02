import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import $ from 'jquery';
import Committee from './Committee';


export default class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }




    render() {

        return (
            <footer className="footer-distributed navbar-fixed-bottom">

                <div className="footer-right ">

                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>

                </div>

                <div className="footer-left">

                    {/*<p className="footer-links">*/}
                        {/*<a href="#">Home</a>*/}
                        {/*·*/}
                        {/*<a href="#">Blog</a>*/}
                        {/*·*/}
                        {/*<a href="#">Pricing</a>*/}
                        {/*·*/}
                        {/*<a href="#">About</a>*/}
                        {/*·*/}
                        {/*<a href="#">Faq</a>*/}
                        {/*·*/}
                        {/*<a href="#">Contact</a>*/}
                    {/*</p>*/}

                    <a className="navbar-brand" href="">Company Name &copy; 2015</a>
                </div>

            </footer>
        );

    }
}