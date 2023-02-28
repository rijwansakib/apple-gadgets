const express = require("express");
const router = express.Router();

const shippingController = require("../controller/shipping.controller.js")

router.route("/")
    .post(shippingController.createShipping)
router.route("/")
    .get(shippingController.getShipping)
router.route("/:id")
    .patch(shippingController.updateShipping)
router.route("/")
    .delete(shippingController.deleteShipping)

module.exports = router;