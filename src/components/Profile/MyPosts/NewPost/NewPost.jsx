import React from "react";
import style from './NewPost.module.css'

const NewPost = (props) => {
    return (
        <div className={style.newPost}>

            <textarea className={style.text} placeholder="Введите новый пост..." value={props.value} onChange={props.inputText}></textarea>

            <button className={style.button} onClick={props.addPost}>Отправить</button>

        </div>
    )
}

export default NewPost;