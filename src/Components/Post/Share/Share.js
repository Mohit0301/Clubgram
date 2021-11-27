import "./Share.css"
import { PermMedia } from '@material-ui/icons';
import { Image } from 'cloudinary-react'
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import Axios from "axios";
export default function Share(props) {
    console.log(props.user);
    const [file, setFile] = useState(null);
    let url = useRef("");
    const desc = useRef();

    //Sharing the post
    const SubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "zxohhc3u");
            console.log(file);

            //Uploading image on cloudinary
            await Axios.post("https://api.cloudinary.com/v1_1/dfhdwzrzh/image/upload", data)
            .then((res) => { console.log(res); url.current = res.data.secure_url; });




            const newPost = {
                user_id: props.user._id,
                desc: desc.current.value,
                url: url.current

            }

            //Creating a new post
            await axios.post("http://localhost:5000/posts/create", newPost);
            window.location.reload();
        } catch (err) {

        }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    {props.user.profile_pic ? <Image className="postProfileImg" cloudName="dfhdwzrzh" public_id={props.user.profile_pic} /> :
                        <img className="postProfileImg" src={require("../../../Images/profile.jpg").default} alt="../../../Images/profile.jpg"></img>}
                    <input placeholder="What's on your mind?" className="shareInput" ref={desc}></input>
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" >
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input type="file" id="file" accept=".png,.jpg,.jpeg,.PNG" onChange={(e) => setFile(e.target.files[0])} />
                        </label>

                    </div>
                    <div className="shareButton">
                        <button className="btn btn-success" type="submit" onClick={(e) => { console.log(file); SubmitHandler(e) }}>Share</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
