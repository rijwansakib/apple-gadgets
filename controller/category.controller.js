const { createCategoryService, getCategoryService } = require("../service/category.service")

//create controller

exports.createCategory=async(req,res)=>{
    try {
        const category =await createCategoryService(req.body)
        const result = await category.save()
        res.status(200).json({
            status:'success',
            message:'category create successfully',
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'category create fail',
            error:error.message
        })
    }
}

//get controller

exports.getCategory = async (req,res) =>{
    try {
        const category = await getCategoryService(req.body)
        res.status(200).json({
            status:'success',
            message:'category find successfully',
            data:category
        })
        } catch (error) {
            res.status(400).json({
                status:'fail',
                message:'category find failed',
            })
    }
}