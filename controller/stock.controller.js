const { createStockService, getStockService, updateStockService, deleteStockService } = require("../service/stock.service")

//create stock controller
exports.createStock = async( req, res ) =>{
    try {
        const stock = await createStockService(req.body)
        const result = stock.save()
        res.status(200).json({
            status:'success',
            message:'create stock data successfully',
            data : result
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"create stock data failed",
            error: error.message
        })
    }
}

//get stock controller
exports.getStock = async( req, res ) =>{
    try {
        const stock = await getStockService(req.body)
        res.status(200).json({
            status:'success',
            message:'get stock data successfully',
            data : stock
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"get stock data failed",
            error: error.message
        })
    }
}

//update stock controller
exports.updateStock = async( req, res ) =>{
    try {
        const {id} = req.params
        const stock = await updateStockService(id,req.body)
        res.status(200).json({
            status:'success',
            message:'update stock data successfully',
            data : stock
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"update stock data failed",
            error: error.message
        })
    }
}
//delete stock controller
exports.deleteStock = async( req, res ) =>{
    try {
        const {id} = req.params
        const stock = await deleteStockService(id,req.body)
        res.status(200).json({
            status:'success',
            message:'delete stock data successfully',
            data : stock
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"delete stock data failed",
            error: error.message
        })
    }
}