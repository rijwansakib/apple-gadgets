const { createShippingService, getShippingService, deleteShippingService } = require("../service/shipping.service")

//create shipping controller
exports.createShipping = async (req,res) =>{
    try {
        const shipping = await createShippingService(req.body)
        const result= await shipping.save()
    
        res.status(200).json({
            status:'success',
            message:'shipping data create successfully',
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'sshipping data create failed',
            error:error.message
        })
    }
}
//get shipping controller
exports.getShipping = async (req,res) =>{
    try {
        const shipping = await getShippingService(req.body)    
        res.status(200).json({
            status:'success',
            message:'shipping data get successfully',
            data:shipping
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'shipping data  get failed',
            error:error.message
        })
    }
}
//get shipping controller
exports.updateShipping = async (req,res) =>{
    try {
        const {id} = req.params
        const shipping = await getShippingService(id,req.body)    
        res.status(200).json({
            status:'success',
            message:'shipping data update successfully',
            data:shipping
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'shipping data  update failed',
            error:error.message
        })
    }
}
//delete shipping controller
exports.deleteShipping = async (req,res) =>{
    try {
        const {id} = req.params
        const shipping = await deleteShippingService(id,req.body)    
        res.status(200).json({
            status:'success',
            message:'shipping data delete successfully',
            data:shipping
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'shipping data  delete failed',
            error:error.message
        })
    }
}