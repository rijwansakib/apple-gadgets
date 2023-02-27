const express=require("express")
const router=express.Router()

const bannerController=require("../controller/banner.controller")

router.route("/")
.get(bannerController.getBanner)
router.route("/")
.post(bannerController.createBanner)


module.exports=router;