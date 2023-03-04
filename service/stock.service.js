const stock = require("../models/stock")

//create stock service

exports.createStockService = async(data) =>{
    const result = await stock.create(data)
    return result;
}

//get stock service

exports.getStockService = async (data) =>{
    const result = await stock.find({})
    return result;
}

//update stock service

exports.updateStockService = async (stockId,data) =>{
    const result = await stock.updateOne({
        _id:stockId
    },{
        $set:data
    })

    return result;
}

//delete stock service

exports.deleteStockService = async (stockId)=>{
    const result = await stock.deleteOne({
        _id:stockId
    })
    return result
}