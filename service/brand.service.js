const brand=require("../models/brand")

//create brand service
exports.createBrandService=async(data)=>{
    const result =brand.create(data)
    return result;
}

//get brand service

exports.getBrandService=async(data)=>{
    const result =brand.find({})
    return result;
}

//patch brand service

exports.updateBrandService=async(brandId,data)=>{
    const result =brand.updateOne({
        _id:brandId
    },{
        $set:data
    })
    return result;
}

//delete brans service

exports.deleteBrandService =async(brandId)=>{
    const result= brand.deleteOne({
        _id:brandId
    })
}