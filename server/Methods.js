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