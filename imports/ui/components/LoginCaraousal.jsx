import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';


render()
{
    return (
        <div id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <h1>RFQ eFiling System</h1>
                        <p>eRFQ is a fully automated request for quotation system. <br/>
                            It creates all necessary documents with secured document signing techniques, <br/>
                            real time task notifications, and online RFQ application by companies. <br/>
                            The ful system is made in the light of constitution of the government of Bangladesh.
                        </p>
                        
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img src="RFQSSS.png"/>
                    </div>

                </div>
            </div>

        </div>
    );
}
}
