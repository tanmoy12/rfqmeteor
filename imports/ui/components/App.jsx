import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import Caraousal from './LoginCaraousal';
import Footer from './Footer';


export default class App extends Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar"
                                    aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#" style={{paddingLeft: "10%", paddingTop: "3.3%"}}>
                                <span >
                                    <img src="/dricmlogo.jpg" style={{width: "27%", height: "auto"}}/>
                                </span>
                                <span style={{paddingLeft: "4%", paddingTop: "6.2%"}}>DRICM</span>
                            </a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Log In </a>
                                    <ul className="dropdown-menu dropdown-lr" role="menu">
                                        <div className="col-lg-12">
                                            <div className="text-center"><h4><b>Log In</b></h4>
                                            </div>
                                            <LoginForm/>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/*<div style={{marginBottom: "50%"}}>*/}
                    {/*<SignUp/>*/}
                {/*</div>*/}
                <Caraousal/>
                <div>
                    <Footer/>
                </div>
            </div>

        );
    }
}
