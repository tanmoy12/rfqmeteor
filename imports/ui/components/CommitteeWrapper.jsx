import React, {Component, PropTypes} from "react";
import {createContainer} from "meteor/react-meteor-data";
import Committee from './Committee';

class CommitteeWrapper extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        if (this.props.members && this.props.allusers) {
            return (
                    <Committee members={this.props.members} allusers={this.props.allusers} name={this.props.name}/>
                )
        }
        else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}

CommitteeWrapper.propTypes = {
    members: PropTypes.array.isRequired,
    allusers: PropTypes.array.isRequired
};


export default createContainer(props => {
    //console.log(props.name);
    return {
        members: Meteor.users.find(
            {
                'profile.committee.name': props.name,

            }).fetch(),
        allusers: Meteor.users.find(
            {
                'profile.committee.name': {$ne: props.name}
            },
        ).fetch()

    };
}, CommitteeWrapper);