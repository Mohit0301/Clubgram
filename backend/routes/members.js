const router = require('express').Router();
let Member = require('../models/members.model');

//Add message

//Get message
router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const year = req.body.year;
    const branch = req.body.branch;
    const position = req.body.position;
    const club_name = req.body.club;
    const image = req.body.file;

    console.log(req.body);
  
    const newMember = new Member({name,year,branch,position,club_name,image});
    
    newMember.save()
    .then(()=>res.send({message:'Member added!'}))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/find').post(async(req,res)=>{
   
    try{
      const  members = await Member.find({
          club_name:req.body.club
      });
        res.status(200).send(members);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})

module.exports = router;