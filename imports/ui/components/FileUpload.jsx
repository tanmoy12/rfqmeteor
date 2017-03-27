import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import IndividualFile from './FileIndividualFile.jsx';
//import {_} from 'meteor/underscore';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        //  this.state.products = [];
        this.state = {
            uploading: [],
            progress: 0,
            inProgress: false
        };
    }

    uploadIt(e){
        "use strict";
        e.preventDefault();
        var that = this;
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            // We upload only one file, in case
            // there was multiple files selected
            var file = e.currentTarget.files[0];
            //console.log(file.width);
            if (file) {
                let uploadInstance = ImagesCol.insert({
                    file: file,
                    meta: {
                        locator: that.props.fileLocator,
                        userId: Meteor.userId() // Optional, used to check on server for file tampering
                    },
                    streams: 'dynamic',
                    chunkSize: 'dynamic',
                    allowWebWorkers: true // If you see issues with uploads, change this to false
                }, false);

                uploadInstance.on('uploaded', function (error, fileObj) {
                    console.log('uploaded: ', fileObj);
                    that.setState({
                        uploading: [],
                        progress: 0,
                        inProgress: false
                    });
                });

                uploadInstance.on('error', function (error, fileObj) {
                    console.log('Error during upload: ' + error);
                });

                uploadInstance.start(); // Must manually start the upload
            }
        }
    }

    // This is our progress bar, bootstrap styled
    // Remove this function if not needed
    showUploads() {

        if (!_.isEmpty(this.state.uploading)) {
            return <div>
                {this.state.uploading.file.name}

                <div className="progress progress-bar-default">
                    <div style={{width: this.state.progress + '%'}} aria-valuemax="100"
                         aria-valuemin="0"
                         aria-valuenow={this.state.progress || 0} role="progressbar"
                         className="progress-bar">
                        <span className="sr-only">{this.state.progress}% Complete (success)</span>
                        <span>{this.state.progress}%</span>
                    </div>
                </div>
            </div>
        }
    }

    render() {
        if (this.props.docs) {
            'use strict';

            let fileCursors = this.props.docs;

            // Run through each file that the user has stored
            // (make sure the subscription only sends files owned by this user)

            let showit = fileCursors.map((aFile, key) => {
                console.log(aFile._id);

                let link = ImagesCol.findOne({_id: aFile._id}).link();  //The "view/download" link

                // Send out components that show details of each file
                return <div key={'file' + key}>
                    <IndividualFile
                        fileName={aFile.name}
                        fileUrl={link}
                        fileId={aFile._id}
                        fileSize={aFile.size}
                    />
                </div>
            });

            return <div>
                <div className="row">
                    <div className="col-md-12">
                        <p>Upload New File:</p>
                        <input type="file" id="fileinput" disabled={this.state.inProgress} ref="fileinput"
                               onChange={this.uploadIt.bind(this)}/>
                    </div>
                </div>

                <div className="row m-t-sm m-b-sm">
                    <div className="col-md-6">

                        {this.showUploads()}

                    </div>
                    <div className="col-md-6">
                    </div>
                </div>

                {showit}

            </div>
        }
        else return <div></div>
    }
};


FileUpload.propTypes = {
    docs: PropTypes.array.isRequired
};

export default createContainer(() => {

    return {
        docs: ImagesCol.find().fetch()
    };
}, FileUpload);