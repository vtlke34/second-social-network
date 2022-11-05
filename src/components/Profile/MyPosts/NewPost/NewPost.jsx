import React from "react";
import style from './NewPost.module.css'
import { addPostActionCreator, inputPostActionCreator } from "../../../../redux/profile-reducer";

const NewPost = (props) => {
    const textPost = React.createRef()

    const inputText = () => {
        const action = inputPostActionCreator
        action.inputText = textPost.current.value
        props.dispatch(action)
    }

    const addPost = () => {
        const action = addPostActionCreator;
        props.dispatch(action)
    }

    return (
        <div className={style.newPost}>

            <textarea className={style.text} placeholder="Введите новый пост..." value={props.inputData} ref={textPost} onChange={inputText}></textarea>

            <button className={style.button} onClick={addPost}>Отправить</button>

        </div>
    )
}

export default NewPost;