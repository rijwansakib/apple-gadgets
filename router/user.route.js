const express = require("express");
const router = express.Router();
// midle ware
const userController = require('../controller/user.controller');
const verifyToken = require("../middleware/verifyToken");


router.route("/signup")
.post(userController.signup);
// router.get("/signup/confirmation/:token", userController.confirmEmail);

router.post("/login", userController.login);

router.get("/me",verifyToken,userController.getme);


module.exports = router;