const express = require("express")
const auth = require('../middleware/auth');
const router = express.Router()

const DonateController = require("../controller/donate_controller")




router.post("/donate",DonateController.addDonation);
router.get("/donations",DonateController.getDonations);
router.get("/viewdonation/:donor",DonateController.viewDonations);
router.put("/update", DonateController.updateDonation)
router.delete("/delete", DonateController.deleteDonation)
module.exports = router