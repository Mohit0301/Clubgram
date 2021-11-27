const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    
        clubName:{
            type:String,
            
        },
        desc:{
            type:String,
            max:500,
        },
        img: {
            type:String,
        },
        likes:{
            type:Array,
            default: []
        },
        user_id:{
            type:String,
            required:true,
        },
        comments:{
            type:Array,
            default:[]
        },
        url:{
            type:String,
        }

    
    },
    {timestamps:true}
);

const post = mongoose.model('Post',postSchema);
 module.exports =post;