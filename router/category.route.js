const express=require("express")
const router=express.Router()

const categoryController=require("../controller/category.controller")

router.route("/")
    .post(categoryController.createCategory)
router.route("/")
    .get(categoryController.getCategory)


    
module.exports =router;