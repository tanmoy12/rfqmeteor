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
    designation: {
        type: String,
        label: 'des',
        optional: true
    },
    comdes: {
        type: String,
        label: 'comdes',
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
    },
    spec: {
        type: String,
        label: 'spec'
    },
    making: {
        type: String,
        label: 'making'
    }
});

CompanySchema = new SimpleSchema({
    user_id: {
        type: String,
        label: "user",
        optional: true
    },
    pic: {
        type: String,
        label: 'pic',
        optional: true
    },
    seal: {
        type: String,
        label: 'seal',
        optional: true
    },
    address: {
        type: String,
        label: 'address',
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
    },
    name: {
        type: String,
        label: 'name',
        optional: true
    }
});

minutesSchema = new SimpleSchema({
   company: {
       type: CompanySchema,
       label: 'company',
       optional: true
   },
    amount: {
        type: Number,
        label: 'amount',
        optional: true
    },
    members: {
        type: [UserSignFalse],
        label: 'minmembers',
        optional: true
    },
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
    },
    destination: {
        type: String,
        label: 'destination',
        optional: true
    },
    delivery: {
        type: String,
        label: 'delivery',
        optional: true
    },
    warranty: {
        type: String,
        label: 'warranty',
        optional: true
    },
    datesub: {
        type: Date,
        label: 'datesub',
        optional: true
    }
});

MeetingNoticeSchema = new SimpleSchema({
    createdAt: {
        type: Date,
        label: 'date',
        optional: true
    },
    initiator: {
        type: UserSignFalse,
        label: 'ini',
        optional: true
    },
    dateOfMeeting: {
        type: Date,
        label: 'date',
        optional: true
    }
});

PurchaseOrderSchema = new SimpleSchema({
    createdAt: {
        type: Date,
        label: 'date',
        optional: true
    },
    initiator: {
        type: UserSignFalse,
        label: 'ini',
        optional: true
    },
    director: {
        type: UserSignFalse,
        label: 'dir',
        optional: true
    },
    order_no: {
        type: String,
        label: 'orderno',
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
    step78accountant: {
        type: UserSignFalse,
        label: 'step7acc',
        optional: true
    },
    step78director: {
        type: UserSignFalse,
        label: 'step7dir',
        optional: true
    },
    step78meetingDate: {
        type: Date,
        label: 'datemeet',
        optional: true
    },
    standard_apply: {
        type: [StandardApplySchema],
        label: 'standard_apply',
        optional: true,
        defaultValue: []
    },
    meeting: {
        type: MeetingNoticeSchema,
        label: 'meeting',
        optional: true
    },
    allowance_nikosh: {
        type: [UserSignFalse],
        label: 'allowance',
        optional: true
    },
    company_s: {
        type: [UserSignFalse],
        label: 'cs',
        optional: true
    },
    minutes: {
        type: minutesSchema,
        label: 'minutes',
        optional: true
    },
    step1011accountant: {
        type: UserSignFalse,
        label: 'step7acc',
        optional: true
    },
    step1011director: {
        type: UserSignFalse,
        label: 'step7dir',
        optional: true
    },
    purchase: {
        type: PurchaseOrderSchema,
        label: 'purchase',
        optional: true
    },
    step1516accountant: {
        type: UserSignFalse,
        label: 'step15acc',
        optional: true
    },
    step1516director: {
        type: UserSignFalse,
        label: 'step16dir',
        optional: true
    }
});

RFQDetails.attachSchema(RFQDetailsSchema);