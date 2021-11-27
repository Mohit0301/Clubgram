import axios from 'axios';
import React, { useState } from 'react'
import Scrollbars from 'react-scrollbars-custom'
import '../search.css'
import { useHistory } from 'react-router-dom';


export const UserList = (props) => {
    
    const [newChat, setNewChat] = useState(false);
    let color = "";
    let count = 0;
    const history = useHistory();
    let defaultUrl = "http://localhost:5000";

    //Create new conversation and redirect to /Connect
    const chatHandler = (e, users) => {
        e.preventDefault();
        console.log(users._id);
        const newConversation = {
            sender_id: props.currentUser._id,
            receiver_id: users._id
        }
        console.log(newConversation)
        try {

            const res = axios.post(defaultUrl + "/conversations/", newConversation);
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
        setNewChat(true);
        history.push('/Connect');

    };


    return (
        <div className="container my-3">
            <div className="card">
                <Scrollbars style={{ height: 500 }}>
                    <table class="table">

                        <tbody >

                            <tr className="headerColor" >
                                <th scope="row" >#</th>
                                <th scope="row">Roll Number</th>
                                <th scope="row">Name</th>
                                <th scope="row">Branch</th>
                                <th scope="row">Year</th>
                                <th scope="row">Chat</th>
                            </tr>


                            {
                                !newChat ?
                                    props.users.map((users) => {
                                        console.log(count);
                                        count = count + 1;
                                        if (count % 2 === 1) {
                                            color = "colorLight";
                                        }
                                        else {
                                            color = "colorDark";
                                        }
                                        return (





                                            <tr className={color} >
                                                <th scope="row">{count}</th>
                                                <td >{users.roll_number}</td>
                                                <td >{users.user_name}</td>
                                                <td >{users.branch}</td>
                                                <td >{users.year}</td>
                                                <td ><button className="btn btn-primary" onClick={(e) => { chatHandler(e, users) }}>Chat</button></td>
                                            </tr>


                                        )
                                    }) :


                                    ""}
                        </tbody>
                    </table>
                </Scrollbars>
            </div>
        </div>
    )
}
