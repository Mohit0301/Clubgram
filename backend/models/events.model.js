const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    clubName: {
        type: String,
        required: true,
        minlength: 3,
        
    },
    eventName:{
        type:String,
    },
    eventDesc: {
       type: String,
       minlength:5,
    },
    eventInfo:{
        type: String,
        default:"",
    },
    startDate:{
        type:String,
    },
    startTime:{
        type: String,
    },
    endDate:{
        type:String,
    },
    endTime:{
        type: String,
    },
    platform:{
        type:String,
    },
    attend:{
        type:Array,
        default: []
    },
   
  
  
 }, {timestamps:true});
  
 const event = mongoose.model('Event',eventSchema);
 module.exports =event;