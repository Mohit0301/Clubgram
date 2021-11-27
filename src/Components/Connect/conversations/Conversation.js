import axios from 'axios';
import './conversation.css'
import { Image } from 'cloudinary-react'
import profile from '../../../Images/profile.jpg'

import { useState, useEffect } from 'react';
export const Conversation = (props) => {

    let defaultUrl = "http://localhost:5000";
    const [user, setUser] = useState(null);
    const currentUser = props.currentUser;

    //Fetching receiver's information
    useEffect(() => {
        const peer_id = props.conversation.members.find((m) => m !== currentUser._id);
        const getUser = async () => {
            try {

                //Finding receiver by their userID
                const res = await axios(defaultUrl + "/users/" + peer_id);
                setUser(res.data);

            }
            catch (err) {
                console.log(err);
            }

        }
        getUser();
    }, [props.conversation])

    
    return (
        <>
            <div className="conversation colorDark">
                {user && user.profile_pic ? <Image className="postProfileImg" cloudName="dfhdwzrzh" public_id={user.profile_pic} /> :
                    <img className="postProfileImg" src={profile} alt="../../../Images/profile.jpg"></img>}
                <span className="conversationName"> {user ? user.user_name : ""}</span>

            </div>



        </>
    )
}
