//create controller

const { createBrandService, getBrandService, updateBrandService, deleteBrandService } = require("../service/brand.service")

exports.createBrand=async(req,res)=>{
    try {
        const brand =await createBrandService(req.body)
        const result = await brand.save()
        res.status(200).json({
            status:'success',
            message:"create brand data successfully",
            data:result

        })
    } catch (error) {
        res.status(200).json({
            status:'fail',
            message:"create brand data failed",
            data:result

        })
    }
}
//get brand controller
exports.getBrand=async(req,res)=>{
    try {
        const brand =await getBrandService(req.body)
        res.status(200).json({
            status:'success',
            message:"get brand data successfully",
            data:brand

        })
    } catch (error) {
        res.status(200).json({
            status:'fail',
            message:"get brand data failed"
        })
    }
}

//update brand controller

exports.updateBrand=async(req,res)=>{
    try {
        const {id}=req.params;
        const result = await updateBrandService(id, req.body);
        res.status(200).json({
          status: 'success',
          message: 'successfully updated the brand',
          data:result
        })
    } catch (error) {
        res.status(400).json({
            status: 'success',
            message: 'fail updated the brand'
          })
    }
}

//delete brand controller

exports.deleteBrand=async(req,res)=>{
    try {
        const {id}=req.params;
        const result = await deleteBrandService(id, req.body);
        res.status(200).json({
          status: 'success',
          message: 'successfully delete the brand',
          data:result
        })
    } catch (error) {
        res.status(400).json({
            status: 'success',
            message: 'fail delete the brand'
          })
    }
}