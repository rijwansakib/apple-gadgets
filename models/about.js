const mongoose = require('mongoose');
const { Schema } = mongoose;

const aboutSchema = new Schema({

  name: { 
    type: String
  },
  description: {
    type: String
  },
},{
    timestamps:true
});


const about = mongoose.model('about', aboutSchema);

module.exports =about

