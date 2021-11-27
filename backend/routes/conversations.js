const router = require('express').Router();
let Conversation = require('../models/conversations.model');
let User = require('../models/users.model')
//new conversation 
router.post("/", async (req,res)=>{
    const mem = [req.body.sender_id, req.body.receiver_id];
   // console.log(mem);
  
   

    const newConversation = new Conversation({
        members:[req.body.sender_id, req.body.receiver_id],
    });
  //  console.log(newConversation);
    try{
        const temp= await Conversation.find({
            members:{$all :mem}
    
        });
        console.log(temp.length);
        // const temp2=  Conversation.find({
        //     members:mem2
    
        // });
      
        if(temp.length===0)
        {
        const savedConversation =  await newConversation.save();
        console.log(savedConversation);
        const receiver_name = await User.findById(req.body.receiver_id);
        const response={
            savedConversation,
            receiver:receiver_name.user_name,
        }
        console.log(response);
        res.status(200).json(savedConversation);

    }
        else{
            console.log("Exists");
            res.send("Conversation already created!");
        }
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})


//update
router.post("/:conversation_id",async(req,res)=>{
    console.log(req.params.conversation_id);
    try{
        const conversation = await Conversation.findById(req.params.conversation_id);
        conversation.updatedAt = new Date();
        conversation.save();
        console.log(conversation);
        res.status(200).json(conversation);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

//get conversation of a user
router.get("/:user_id",async(req,res)=>{
    try{
        const conversation = await Conversation.find({
            members:{$in:[req.params.user_id]}

        });
        res.status(200).json(conversation);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;