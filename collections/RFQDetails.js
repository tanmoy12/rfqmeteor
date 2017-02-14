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
        label: 'estimate',
        autoValue: function () {
            return 0;
        }
    },
    step_no: {
        type: Number,
        label: 'step_no',
        autoValue: function () {
            return 1;
        }
    },
    createdAt: {
        type: Date,
        label: 'date',
        autoValue: function () {
            return new Date();
        }
    },
    initiator: {
        type: String,
        label: 'initiator',
        autoValue: function () {
            return this.userId
        }
    }
});

RFQDetails.attachSchema(RFQDetailsSchema);