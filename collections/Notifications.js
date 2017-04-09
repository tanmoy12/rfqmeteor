Notifications = new Mongo.Collection('notifications');

Notifications.allow({
    insert: function (userId, doc) {
        return !!userId;
    }
});


UserFrom= new SimpleSchema({
    user_id: {
        type: String,
        label: "user",
        optional: true
    },
    username : {
        type: String,
        label: 'username',
        optional: true
    },
    pic : {
        type: String,
        label: 'pic',
        optional: true
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
    from: {
        type: UserFrom,
        label: 'from'
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