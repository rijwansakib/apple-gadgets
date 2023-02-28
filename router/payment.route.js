const express = require("express");
const router = express.Router();

const paymentController = require("../controller/payment.controller");

router.route("/")
    .post(paymentController.createPayment)

router.route("/")
    .get(paymentController.getPayment)
    
router.route("/:id")
    .get(paymentController.getPaymentById)

    
module.exports = router;