const nodemailer = require('nodemailer');
const router = require('express').Router();
const cron = require('node-cron');


//send mail
router.route('/send').post(async(req,res)=>{

    const mailOptions ={
        from:"clubgram9@gmail.com",
        to:req.body.to,
        subject:"Reminder",
        text:"The event is about to start in 2 hours, don't miss out!",
    };
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"clubgram9@gmail.com",
            pass:"clubgram123",
        }
    })
   
    const day = req.body.date.substring(8,10);
    const month = req.body.date.substring(5,7);
    const minutes = req.body.time.substring(3,5);
    let hour = req.body.time.substring(0,2)-2;
    console.log(minutes+' '+hour+' '+day+' '+month+' *');
    
    cron.schedule(minutes+' '+hour+' '+day+' '+month+' * ',()=>{
        transporter.sendMail(mailOptions,(error,info)=>{

            if(error)
            {
                console.log(error);
                res.status(400).send(error);
            }
            else{
                console.log("Email sent "+info.response);
                res.status(200).send(info.response);
            }
        })

    })
  

})

router.route('/query').post(async(req,res)=>{
    console.log(req.body);
    const mailOptions ={
        from:"clubgram9@gmail.com",
        to:req.body.to,
        subject:req.body.subject,
        text:req.body.text,
    };
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"clubgram9@gmail.com",
            pass:"clubgram123",
        }
    })
   
 
        transporter.sendMail(mailOptions,(error,info)=>{

            if(error)
            {
                console.log(error);
                res.status(400).send(error);
            }
            else{
                console.log("Email sent "+info.response);
                res.status(200).send(info.response);
            }
        })

   
  

})


module.exports = router;