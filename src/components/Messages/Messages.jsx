import React from "react";
import style from './Messages.module.css';
import Message from "./Message/Message";
import User from "./User/User";
import NewMessage from "./NewMessage/NewMessage";

const Messages = (props) => {

    const users = props.messagesData.usersData.map(el => <User name={el.name} id={el.id} imgSrc={el.imgSrc} />)

    const messages = props.messagesData.messageData.map(el => <Message message={el.message} name={el.name} imgSrc={el.imgSrc} />)

    return (
        <div className={style.Messages}>
            <div className={style.div}>
                {users}
            </div>
            <div className={style.div2}>
                <div className={style.div3} >
                    {messages}
                </div>

                <NewMessage addMessage={props.addMessage} inputData={props.messagesData.inputData} inputMessage={props.inputMessage} />
            </div>
        </div>
    )
}

export default Messages;