import React from "react";
import style from './Post.module.css'

const Post = (props) => {
    return (
        <li className={style.post}>
            <p>{props.text}</p>
            <div className={style.likes}>{props.likeCount + ' likes'}</div>
        </li>
    )
}

export default Post;