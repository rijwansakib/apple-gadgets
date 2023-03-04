const express = require("express")
const router = express.Router()

const stockController=require("../controller/stock.controller")

router.route("/")
    .post(stockController.createStock)

    router.route("/")
    .get(stockController.getStock)

router.route("/:id")
    .patch(stockController.updateStock)

router.route("/:id")
    .delete(stockController.deleteStock)


module.exports = router;