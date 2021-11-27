import './messenger.css'
import { Conversation } from '../conversations/Conversation'
import { Message } from '../message/Message'
import { useState, useEffect, useRef } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'

import { io } from "socket.io-client"
import axios from 'axios'
export const Messenger = (props) => {
    const user = props.user;
    const defaultUrl = "http://localhost:5000";
    const socket = useRef();
    const [receiver, setReceiver] = useState();
    const [sender, setSender] = useState();
    const [update, setUpdate] = useState(0);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const scrolledRef = useRef();


    //Getting the new message
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender: data.sender_id,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, [])

    
    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages(prev => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat])


    //Add user to the current socket
    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", users => {
            console.log(users);
        })
    }, [user])

    //Get the list of conversations involving the current user
    useDeepCompareEffect(() => {
        const getConversations = async () => {
            try {
                console.log("In useEffect");
                const res = await axios.get(defaultUrl + '/conversations/' + user._id)
                setConversations(res.data.sort((c1, c2) => {
                    return new Date(c2.updatedAt) - new Date(c1.updatedAt);
                }));
            }
            catch (err) {
                console.log(err);
            }
        }
        getConversations();
        console.log(conversations);
    }, [conversations, update])



    //Sending a message
    const submitHandler = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversation_id: currentChat._id
        }

        const receiver_id = currentChat.members.find(member => member !== user._id)

        socket.current.emit("sendMessage", {
            sender_id: user._id,
            receiver_id,
            text: newMessage,

        })

        try {

            //Adding message to the database
            const res = await axios.post(defaultUrl + "/messages/add", message);

            //Updating time of the conversation creation
            await axios.post(defaultUrl + '/conversations/' + currentChat._id);
           
            setUpdate(update + 1);
            setMessages([...messages, res.data]);
            setNewMessage("");
        }
        catch (err) {
            console.log(err);
        }
    }



    //Getting messages of current conversation
    useEffect(() => {

        const getMessages = async () => {
            try {
                const res = await axios.get(defaultUrl + "/messages/" + currentChat?._id);
                let receiver_id;
                currentChat.members.map((id) => {
                    if (id !== props.user._id) {
                        receiver_id = id;
                    }
                })

                //Fetching info of the receiver
                const receiver = await axios.get(defaultUrl + "/users/" + receiver_id);
                setReceiver(receiver.data);
                setMessages(res.data);
                console.log(receiver);

                //Fetching info of the sender
                const sender = await axios.get(defaultUrl + "/users/" + props.user._id);
                console.log(sender.data);
                setSender(sender.data);
            }
            catch (err) {
                console.log(err);
            }
        }

        getMessages();
        setUpdate(update + 1);
    }, [currentChat])

    //Scroll down on initial render and whenever a new message is sent
    useEffect(() => {
        scrolledRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])


    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="card-header header">Conversations</div>
                <div className="chatMenuWrapper">

                    <div className="chatMenuInput">

                        {conversations.map((conversation) => {

                            return (

                                <div onClick={() => setCurrentChat(conversation)}>
                                    <Conversation conversation={conversation} currentUser={user} />
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ?
                            <>
                                <div className="card-header">{receiver?.user_name}</div>
                                <div className="chatBoxTop">

                                    {messages.map((message) => {
                                        return (
                                            <div ref={scrolledRef}>
                                                { }
                                                <Message message={message} own={message.sender === user._id} sender={sender} receiver={receiver}></Message>
                                            </div>
                                        )
                                    })}



                                </div>
                                <div className="chatBoxBottom">
                                    <textarea className="chatMessageInput" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="write something..."></textarea>
                                    <button className="chatSubmitButton" onClick={submitHandler}>Send</button>
                                </div></> : <span className="noConversationText">Open a conversation to start a chat</span>}
                </div>
            </div>


        </div>
    )
}
