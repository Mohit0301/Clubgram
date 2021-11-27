const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_name: {
        type:String
    },
    privileges:{
        type:Boolean,
        default:false,
    },
    roll_number:{
        type:String,
        default:"",
    },
    branch:{
        type:String,
        default:"",
    },
    year:{
        type:String,
        default:"",
    },
    profile_pic: {
        type:String,
        
      
    },
    email_id:{
        type:String,
    },
    password:{
        type: String,
    }

    
  
 });
  
 const user = mongoose.model('User',userSchema);
 module.exports =user;