const express=require("express")
const router=express.Router()

const orderController=require("../controller/order.controller")

router.route("/")
    .post(orderController.createOrder)
router.route("/")
    .get(orderController.getOrder)
router.route("/")
    .patch(orderController.updateOrder)
router.route("/")
    .delete(orderController.deleteOrder)



    module.exports = router;