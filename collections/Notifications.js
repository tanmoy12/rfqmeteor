Notifications = new Mongo.Collection('notifications');

Notifications.allow({
    insert: function (userId, doc) {
        return !!userId;
    }
});

NotificationsSchema = new SimpleSchema({
    RFQ_id: {
        type: String,
        label: 'RFQ_id'
    },
    title: {
        type: String,
        label: 'title'
    },
    from_id: {
        type: String,
        label: 'from_id'
    },
    to_id: {
        type: String,
        label: 'to_id'
    },
    type: {
        type: Number,
        label: 'type'
    },
    createdAt: {
        type: Date,
        label: 'date',
        autoValue: function () {
            return new Date();
        },
        optional: true
    }
});

Notifications.attachSchema(NotificationsSchema);