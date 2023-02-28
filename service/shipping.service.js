const shipping = require("../models/shipping")

//create shipping service

exports.createShippingService = async (data) =>{
    const result = await shipping.create(data)
    return result;
}

exports.getShippingService = async(data) =>{
    const result = await shipping.find({})
    return result;
}

exports.updateShippingService = async( shippingId,data) =>{
    const result = await shipping.updateOne({
        _id:shippingId
    },{
        $set:data
    })

    return result;
}

exports.deleteShippingService = async (shippingId) =>{
    const result = await shipping.deleteOne({
        _id:shippingId
    })  
    return result;
}