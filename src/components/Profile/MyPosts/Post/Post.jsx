import React from "react";
import style from './Post.module.css'

const Post = (props) => {
    return (
        <li className={style.post}>

            <h6 className={style.name}>
                {props.name}
            </h6>

            <p className={style.text}>
                {props.text}
            </p>

            <div className={style.likes}>
                {props.likeCount + ' likes'}
            </div>

        </li>
    )
}

export default Post;