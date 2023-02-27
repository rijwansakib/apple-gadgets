const mongoose = require('mongoose');
const { Schema } = mongoose;

const bannerSchema = new Schema({

  categogy_img: { 
    type: String
  },
  imageUrl: {
     type: String,
    required: true 
  
    },
},{
    timestamps:true
});


const banner = mongoose.model('banner', bannerSchema);

module.exports =banner

