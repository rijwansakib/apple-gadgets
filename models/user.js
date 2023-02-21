const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: false },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
});



const user = mongoose.model('user', userSchema);

module.exports= user
