const about=require("../models/about")

//create about service

exports.createAboutService=async(data)=>{
    const result =await about.create(data)
    return result;
}

exports.getAboutService=async(data)=>{
    const result= await about.find({})
    return result;
}