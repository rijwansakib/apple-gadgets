const mongoose = require('mongoose');
const { Schema } = mongoose;

const aboutSchema = new Schema({

  name: { type: String, required: false },
  description: { type: String, required: false },
  imageUrl: { type: String, required: true },
},{
    timestamps:true
});


const about = mongoose.model('about', aboutSchema);

module.exports =about

