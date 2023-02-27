//create Banner controller

const { createBannerService, getBannerService } = require("../service/banner.service")

exports.createBanner=async(req,res)=>{
    try {
        const banner= await createBannerService(req.body)
        const result= await banner.save()
        res.status(200).json({
            status:"success",
            message:"create banner data successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"create banner data failed"
        })
    }


}
exports.getBanner=async(req,res)=>{
    try {
        const banner= await getBannerService(req.body)
        res.status(200).json({
            status:"success",
            message:"create banner data successfully",
            data:banner
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"create banner data failed"
        })
    }


}