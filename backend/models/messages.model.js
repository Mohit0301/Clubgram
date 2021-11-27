const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    
    conversation_id:{
        type: String,
    },
    sender:{
        type: String,
    },
    text:{
        type: String
    }

    
    },
    {timestamps:true}
);

const messages = mongoose.model('Messages',messageSchema);
 module.exports =messages;