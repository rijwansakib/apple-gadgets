const order=require("../models/order")

//create order service

exports.createOrderService = async (data)=>{
    const result = await order.create(data)
    return data;
}

//get order service 

exports.getOrderService = async (data) =>{
    const result= await order.find({})
    return result;
}

//update order service

exports.updateOrderService =async (orderId,data) =>{
    const result = await order.updateOne({
        _id:orderId
    },{
        $set:data
    })
    return result;
}


exports.deleteOrderService = async (orderId) =>{
    const result = await order.deleteOne({
        _id:orderId
    })
    return result
}