const  io  = require("socket.io")(8900,{
    cors:{
        origin:"http://localhost:3000"
    }
});

let users = [];

const addUser = (user_id, socket_id)=>{
    !users.some(user=>user.user_id===user_id)&&
    users.push({user_id,socket_id});
}


const getUser = (user_id)=>{
    console.log(users);
    return users.find(user=>user.user_id===user_id)
}

const removeUser = (socket_id)=>{
   users = users.filter(user=>user.socket_id!==socket_id);
}

//when connected
io.on("connection",(socket)=>{
    console.log("User connected");
    //take userId and socketId from user
    socket.on("addUser",(user_id)=>{
        addUser(user_id, socket.id);
        io.emit("getUsers", users)
    });


    //send and get message
    socket.on("sendMessage",({sender_id,receiver_id,text})=>{
        const user = getUser(receiver_id);
        console.log(receiver_id);
        io.to(user?.socket_id).emit("getMessage",{sender_id,text});
    })


    //when disconnected
    socket.on("disconnect",()=>{
        console.log("User disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users)

    })
   
});