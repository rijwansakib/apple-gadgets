const banner=require("../models/banner")

//create banner

exports.createBannerService=async(data)=>{
    const result= await banner.create(data)
    return result;
}

exports.getBannerService=async(data)=>{
    const result=await banner.find({})
    return result;
}