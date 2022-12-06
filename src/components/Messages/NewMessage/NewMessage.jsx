import React from "react";
import style from './NewMessage.module.css'


const NewMessage = (props) => {
    console.log(props)
    const textMessage = React.createRef()

    const addMessage = () => {
        // const action = addMessageActionCreator
        // props.dispatch(action)
        return props.addMessage;
    }

    const inputMessage = () => {
        // const action = inputMessageActionCreator
        // action.inputText = textMessage.current.value
        // props.dispatch(action)
        return props.inputMessage(textMessage.current.value)
    }

    return (
        <div className={style.newMessage} >
            <textarea
                className={style.text}
                rows='1'
                placeholder='Введите новое сообщение...'
                value={props.messagesData.inputData}
                ref={textMessage}
                onChange={(e) => props.inputMessage(e.target.value)} >
            </textarea>

            <button className={style.button} onClick={props.addMessage} >Отправить</button>
        </div>
    )
}

export default NewMessage