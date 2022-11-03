import React from "react";
import style from './NewMessage.module.css'

const NewMessage = (props) => {
    const textMessage = React.createRef()

    const addMessage = () => {
        props.addMessage();
    }

    const inputMessage = () => {
        props.inputMessage(textMessage.current.value)
    }

    return (
        <div className={style.newMessage} >
            <textarea className={style.text} value={props.inputData} ref={textMessage} onInput={inputMessage} ></textarea>
            <button className={style.button} onClick={addMessage} >Отправить</button>
        </div>
    )
}

export default NewMessage