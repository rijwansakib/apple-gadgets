const payment = require("../models/payment")

//create payment

exports.createPaymentService = async (data) =>{
    const result = await payment.create(data)
    return result;
}

//get payment 

exports.getPaymentService = async (data) =>{
    const result = await payment.find({})
    return result;
}

//get payment By Id

exports.getPaymentByIdService = async (paymentId,data) =>{
    const result = await payment.findById({
        _id:paymentId
    },{
        $set:data
    })
    return result;
}