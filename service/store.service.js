const store = require("../models/store")

//create store Service

exports.createStoreService = async(data)=>{
    const result = await store.create()
    return result;
}

//get store Service

exports.getStoreService = async(data)=>{
    const result = await store.find({})
    return result;
}
//get store Service By Id

exports.getStoreServiceById = async(storeId,data)=>{
    const result = await store.find({
        _id:storeId
    },{
        $set:data
    })
    return result;
}