import {check} from 'meteor/check';

Meteor.publish('rfqdetails', function () {
    return RFQDetails.find();
});


Meteor.publish('allUserData', function () {
    return Meteor.users.find();
});

Meteor.publish("chahidapotro", function (id) {
    check(id, String);

    return Chahida_Potro.find({RFQ_id: id});

});