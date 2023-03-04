const express= require("express")
const router=express.Router()

const supplierController=require("../controller/supplire.controller")

router
    .route("/")
    .get(supplierController.getSupplier)
    .post(supplierController.createSupplier)
router
    .route("/:id")
    .get(supplierController.getSupplierById)
    .patch(supplierController.updateSupplierId);

    module.exports=router;