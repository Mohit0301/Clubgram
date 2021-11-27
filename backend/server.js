const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})



const clubRouter = require('./routes/clubs');
app.use('/clubs',clubRouter);
const eventRouter = require('./routes/events');
app.use('/events',eventRouter);
const postRouter = require('./routes/posts');
app.use('/posts',postRouter);
const userRouter = require('./routes/users');
app.use('/users',userRouter);
const messageRouter = require('./routes/messages');
app.use('/messages',messageRouter);
const conversationRouter = require('./routes/conversations');
app.use('/conversations',conversationRouter);
const mailRouter = require('./routes/mail');
app.use('/mail',mailRouter);
const memberRouter = require('./routes/members');
app.use('/member',memberRouter);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});