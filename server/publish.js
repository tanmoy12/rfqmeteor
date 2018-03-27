import {check} from 'meteor/check';

Meteor.publish('files.images.all', function () {
    return ImagesCol.find().cursor;
});

Meteor.publish('rfqdetails', function () {
    return RFQDetails.find();
});

Meteor.publish('rfqdetailsone', function (id) {
    return RFQDetails.find(id);
});

Meteor.publish('allUserData', function () {
    return Meteor.users.find();
});

Meteor.publish("notifications", function (id) {
    check(id, String);
    return Notifications.find({to_id: id});
});

Meteor.publish("allnotifications", function () {

    return Notifications.find();
});