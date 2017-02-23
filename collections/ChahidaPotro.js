Chahida_Potro = new Mongo.Collection('chahidapotro');

Chahida_Potro.allow({
    insert: function (userId, doc) {
        return !!userId;
    }
});

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
    id: {
        type: String,
        label: 'id'
    },
    item_no: {
        type: Number,
        label: 'item_no'
    },
    desc: {
        type: String,
        label: 'desc',
    },
    unit: {
        type: String,
        label: 'unit',
        optional: true
    },
    qty: {
        type: String,
        label: 'Qty'
    },
    rate: {
        type: String,
        label: 'rate',
        optional: true
    },
    total: {
        type: String,
        label: 'total'
    },
});

ChahidaPotroSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'title',
    },
    substep_no: {
        type: Number,
        label: 'substep_no',
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
        label: 'estimate'
    },
    initiator: {
        type: String,
        label: 'initiator',
        autoValue: function () {
            return this.userId;
        },
        optional: true
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

Chahida_Potro.attachSchema(ChahidaPotroSchema);