const express = require("express");
const auth = require("../middleware/auth.middleware");
const { initiatePayment, getPayments } = require("../controllers/payment.controller");

const router = express.Router();

router.post("/", auth, initiatePayment);
router.get("/", auth, getPayments);

module.exports = router;