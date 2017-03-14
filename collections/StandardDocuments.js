StandardDocuments = new Mongo.Collection('standarddocuments');

StandardDocuments.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
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
        optional:true
    },
    sign_date: {
        type: Date,
        label: "datesign",
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
    },
    createdAt: {
        type: Date,
        label: 'date',
        autoValue: function() {
            if ( this.isInsert ) {
                return new Date;
            }
        },
        optional: true
    },
    standard_details: {
        type: [StandardDetails],
        minCount: 1
    },
    initiator: {
        type: String,
        label: 'initiator',
        autoValue: function () {
            if ( this.isInsert ) {
                return this.userId;
            }
        },
        optional: true
    },
    director: {
        type: UserSignFalse,
        optional: true
    }
});

StandardDocuments.attachSchema(StandardDocumentSchema);