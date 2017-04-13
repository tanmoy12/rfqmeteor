import React, {Component, PropTypes} from 'react';
import ReactDOM from "react-dom";

var specCommDivRows = [];
var spec_id = 0;
export default class Committee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColorComm: "#337ab7",
            commDivShow: false,
            noOfSpecCommMem: 0,
            specCommButtClassRows: [],
            specCommMemAdd: false,
        };

    }

    commClicked(e){
        var x = !this.state.commDivShow;
        newcommDivShow = x;

        var col = "#337ab7";
        if(x){
            col = "darkred";
        }

        var newBgColorComm = col;
        this.state.specCommButtClassRows = [];
        this.state.specCommButtClassRows.push("btn btn-success btn-add bb");
        this.setState({
            commDivShow: newcommDivShow,
            bgColorComm: newBgColorComm,
            specCommMemAdd: true
        });
        // console.log("specCommButtClassRows : "+this.state.specCommButtClassRows);


    }

    specCommMemAddButtClick(todo, re){
        var x = parseInt(this.state.noOfSpecCommMem);
        if(todo=="add"){
            x++;
            this.setState({
                specCommMemAdd: true,
            });

        }
        else{
            var elm = document.getElementById(re);
            //console.log(elm);
            var newAra = [];
            // console.log("BEFORE");
            // console.log(specCommDivRows);
            for(var i=0;i<specCommDivRows.length;i++){
                if(specCommDivRows[i].ref!=elm.id){
                    newAra.push(specCommDivRows[i]);
                }
                //console.log(specCommDivRows[i].ref);
                //console.log(elm.ref);
            }
            // console.log(newAra);
            specCommDivRows = [];
            for(var i=0;i<newAra.length;i++){
                specCommDivRows.push(newAra[i]);
            }
            // console.log("AFTER");
            // console.log(specCommDivRows);
            x--;


        }

        var a = [];
        for(var i=0;i<x;i++){
            a[i] = "btn btn-danger btn-remove bb";
        }
        a[x] = "btn btn-success btn-add bb";

        this.setState({
            noOfSpecCommMem: x,
            specCommButtClassRows: a,
        });

    }

    render() {

        var specCommDiv;

        if(this.state.commDivShow){
            var x = parseInt(this.state.noOfSpecCommMem);
            if(this.state.specCommMemAdd){
                specCommDivRows.push(<div key={spec_id.toString()} ref={spec_id.toString()} id={spec_id.toString()} className="row" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                    <div className="control-group" id="fields">
                        <div className="controls">
                            <form role="form" autocomplete="off">
                                <div className="entry input-group col-xs-3">
                                    <input className="form-control" name="fields[]" type="text" placeholder="Type something" />
                                    <span className="input-group-btn">
                                            <button className="btn btn-danger btn-remove bb" onClick={this.specCommMemAddButtClick.bind(this, "rmv", spec_id.toString())} type="button">
                                                 <span className="glyphicon glyphicon-minus"></span>
                                             </button>
                                            <button className="btn btn-success btn-add bb" onClick={this.specCommMemAddButtClick.bind(this, "add", spec_id.toString())} type="button">
                                                <span className="glyphicon glyphicon-plus"></span>
                                            </button>
                                        </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>);
                this.setState({
                    specCommMemAdd: false,
                });
                spec_id++;
            }
            //console.log(specCommDivRows);

        }

        var specCommDivRow2 = [];
        if(this.state.commDivShow){
            for(var i=0;i<specCommDivRows.length;i++){
                specCommDivRow2.push(specCommDivRows[i]);
            }
        }

        var specCommitte =
            <div>
                <button type="button" className="btn btn-primary"
                        style={{width: "100%", backgroundColor: this.state.bgColorComm}}
                        onClick={this.commClicked.bind(this)}>
                    {this.props.name}
                </button>
                {specCommDivRow2}
            </div>


        return (
            <div  ref={this.props.refVal}>
                {specCommitte}
            </div>
        );
    }
}