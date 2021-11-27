import React, { useEffect, useState } from 'react'
import { Post } from '../Post/Post'
import "./feed.css"
import Share from '../Share/Share'

export const Feed = (props) => {

    let defaultUrl = "http://localhost:5000";
    const [postData, setPostData] = useState([]);
   
    // fetch posts
    useEffect(() => {
        let url = defaultUrl + "/posts/";
        console.log(url);
        let unmounted = false;
        fetch(url).then((response) => {
            if (!unmounted) {
                if (response.ok) {
                    response.json().then((data) => {
                        setPostData(data.sort((p1, p2) => {
                            return new Date(p2.createdAt) - new Date(p1.createdAt);
                        }));
                    })
                }
                else {
                    console.log("Error");
                }
            }
        })
            .catch((e) => {
                if (!unmounted) {
                    alert("response ERROR" + e);

                }
            });
        return function cleanup() {
            unmounted = true;
        };
    }, [])
  

    return (
        <div className="container">
            <div className="feed">
                <div className="feedWrapper">
                    <div className="container">

                    {/* Checking if user has privileges to share a post */}
                    {props.user.privileges ? <Share userData={props.userData} user={props.user}></Share> : ""}
                    </div>
                    <div className="container">
                    {postData.map((p) => {
                        return (
                            
                                <Post key={p.id} post={p} userData={props.userData} user={props.user}></Post>
                          
                        )
                    })}

                    </div>
                </div>
            </div>
        </div>
        
    )
}