import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

export default class LoginCaraousal extends Component {

    autoplayFunc(){
        $('#myCarousel').carousel({
            interval: 3000,
            cycle: true
        });
    }

    render() {
        return (
            <div className="container" style={{padding: "0",width: "100%"}}>

                <div id="myCarousel" className="carousel slide" data-ride="carousel" onMouseOver={this.autoplayFunc.bind(this)}>

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img className="d-block img-fluid" src="/img1.jpg" alt="First slide" style={{width: "100%"}}/>
                            <div className=" carousel-caption">
                                <h3>DRICM</h3>
                                <p>Designated Reference Institute for Chemical Measurements</p>
                            </div>
                        </div>
                        <div className="item">
                            <img className="d-block img-fluid" src="/img2.jpg" alt="Second slide"  style={{width: "100%"}}/>
                            <div className=" carousel-caption">
                                <h3>DRICM</h3>
                                <p>Designated Reference Institute for Chemical Measurements</p>
                            </div>
                        </div>
                        <div className="item">
                            <img className="d-block img-fluid" src="/img3.jpg" alt="Third slide"  style={{width: "100%"}}/>
                            <div className=" carousel-caption">
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
