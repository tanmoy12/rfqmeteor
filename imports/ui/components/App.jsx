import React, {Component} from 'react';
import LoginForm from "./LoginForm";

import Caraousal from './LoginCaraousal';
import Footer from './Footer';


export default class App extends Component {

    render() {
        return (

            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header" style={{marginLeft : "2rem", marginRight: "2rem"}}>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar"
                                    aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/" style={{padding: 0, paddingTop: "4%"}}>
                                <span >
                                    <img src="/dricmlogo.jpg" style={{width: "27%", height: "auto"}}/>
                                </span>
                                <span style={{paddingLeft: "4%"}}>eRFQ</span>
                            </a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right" style={{marginLeft : "2rem", marginRight: "2rem"}}>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Sign in </a>
                                    <ul className="dropdown-menu dropdown-lr" role="menu">
                                        <div className="col-lg-12">
                                            <div className="text-center"><h4><b>Sign in</b></h4>
                                            </div>
                                            <LoginForm/>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <Caraousal/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>

        );
    }
}
