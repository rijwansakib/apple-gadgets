const expres = require("express");
const router = expres.Router();

const productController = require("../controller/product.controller");

router.route("/").post(productController.createProduct);
router.route("/").get(productController.getProduct);
router.route("/:id").patch(productController.updateProduct);
router.route("/:id").delete(productController.deleteProduct);

module.exports = router;
