import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

export default class LoginCaraousal extends Component {

    render() {
        return (
            <div className="container">

                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" alt="DRICM "/>
                            <div className=" carousel-caption">
                                <h3>DRICM</h3>
                                <p>Designated Reference Institute for Chemical Measurements</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" alt=" Chania"/>
                            <div className=" carousel-caption">
                                <h3>DRICM</h3>
                                <p>Designated Reference Institute for Chemical Measurements</p>
                            </div>
                        </div>

                        <div className=" item">
                            <img src=" https://mdbootstrap.com/img/Photos/Slides/img%20(24).jpg" alt="Flower"/>
                            <div className="carousel-caption">
                                <h3>DRICM</h3>
                                <p>Designated Reference Institute for Chemical Measurements</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" alt="Flower"/>
                            <div className="carousel-caption">
                                <h3>DRICM</h3>
                                <p>Designated Reference Institute for Chemical Measurements</p>
                            </div>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>


        );
    }
}
