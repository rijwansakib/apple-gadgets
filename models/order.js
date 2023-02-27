const mongoose=require("mongoose");
const {Schema}=mongoose;

const orderSchema=new Schema({
    user: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', required: true 
    },
    products: [
      {
        product: { 
          type: Schema.Types.ObjectId, 
          ref: 'product', 
          required: true },
        quantity: { 
          type: Number, 
          required: true },
      },
    ],
    totalPrice: { 
      type: Number, 
      required: true 
    },
    status: { 
      type: String, 
      required: true 
    },
})

const order = mongoose.model('order', orderSchema);

module.exports = order