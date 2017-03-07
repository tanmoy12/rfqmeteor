import React, {Component} from "react";


export default class SideNote extends  Component {
    loadChahida(e){
        FlowRouter.go('/ChahidaPotroload/' + this.props.RFQ.chahida_id);
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
                        <p id="TITLERFQ">RFQ Title</p>
                        <div>
                            <h4>{this.props.RFQ.title}</h4>
                        </div>
                        <p id="TITLERFQ">Estimate</p>
                        <div>
                            <h4>{this.props.RFQ.estimate}</h4>
                        </div>
                        <p id="TITLERFQ">Intiated by</p>
                        <div>
                            <h4>{this.props.ini.username}</h4>
                        </div>


                    </div>

                </div>
            </div>

        );
    }
}
