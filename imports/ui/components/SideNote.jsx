import React, {Component} from "react";


export default class SideNote extends Component {
    loadChahida(e) {
        FlowRouter.go('/ChahidaPotroload/' + this.props.RFQ._id);
    }

    makeChahidaSide() {
        return (
            <div>
                <div id="sidejumbotron" className="col-md-12 jumbotron">
                    <nav className=" navbar-custom navbar navbar-default text-center">
                        <div className="container">
                            <div className="navbar-header">
                                <a onClick={this.loadChahida.bind(this)} className="navbar-brand" href="#">Chahida
                                    Potro</a>
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
                        <h4>{this.props.RFQ.chahida.estimate}</h4>
                    </div>
                    <p id="TITLERFQ">Intiated by</p>
                    <div>
                        <h4>{this.props.RFQ.chahida.initiator.username}</h4>
                    </div>
                </div>
            </div>
        )
    }

    makeStandardDoc(){
        if(this.props.RFQ.standard){
            return (
                <div id="sidejumbotron" className="col-md-12 jumbotron">
                    <nav className=" navbar-custom navbar navbar-default text-center">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand" href={"/StandardDocumentLoad/"+ this.props.RFQ._id}>
                                    Standard Document</a>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }else{
            return (
                <div id="sidejumbotron" className="col-md-12 jumbotron">
                    <nav className=" navbar-custom navbar navbar-default text-center">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand" href={"/StandardDocument/"+ this.props.RFQ._id}>
                                    Standard Document</a>
                            </div>
                        </div>
                    </nav>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-md-3">
                {this.makeChahidaSide()}
                {this.makeStandardDoc()}
            </div>

        );
    }
}
