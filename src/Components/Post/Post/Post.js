import React, { useState } from 'react'
import { MoreVert } from '@material-ui/icons';
import { format } from "timeago.js";
import { Comments } from '../Comments/Comments';
import { Image } from 'cloudinary-react'
import Scrollbars from 'react-scrollbars-custom'
import '../Comments/comments.css'
import axios from "axios";
import './Post.css';
import likeIcon from '../../../Images/like.png';
import unlike from '../../../Images/unlike.png'

export const Post = (props) => {


    const current_user = props.user._id;
    const [newComment, setNewComment] = useState("");
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState();
    const [like, setLike] = useState(props.post.likes.length);
    const [isLiked, setIsLiked] = useState(props.post.likes.includes(current_user) ? true : false);
    const user = props.userData.filter(u => u._id === props.post.user_id)[0];
    console.log(user);
    //Adding like to the post
    const likeHandler = () => {
        try {
            axios.put("http://localhost:5000/posts/" + props.post._id + "/like", { userId: props.user._id });
        } catch (err) { }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    //Adding comments
    const submitCommentHandler = async (e) => {
        e.preventDefault();
        const addComment = {
            comment: newComment,
            user_name: props.user.user_name
        }

        setNewComment("");
        try {
            const res = await axios.post("http://localhost:5000/posts/comments/" + props.post._id, addComment);
            console.log(res.data.comments);
            setComments(res.data.comments);



        }
        catch (err) {
            console.log(err);
        }

    }



    return (
        <div className="container my-3">
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">

                            {user.profile_pic ? <Image className="postProfileImg" cloudName="dfhdwzrzh" public_id={user.profile_pic} /> :
                                <img className="postProfileImg" src={require("../../../Images/profile.jpg").default} alt="../../../Images/profile.jpg"></img>}
                            <span className="postClubName">{user.user_name}</span>
                            <span className="postDate">{format(props.post.createdAt)}</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert></MoreVert>
                        </div>
                    </div>

                    <div className="postCenter">
                        <div className="postCenterTop">
                            <span className="postText">{props.post?.desc}</span>
                        </div>

                        <div className="postCenterBottom">
                            {props.post.url ? <Image className="postImg" cloudName="dfhdwzrzh" public_id={props.post.url} /> : <img className="postImg" src={require("../../../Images/profile.jpg").default} alt=""></img>}

                        </div>
                    </div>


                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className="likeIcon" src={isLiked ? likeIcon : unlike} alt="" onClick={likeHandler}></img>
                            <span className="likeCounter">{like} people liked it</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postComment" onClick={() => { setShowComments(!showComments); !comments ? setComments(props.post.comments) : setComments(comments) }}>{comments ? comments.length : props.post.comments.length} comments</span>
                        </div>

                    </div>
                </div>
            </div>

            {showComments ? <div className="container">


                <Scrollbars style={{ height: 150 }}>


                    {showComments ?

                        comments?.map((c) => {

                            return (

                                <tr>   <Comments comment={c.comment} user={c.user_name}></Comments></tr>)

                        })




                        : ""} </Scrollbars><form className="enterComment" onSubmit={(e) => submitCommentHandler(e)}><input type="text" value={newComment} placeholder="Enter comment" onChange={(e) => setNewComment(e.target.value)} className="textBox" /><button className="commentButton" type="submit">Enter</button></form></div> : ""}

        </div>
    )
}

