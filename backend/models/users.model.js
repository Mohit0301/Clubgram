const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_name: {
        type:String,
        minlength: 4,
        maxlength: 50,
        required: [true, "User Name required."]
    },
    privileges:{
        type:Boolean,
        default:false,
    },
    roll_number:{
        type:Number,
        required: [true, "Roll Number is required."]
    },
    branch:{
        type:String,
        enum: {
            values: ["CSE", "ECE", "EEE", "MEC", "CIV", "CHEM", "ARCH"],
            message: "{VALUE} is not a supported branch."
        },
    },
    year:{
        type:Number,
        enum: {
            values: [1, 2, 3, 4],
            message: "Year must be 1, 2, 3, or 4. {VALUE} is not a valid year."
        }
    },
    profile_pic: {
        type:String,
    },
    email_id:{
        type:String,
        required: [true, "Email ID is required."],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Password is required."]
    }
 });
  
 const user = mongoose.model('User',userSchema);
 module.exports =user;