const router = require('express').Router();
let Message = require('../models/messages.model');

//Add message
router.post("/add",async(req,res)=>{
    const newMessage = new Message(req.body);
    try{
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

//Get message
router.get("/:conversation_id",async(req,res)=>{
    try{
        const messages = await Message.find({
            conversation_id:req.params.conversation_id,
        })
        res.status(200).json(messages);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

module.exports = router;