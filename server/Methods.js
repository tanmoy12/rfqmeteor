import { check } from 'meteor/check';

Meteor.methods({
    checkPassword: function(digest) {
        check(digest, String);

        if (this.userId) {
            var user = Meteor.user();
            var password = {digest: digest, algorithm: 'sha-256'};
            var result = Accounts._checkPassword(user, password);
            return result.error == null;
        } else {
            return false;
        }
    }
});

Meteor.methods({
    updateAllowanceNikosh: function(rfq_id, user_id) {
        check(rfq_id, String);
        check(user_id, String);

        RFQDetails.update(
            {
                _id : rfq_id,
                'allowance_nikosh.user_id': user_id
            },
            {
                $set: {
                    'allowance_nikosh.$.signed': true,
                    'allowance_nikosh.$.sign_date': new Date()
                }
            });
    }
});

Meteor.methods({
    updateCompanyS: function(rfq_id, user_id) {
        check(rfq_id, String);
        check(user_id, String);

        RFQDetails.update(
            {
                _id : rfq_id,
                'company_s.user_id': user_id
            },
            {
                $set: {
                    'company_s.$.signed': true,
                    'company_s.$.sign_date': new Date()
                }
            });
    }
});

Meteor.methods({
    updateMinutes: function(rfq_id, user_id) {
        check(rfq_id, String);
        check(user_id, String);

        RFQDetails.update(
            {
                _id : rfq_id,
                'minutes.members.user_id': user_id
            },
            {
                $set: {
                    'minutes.members.$.signed': true,
                    'minutes.members.$.sign_date': new Date()
                }
            });
    }
});

Meteor.methods({
    updateMinutes2: function(rfq_id, user_id) {
        check(rfq_id, String);
        check(user_id, String);

        RFQDetails.update(
            {
                _id : rfq_id,
                'minutes.members.user_id': user_id
            },
            {
                $set: {
                    'minutes.members.$.signed': false,
                    'minutes.members.$.sign_date': null
                }
            });
    }
});

Meteor.methods({
    removeFromCommittee: function(user_id) {
        check(user_id, String);

        Meteor.users.update(
            user_id,
            {
                $set: {
                    'profile.committee': ''
                }
            });
    }
});

Meteor.methods({
    removeNotification: function(to_id, rfq_id, type) {
        check(to_id, String);
        check(rfq_id, String);
        check(type, Number);

        Notifications.remove(
            {
                to_id : to_id,
                RFQ_id : rfq_id,
                type : type
            }
        )
    }
});

Meteor.methods({
    addMember: function (selectId, des, name) {
        check(selectId, String);
        check(des, String);
        check(name, String);

        // Meteor.users.update(
        //     selectId,
        //     {
        //         $set: {
        //             'profile.committee' : ''
        //         }
        //     }
        // )

        Meteor.users.update(
            selectId,
            {
                $set: {
                    'profile.committee.name': name,
                    'profile.committee.des' : des
                }
            }
        );
    }
});

Meteor.methods({
    removeMember: function (selectId) {
        check(selectId, String);

        Meteor.users.update(
            selectId,
            {
                $set: {
                    'profile.committee.name' : ''
                }
            }
        );
    }
});