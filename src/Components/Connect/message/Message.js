import './message.css'
import { Image } from 'cloudinary-react'
import { format } from "timeago.js";
import profile from '../conversations/profile.jpg'
export const Message = ({ message, own, sender, receiver }) => {
  
    return (
        <div className={own ? "message own" : "message"}>

            <div className="messageTop">
                {sender?.profile_pic && own ? <Image className="messageImg" cloudName="dfhdwzrzh" public_id={sender.profile_pic} /> :

                    receiver?.profile_pic && !own ? <Image className="messageImg" cloudName="dfhdwzrzh" public_id={receiver.profile_pic} /> :
                        <img className="messageImg" src={profile} alt={profile}></img>}

                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}
