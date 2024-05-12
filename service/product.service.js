const Product = require("../models/product");

//create Product service
exports.createProductService = async (data) => {
  const result = Product.create(data);
  return result;
};

//get Product service

exports.getProductService = async (data) => {
  const result = Product.find({});
  return result;
};

//patch Product service

exports.updateProductService = async (ProductId, data) => {
  const result = Product.updateOne(
    {
      _id: ProductId,
    },
    {
      $set: data,
    }
  );
  return result;
};

//delete brans service

exports.deleteProductService = async (ProductId) => {
  const result = Product.deleteOne({
    _id: ProductId,
  });
};
