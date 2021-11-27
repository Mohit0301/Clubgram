import React from 'react'
import './comments.css'
export const Comments = (props) => {
    
    return (
        <div >
            <div className="commentWrapper">
                <div className="commentTop">{props.user}</div>

                <div className="commentBottom">{props.comment}</div>
            </div>
        </div>
    )
}
