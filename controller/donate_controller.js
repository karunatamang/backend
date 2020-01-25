const Donation = require('../models/Donation')

exports.addDonation = (req, res) => {

    const donation = new Donation(req.body);
    donation.save()
        .then(donation => {
            res.json({ donation })
        })
        .catch(error => {
            res.json({ error })
        })
}

exports.getDonations = (req, res) => {
    Donation.find().populate('donor')
        .then(donations => {
            res.json( donations)
        })
        .catch(error => {
            res.json({ error })
        })
}
exports.viewDonations = (req, res) => {
    Donation.find({donor:req.params.donor}).then(function (donations) {
        let totalDonations=0;
     donations.forEach(donation => {
         totalDonations+=parseInt(donation.noofcloth);
     });
        res.json({totalDonations:totalDonations })
    }).catch(function (er) {
        res.send(er);
    })
}
exports.updateDonation = async (req, res) => {

    Users.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.send('Update Successfull')
        }).catch(function (e) {
            res.send(e)
        })
}

exports.deleteDonation = async (req, res) => {

    Users.findByIdAndDelete(req.params.id)
        .then(function () {
            res.send('Delete Successfull')
        }).catch(function (e) {
            res.send(e)
        })
}


