ChahidaPotro = new Meteor.Collection('chahidapotro');

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
        type: [Object],
        minCount: 1
    },
    "details.$.item_no": {
        type: Number,
        label: 'item_no'
    },
    "details.$.desc": {
        type: String,
        label: 'desc',
    },
    "details.$.unit": {
        type: Number,
        label: 'unit'
    },
    "details.$.qty": {
        type: Number,
        label: 'Qty'
    },
    "details.$.rate": {
        type: Number,
        label: 'rate'
    },
    "details.$.total": {
        type: Number,
        label: 'total'
    },
    estimate: {
        type: Number,
        label: 'estimate'
    },
    initiator: {
        type: String,
        label: 'initiator'
    },
    verifier: {
        type: String,
        label: 'verifier'
    },
    accountant: {
        type: String,
        label: 'accountant'
    },
    director: {
        type: String,
        label: 'director'
    }
});

ChahidaPotro.attachSchema(ChahidaPotroSchema);