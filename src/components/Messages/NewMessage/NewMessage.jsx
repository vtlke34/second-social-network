import React from "react";
import style from './NewMessage.module.css'
import { addMessageActionCreator, inputMessageActionCreator } from "../../../redux/messages-reducer";

const NewMessage = (props) => {
    const textMessage = React.createRef()

    const addMessage = () => {
        const action = addMessageActionCreator
        props.dispatch(action)
        // props.addMessage();
    }

    const inputMessage = () => {
        const action = inputMessageActionCreator
        action.inputText = textMessage.current.value
        props.dispatch(action)
        // props.inputMessage(textMessage.current.value)
    }

    return (
        <div className={style.newMessage} >
            <textarea className={style.text} rows='1' placeholder='Введите новое сообщение...' value={props.inputData} ref={textMessage} onInput={inputMessage} ></textarea>
            <button className={style.button} onClick={addMessage} >Отправить</button>
        </div>
    )
}

export default NewMessage