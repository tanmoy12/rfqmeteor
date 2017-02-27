import React, {Component} from "react";


export default class SideNote extends  Component {
    loadChahida(e){
        FlowRouter.go('/ChahidaPotro/' + this.props.ChahidaPotro);
    }

    render() {
        return (
            <div className="col-md-3">
                <div>
                    <div id="sidejumbotron" className="col-md-12 jumbotron">
                        <nav className=" navbar-custom navbar navbar-default text-center">
                            <div className="container">
                                <div className="navbar-header">
                                    <a onClick={this.loadChahida.bind(this)} className="navbar-brand" href="#">Chahida Potro</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div id="SideJumbobody" className="col-md-12 jumbotron">
                        <p id="TITLERFQ">RFQ TITLE</p>
                        <div>
                            <h4>Smoking Kills donot smoke please</h4>
                        </div>
                        <p id="TITLERFQ">Estimate</p>
                        <div>
                            <h4>$100,000</h4>
                        </div>
                        <p id="TITLERFQ">Intial</p>
                        <div>
                            <h4>Scientific officer</h4>
                        </div>


                    </div>
                    <div id="Note">
                        <div id="sidejumbotron" className="col-md-12 jumbotron">
                            <nav className=" navbar-custom navbar navbar-default text-center">
                                <div className="container">
                                    <div className="navbar-header">
                                        <a className="navbar-brand" href="#">NOTE</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div id="SideJumbobody" className="col-md-12 jumbotron">
                            <p id="TITLERFQ">NOTE</p>
                            <div>
                                <h4>Smoking Kills donot smoke please</h4>
                            </div>
                            <p id="TITLERFQ">Estimate</p>
                            <div>
                                <h4>$100,000</h4>
                            </div>
                            <p id="TITLERFQ">Intial</p>
                            <div>
                                <h4>Scientific officer</h4>
                            </div>


                        </div>
                    </div>
                    <div id="Untitled">
                        <div id="sidejumbotron" className="col-md-12 jumbotron">
                            <nav className=" navbar-custom navbar navbar-default text-center">
                                <div className="container">
                                    <div className="navbar-header">
                                        <a className="navbar-brand" href="#">UNTITLED</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div id="SideJumbobody" className="col-md-12 jumbotron">
                            <p id="TITLERFQ">UNtitled </p>
                            <div>
                                <h4>Smoking Kills donot smoke please</h4>
                            </div>
                            <p id="TITLERFQ">Estimate</p>
                            <div>
                                <h4>$100,000</h4>
                            </div>
                            <p id="TITLERFQ">Intial</p>
                            <div>
                                <h4>Scientific officer</h4>
                            </div>


                        </div>
                    </div>

                    <div id="Untitled2">
                        <div id="sidejumbotron" className="col-md-12 jumbotron">
                            <nav className=" navbar-custom navbar navbar-default text-center">
                                <div className="container">
                                    <div className="navbar-header">
                                        <a className="navbar-brand" href="#">UNTITLED 2</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div id="SideJumbobody" className="col-md-12 jumbotron">
                            <p id="TITLERFQ">Untitled 2</p>
                            <div>
                                <h4>Smoking Kills donot smoke please</h4>
                            </div>
                            <p id="TITLERFQ">Estimate</p>
                            <div>
                                <h4>$100,000</h4>
                            </div>
                            <p id="TITLERFQ">Intial</p>
                            <div>
                                <h4>Scientific officer</h4>
                            </div>


                        </div>
                    </div>
                    <div id="Untitled3">
                        <div id="sidejumbotron" className="col-md-12 jumbotron">
                            <nav className=" navbar-custom navbar navbar-default text-center">
                                <div className="container">
                                    <div className="navbar-header">
                                        <a className="navbar-brand" href="#">UNTITLED 3</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div id="SideJumbobody" className="col-md-12 jumbotron">
                            <p id="TITLERFQ">Untitled 3</p>
                            <div>
                                <h4>Smoking Kills donot smoke please</h4>
                            </div>
                            <p id="TITLERFQ">Estimate</p>
                            <div>
                                <h4>$100,000</h4>
                            </div>
                            <p id="TITLERFQ">Intial</p>
                            <div>
                                <h4>Scientific officer</h4>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        );
    }
}
