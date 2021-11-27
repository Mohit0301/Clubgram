const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    
      members:{
          type:Array,
      },
      
    
    },
    {timestamps:true}
);

const conversations = mongoose.model('Conversations',conversationSchema);
 module.exports =conversations;