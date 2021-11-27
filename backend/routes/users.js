const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: '+ err));
});
router.route('/:id').get( async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        console.log(user);
        res.status(200).json(user);

    }catch(err){
        res.status(400).json(err);
    }
})


router.route('/update/:id').post(async (req,res)=>{
    console.log(req.body);
    try{
       const user= await User.findById(req.params.id);
        user.profile_pic = req.body.profile_pic;
        const savedUser = await user.save();
       res.status(200).json(savedUser);
    }
    catch(err)
    {
        console.log(err);
    }
})


router.route('/search').post((req,res)=>{
    const name = req.body.user_name;
    const roll_number = req.body.roll_number;
    const year = req.body.year;
    const branch = req.body.branch;
    console.log(req.body);
    if(name)
    {
        User.find({user_name:name},(err,user)=>{
            if(user)
            {
                res.send({message:"User found!",user:user});
            }
            else
            {
                res.send({message:"User not found"});
            }
        })
    }
    else if(roll_number)
    {
        User.find({roll_number:roll_number},(err,user)=>{
            if(user)
            {
                res.send({message:"User found!",user:user});
            }
            else
            {
                res.send({message:"User not found"});
            }
        })
    }
    else if(branch)
    {
        User.find({branch:branch},(err,user)=>{
            if(user)
            {
                res.send({message:"User found!",user:user});
            }
            else
            {
                res.send({message:"User not found"});
            }
        })
    }
    else if(year)
    {
        User.find({year:year},(err,user)=>{
            if(user)
            {
                res.send({message:"User found!",user:user});
            }
            else
            {
                res.send({message:"User not found"});
            }
        })
    }
    
})
router.route('/login').post((req,res)=>{
  const email_id=req.body.email_id;
  const password=req.body.password;
  console.log(req);
  User.findOne({email_id:email_id},(err,user)=>{
      if(user)
      {
          if(password!==user.password)
          {
              console.log("Incorrect password!");
              res.send({message:"Incorrect password!"});
          }
          else
          {
             console.log("successfully logged in");
             res.send({message:"Successfully logged in", user:user});
          }
      }
      else
      {
          res.send("User not registered!");
      }
  })
})

router.route('/register').post((req,res)=>{
    const user_name = req.body.user_name;
    const profile_pic = req.body.profile_pic;
    const roll_number = req.body.roll_number;
    const branch = req.body.branch;
    const year = req.body.year;
    const email_id = req.body.email_id;
    const password = req.body.password;
    console.log(req);
    User.findOne({email_id:email_id},(err,user)=>{
        if(user){
            res.send({message:"User has already registered!"});
        }
        else
        {
        const newUser = new User({user_name,profile_pic,email_id,password,roll_number,branch,year});
        
        newUser.save()
        .then(()=>res.send({message:"Registered successfully!",user:newUser}))
        .catch(err=>res.status(400).json('Error: '+err));
        }
    })
  
});

module.exports = router;