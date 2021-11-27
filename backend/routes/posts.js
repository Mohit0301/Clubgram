const router = require('express').Router();

let Post = require('../models/post.model');


//create a post
router.post("/create",async(req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        console.log(savedPost);
        res.status(200).json(savedPost);
    }catch(err){
        res.status(400).json(err);
    }
})
//update a post

//delete a post
//like a post
router.put("/:id/like", async(req,res)=>{
    try{
        const post =await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId))
        {   console.log(req.body);
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("The post has been liked!");
        }
        else
        {
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("The post has been disliked!");   
        }
    }
    catch(err)
    {
        res.status(400).json(err);
    }
   


});



//add a comment
router.post("/comments/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        post.comments.push(req.body);
        console.log(post.comments);
        updatedPost = await post.save();
        res.status(200).json(updatedPost);
        console.log(post.comments);
    }
    catch(err)
    {
        console.log(err);
    }
})

//fetch comments
router.get("/comments/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post.comments);
    }
    catch(err)
    {
        console.log(err);
    }
})


//get a post
router.get("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    }catch(err){
        res.status(400).json(err);
    }
})
//get timeline posts
router.get("/",async(req,res)=>{
    Post.find()
    .then(posts=>res.json(posts))
    .catch(err=>res.status(400).json('Error: '+ err));
})

module.exports = router;