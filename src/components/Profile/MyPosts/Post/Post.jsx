import React from "react";
import style from './Post.module.css'

const Post = (props) => {

    const deletePost = (postId) => {
        props.deletePost(postId)
    }

    return (
        <li className={style.post}>

            <h6 className={style.name}>
                {props.postData.name}
            </h6>

            <p className={style.text}>
                {props.postData.text}
            </p>

            <div className={style.buttons}>
                <button className={style.likes}> {props.postData.likeCount + ' likes'} </button>
                <button className={style.delete} onClick={() => { deletePost(props.postData.id) }}> delete </button>
            </div>

        </li>
    )
}

export default Post;