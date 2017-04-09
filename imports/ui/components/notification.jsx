import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";

export default class Not extends Component {
    constructor(props) {
        super(props);
    }

    datefromcreate(createdAt) {
        var date = createdAt.getDate();
        var month = createdAt.getMonth() + 1;
        var year = createdAt.getFullYear();
        var dateshow;
        if (month < 10) {
            dateshow = date + '/0' + month + '/' + year;
        } else {
            dateshow = date + '/' + month + '/' + year;
        }
        return dateshow;
    }

    render(){
        var not= this.props.notitem;
        let link = '';
        const cursor = ImagesCol.findOne({_id: not.from.pic});
        if (cursor) {
            link = cursor.link();
        }
        var message= '';
        if(not.type==1){
            message = 'asked to verify a Chahida potro';
        }
        var rfqlink= '/Note/' + not.RFQ_id;
        return (
            <a key={not._id} href={rfqlink} className="notification col-md-12 ">
                <div className="media-left">
                    <div className="media-object">
                        <img id="profile" src={link} alt="User Image"/>
                    </div>
                </div>
                <div className="media-body">
                    <p><strong>{not.from.username}</strong> {message}
                    </p>
                    <p id="noti">{this.datefromcreate(not.createdAt)}</p>
                </div>
            </a>
        )
    }
}



