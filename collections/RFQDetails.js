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
    },
    estimate: {
        type: Number,
        label: 'estimate'
    },
    step_no: {
        type: Number,
        label: 'step_no',
        optional: true,
        autoValue: function () {
            return 1;
        },
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
        autoValue: function () {
            return this.userId;
        },
        optional: true
    },
    chahida_id:{
        type: String,
        label: 'chahida_id'
    }
});

RFQDetails.attachSchema(RFQDetailsSchema);