const { createOrderService, getOrderService, updateOrderService, deleteOrderService } = require("../service/order.service")
//create order controller
exports.createOrder = async(req,res)=>{
    try {
        const order= await createOrderService(req.body)
        const result = await order.save()
        res.status(200).json({
            status:'success',
            message:"create order data successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:"create order data fail",
            error:error.message
        })
    }
}

//get order controller
exports.getOrder = async(req,res)=>{
    try {
        const order= await getOrderService(req.body)
        res.status(200).json({
            status:'success',
            message:"create order data successfully",
            data:order
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:"get order data fail",
            error:error.message
        })
    }
}

//update order controller
exports.updateOrder = async(req,res)=>{
    try {
        const {id}=req.params
        const order= await updateOrderService(id,req.body)
        res.status(200).json({
            status:'success',
            message:" update order data successfully",
            data:order
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:"update order data fail",
            error:error.message
        })
    }
}

//update order controller
exports.deleteOrder = async(req,res)=>{
    try {
        const {id}=req.params
        const order= await deleteOrderService(id)
        res.status(200).json({
            status:'success',
            message:" delete order data successfully",
            data:order
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:"delete order data fail",
            error:error.message
        })
    }
}