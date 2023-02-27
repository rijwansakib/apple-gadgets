const expres=require("express");
const router=expres.Router()

const brandController=require("../controller/brand.controller")

router.route("/")
    .post(brandController.createBrand)
router.route("/")
    .get(brandController.getBrand)
router.route("/:id")
    .patch(brandController.updateBrand)
router.route("/id")
    .delete(brandController.deleteBrand)


module.exports =router;