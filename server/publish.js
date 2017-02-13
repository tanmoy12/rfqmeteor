Meteor.publish('rfqdetails', function () {
    return RFQDetails.find();
});

Meteor.publish('chahidapotro', function () {
    return ChahidaPotro.find();
});