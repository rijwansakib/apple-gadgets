const { createPaymentService, getPaymentService, getPaymentByIdService } = require("../service/payment.service")

//create payment controller
exports.createPayment = async (req,res) =>{
    try {
        const payment = await createPaymentService(req.body)
        const result = await payment.save()
        res.status(200).json({
            status:"success",
            message:"create payment successfully",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"create payment failed",
            error:error.message
        })
    }
}

//get payment controller

exports.getPayment = async (req,res) =>{
    try {
        const payment = await getPaymentService(req.body)
        res.status(200).json({
            status:"success",
            message:"get payment successfully",
            data:payment
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"get payment failed",
            error:error.message
        })
    }
}
//get payment BY Id controller

exports.getPaymentById = async (req,res) =>{
    try {
        const{id}=req.params
        const payment = await getPaymentByIdService(id,req.body)
        res.status(200).json({
            status:"success",
            message:"get payment by id successfully",
            data:payment
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"get payment by id  failed",
            error:error.message
        })
    }
}