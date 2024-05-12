//create controller

const {
  createProductService,
  getProductService,
  updateProductService,
  deleteProductService,
} = require("../service/product.service");

exports.createProduct = async (req, res) => {
  try {
    const product = await createProductService(req.body);
    const result = await product.save();
    res.status(200).json({
      status: "success",
      message: "create product data successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: "create brand data failed",
      data: result,
    });
  }
};
//get product controller
exports.getProduct = async (req, res) => {
  try {
    const product = await getProductService(req.body);
    res.status(200).json({
      status: "success",
      message: "get product  successfully",
      data: product,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: "get product data failed",
    });
  }
};

//update product controller

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateProductService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "successfully updated the product",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "success",
      message: "fail updated the product",
    });
  }
};

//delete product controller

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteProductService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "successfully delete the product",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "success",
      message: "fail delete the product",
    });
  }
};
