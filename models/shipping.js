const mongoose = require('mongoose');
const { Schema } = mongoose;

const shippingSchema = new Schema({
  order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  address: { type: String, required: true },
  trackingNumber: { type: String, required: true },
  status: { type: String, required: true },
});

const shipping = mongoose.model('shipping', shippingSchema);

module.exports = shipping
