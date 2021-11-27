const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clubSchema = new Schema({
   clubName: {
       type: String,
       required: true,
       trim: true,
       minlength: 3,
       index:true,
        unique:true,
        sparse:true
   },
   desc: {
      type: String,
      minlength:5,
   },
  
 
 
});
 
const club = mongoose.model('Club',clubSchema);
module.exports = club;