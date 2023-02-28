const mongoose = require('mongoose');
const { Schema } = mongoose;


const paymentSchema = new Schema({
  order: { 
    type: Schema.Types.ObjectId, 
    ref: 'Order', 
    required: true 
  },  
  method: { 
    type: String, 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    required: true 
  },
},{
  timestamps:true
});



const payment = mongoose.model('payment', paymentSchema);

module.exports = payment
