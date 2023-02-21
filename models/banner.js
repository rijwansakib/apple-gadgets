const mongoose = require('mongoose');
const { Schema } = mongoose;

const bannerSchema = new Schema({

  name: { type: String, required: false },
  description: { type: String, required: false },
  imageUrl: { type: String, required: true },
},{
    timestamps:true
});


const banner = mongoose.model('banner', bannerSchema);

module.exports =banner

