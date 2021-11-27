const router = require('express').Router();
const fs = require('fs')
const { forStatement } = require('@babel/types');
let Club = require('../models/clubs.model');

router.route('/').get((req,res)=>{
    Club.find()
    .then(clubs=>res.json(clubs))
    .catch(err=>res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res)=>{
    const clubName = req.body.clubName;
  
    const desc = req.body.desc;
  
    const newClub = new Club({clubName,desc});
    newClub.save()
    .then(()=>res.json('Club added!'))
    .catch(err=>res.status(400).json('Error: '+err));
});

module.exports = router;