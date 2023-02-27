//create about

const { createAboutService, getAboutService } = require("../service/about.service")

exports.createAbout=async(req,res)=>{
    
    try {
        const about=await createAboutService(req.body)
        const result= await about.save
        res.status(200).json({
            status:'success',
            message:'data create successfully',
            data:result
        })
        
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'data create fail',
            error:error.message
        })
    }
}
exports.getAbout=async(req,res)=>{
    
    try {
        const about=await getAboutService(req.body)
        res.status(200).json({
            status:'success',
            message:'data create successfully',
            data:about
        })
        
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'data get fail',
            error:error.message
        })
    }
}