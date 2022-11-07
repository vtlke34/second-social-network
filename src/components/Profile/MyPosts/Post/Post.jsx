import React from "react";
import style from './Post.module.css'

const Post = (props) => {

    return (
        <li className={style.post}>

            <h6 className={style.name}>
                {props.postData.name}
            </h6>

            <p className={style.text}>
                {props.postData.text}
            </p>

            <div className={style.likes}>
                {props.postData.likeCount + ' likes'}
            </div>

        </li>
    )
}

export default Post;