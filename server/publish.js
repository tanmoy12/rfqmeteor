Meteor.publish('rfqdetails', function () {
    return RFQDetails.find();
});

Meteor.publish('chahidapotro', function () {
    return Chahida_Potro.find();
});

Meteor.publish('allUserData', function () {
    return Meteor.users.find();
});