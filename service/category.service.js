const category=require("../models/category")

//create service

exports.createCategoryService=async(data)=>{
    const result= await category.create(data)
    return result;
}

//get service

exports.getCategoryService=async(data)=>{
    const result = await category.find({})
    return result;  
}
