RFQDetails = new Meteor.Collection('rfqdetails');

RFQDetails.allow({
   insert: function (userId, doc) {
       return !!userId;
   }
});

RFQDetailsSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'title',
        optional: true
    },
    estimate: {
        type: Number,
        label: 'estimate',
        optional: true
    },
    step_no: {
        type: Number,
        label: 'step_no',
        autoValue: function () {
            return 1;
        },
        optional: true
    },
    createdAt: {
        type: Date,
        label: 'date',
        autoValue: function () {
            return new Date();
        },
        optional: true
    },
    initiator: {
        type: String,
        label: 'initiator',
        optional: true
    }
});

RFQDetails.attachSchema(RFQDetailsSchema);