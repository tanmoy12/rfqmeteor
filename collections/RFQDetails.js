RFQDetails = new Mongo.Collection('rfqdetails');

RFQDetails.allow({
   insert: function (userId, doc) {
       return !!userId;
   }
});

RFQDetailsSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'title'
    }
});

RFQDetails.attachSchema(RFQDetailsSchema);