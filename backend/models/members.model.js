const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema({
    
   name:{
        type: String,
    },
    year:{
        type: String,
    },
    branch:{
        type: String
    },
    position:{
        type:String,
    },
    club_name:{
        type:String,
    },
    image:{
        type:String,
    }

    
    },
    {timestamps:true}
);

const members = mongoose.model('Members',memberSchema);
 module.exports =members;