const mongoose = require('mongoose');
const User = require('./User');

const donationSchema = mongoose.Schema({
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User     
    },
    pickuptime: {
        type: String,
        required: true,
        trim: true
    },
    noofcloth: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        trim: true
    }
});

const Donation = mongoose.model('donation', donationSchema);

module.exports = Donation;