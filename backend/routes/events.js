const router = require('express').Router();
let Event = require('../models/events.model');

router.route('/').get((req,res)=>{
    Event.find()
    .then(events=>res.json(events))
    .catch(err=>res.status(400).json('Error: '+ err));
});




router.route("/:id/attend").post(async(req,res)=>{
    try{
        const event = await Event.findById(req.params.id);
       if(!event.attend.includes(req.body.user_id))
        {
        event.attend.push(req.body.user_id);
        savedEvent =await event.save();
        console.log(event);
        res.status(200).json(event);
        }
        else{
            res.status(200).json(event);
        }
    }
    catch(err)
    {
        res.status(400).json(err);
    }
})


router.route('/add').post((req,res)=>{
    const clubName = req.body.clubName;
    const eventName = req.body.eventName;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const platform = req.body.platform;
    const eventDesc = req.body.eventDesc;
    const eventInfo = req.body.eventInfo;
    console.log(req.body);
  
    const newEvent = new Event({clubName,eventName,eventDesc,startDate,startTime,endDate,endTime,platform,eventInfo});
    console.log(newEvent);
    newEvent.save()
    .then(()=>res.send({message:'Event added!'}))
    .catch(err=>res.status(400).json('Error: '+err));
});

module.exports = router;