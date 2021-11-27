import React from 'react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Axios from 'axios';
import { Image } from 'cloudinary-react'
export const Profile = (props) => {
    const [file, setFile] = useState(null);
    const url = useRef("");
    const [user, setUser] = useState(props.user);
   
    useEffect(async () => {

        try {

            if (file) {
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "zxohhc3u");
                console.log(file);

                //Uploading profile picture to cloudinary
                await Axios.post("https://api.cloudinary.com/v1_1/dfhdwzrzh/image/upload", data).then((res) => { console.log(res); url.current = res.data.secure_url });

                const updateUser = props.user;
                updateUser.profile_pic = url.current;
                
                //Updating user's profile picture
                const updated_user = await axios.post("http://localhost:5000/users/update/" + props.user._id, updateUser);
                setUser(updated_user);
                props.updateUser(updateUser)
                window.location.reload();
            }

        } catch (err) {

        }

    }, file)

    
    return (

        <div>

            <label htmlFor="file" className="shareOption">
                {user.profile_pic ? <Image className="postProfileImg" cloudName="dfhdwzrzh" public_id={user.profile_pic} /> :
                    <img className="postProfileImg" src={require("../../../Images/profile.jpg").default} alt="../../../Images/profile.jpg"></img>}


                <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpg,.jpeg,.jfif" onChange={(e) => setFile(e.target.files[0])} />


            </label>
        </div>
    )
}
