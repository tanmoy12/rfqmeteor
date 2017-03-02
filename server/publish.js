import {check} from 'meteor/check';

Meteor.publish('rfqdetails', function () {
    return RFQDetails.find();
});
Meteor.publish('rfqdetailsone', function (id) {
    return RFQDetails.find(id);
});

Meteor.publish('allUserData', function () {
    return Meteor.users.find();
});

Meteor.publish("chahidapotro", function () {
    return Chahida_Potro.find();
});

Meteor.publish("chahidapotroone", function (id) {
    check(id, String);
    return Chahida_Potro.find(id);
});
Meteor.publish("notifications", function () {
    return Notifications.find();
});