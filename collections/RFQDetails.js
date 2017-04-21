RFQDetails = new Mongo.Collection('rfqdetails');

RFQDetails.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

UserSignFalse = new SimpleSchema({
    user_id: {
        type: String,
        label: "user",
        optional: true
    },
    name: {
        type: String,
        label: 'name',
        optional: true
    },
    pic: {
        type: String,
        label: 'pic',
        optional: true
    },
    signed: {
        type: Boolean,
        label: "signed",
        defaultValue: false,
        optional: true
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
    }
});

ChahidaPotroSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'title',
        optional: true
    },
    substep_no: {
        type: Number,
        label: 'substep_no',
        optional: true,
        defaultValue: 1
    },
    estimate: {
        type: Number,
        label: 'estimate',
        optional: true
    },
    createdAt: {
        type: Date,
        label: 'date',
        autoValue: function () {
            if (this.isInsert) {
                return new Date;
            }
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
    initiator: {
        type: UserSignFalse,
        label: 'initiator',
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
    },
    year: {
        type: String,
        defaultValue: '............................',
        optional: true
    },
    upokhat: {
        type: String,
        defaultValue: '..................................................',
        optional: true
    }
});

StandardDetails = new SimpleSchema({
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
    spec: {
        type: String,
        label: 'spec'
    },
    qty: {
        type: String,
        label: 'Qty'
    },
    making: {
        type: String,
        label: 'rate',
        optional: true
    }
});

StandardDocumentSchema = new SimpleSchema({

    RFQ_no: {
        type: String,
        label: 'RFQ_No',
        optional: true
    },
    createdAt: {
        type: Date,
        label: 'date',
        optional: true
    },
    standard_details: {
        type: [StandardDetails],
        minCount: 1,
        optional: true
    },
    apply_date: {
        type: Date,
        label: 'date',
        optional: true
    },
    initiator: {
        type: UserSignFalse,
        label: 'initiator',
        optional: true
    },
    director: {
        type: UserSignFalse,
        optional: true
    },
    accountant: {
        type: UserSignFalse,
        optional: true
    }
});

StandardApplyDetails = new SimpleSchema({
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
    destination: {
        type: String,
        label: 'destination'
    }
});

CompanySchema = new SimpleSchema({
    user_id: {
        type: String,
        label: "user",
        optional: true
    },
    username: {
        type: String,
        label: 'username',
        optional: true
    },
    pic: {
        type: String,
        label: 'pic',
        optional: true
    },
    signed: {
        type: Boolean,
        label: "signed",
        defaultValue: false,
        optional: true
    },
    sign_date: {
        type: Date,
        label: "datesign",
        optional: true
    }
});

StandardApplySchema = new SimpleSchema({
    amount: {
        type: Number,
        label: 'amount',
        optional: true
    },
    createdAt: {
        type: Date,
        label: 'date',
        optional: true
    },
    StandardApply: {
        type: [StandardApplyDetails],
        minCount: 0
    },
    company: {
        type: CompanySchema,
        label: 'company',
        optional: true
    }
});


RFQDetailsSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'title'
    },
    step_no: {
        type: Number,
        label: 'step_no',
        optional: true,
        defaultValue: 1
    },
    createdAt: {
        type: Date,
        label: 'date',
        autoValue: function () {
            if (this.isInsert) {
                return new Date;
            }
        },
        optional: true
    },
    chahida: {
        type: ChahidaPotroSchema,
        label: 'chahida'
    },
    standard: {
        type: StandardDocumentSchema,
        label: 'standard',
        optional: true
    },
    standard_apply: {
        type: [StandardApplySchema],
        label: 'standard_apply',
        optional: true
    }
});

RFQDetails.attachSchema(RFQDetailsSchema);