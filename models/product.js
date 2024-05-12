const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;
const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    rating: { type: String, required: false },
    category: [
      {
        type: ObjectId,
        ref: "category",
      },
    ],
    brand: [
      {
        type: ObjectId,
        ref: "brand",
      },
    ],
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
