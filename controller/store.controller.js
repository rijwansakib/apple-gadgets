const { createStoreService, getStoreService, getStoreServiceById } = require("../service/store.service")

//create store controller
exports.createStore = async(req,res)=>{
    try {
        const store= await createStoreService(req.body)
        const result = await store.save()
        res.status(200).json({
            status:'success',
            message:'create store successfully',
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'create store failed',
        })
    }
}

//get store controller
exports.getStore = async(req,res)=>{
    try {
        const store= await getStoreService(req.body)
        res.status(200).json({
            status:'success',
            message:'get store successfully',
            data:store
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'get store failed',
        })
    }
}

//get store controller By Id
exports.getStoreById = async(req,res)=>{
    try {
        const {id} = req.params
        const store= await getStoreServiceById(id,req.body)
        res.status(200).json({
            status:'success',
            message:'get store successfully',
            data:store
        })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'get store failed',
        })
    }
}