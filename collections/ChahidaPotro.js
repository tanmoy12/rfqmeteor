ChahidaPotro = new Meteor.Collection('chahidapotro');

UserSignFalse= new SimpleSchema({
   user_id: {
       type: String,
       label: "user",
       optional: true
   },
    signed: {
        type: Boolean,
        label: "signed",
        defaultValue: false,
    },
    sign_date: {
        type: Date,
        label: "datesign",
        optional: true
    }
});

Details = new SimpleSchema({
    item_no: {
        type: Number,
        label: 'item_no'
    },
    desc: {
        type: String,
        label: 'desc',
    },
    unit: {
        type: Number,
        label: 'unit',
        optional: true
    },
    qty: {
        type: Number,
        label: 'Qty'
    },
    rate: {
        type: Number,
        label: 'rate',
        optional: true
    },
    total: {
        type: Number,
        label: 'total'
    },

});

ChahidaPotroSchema = new SimpleSchema({
    RFQ_id:{
        type: String,
        label: 'RFQ_id'
    },
    title: {
        type: String,
        label: 'title'
    },
    substep_no: {
        type: Number,
        label: 'substep_no',
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
    sutro_no: {
        type: String,
        label: 'sutro_no'
    },
    details: {
        type: [Details],
        minCount: 1
    },
    estimate: {
        type: Number,
        label: 'estimate',
        autoValue: function () {
            return 0;
        }
    },
    initiator: {
        type: String,
        label: 'initiator',
        autoValue: function () {
            return this.userId
        }
    },
    verifier: {
        type: UserSignFalse,
        optional: true
    },
    accountant: {
        type: UserSignFalse,
        optional: true
    },
    director: {
        type: UserSignFalse,
        optional: true
    }
});

ChahidaPotro.attachSchema(ChahidaPotroSchema);