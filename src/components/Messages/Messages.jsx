import React from "react";
import style from './Messages.module.css';
import Message from "./Message/Message";
import User from "./User/User";
import NewMessage from "./NewMessage/NewMessage";

const Messages = (props) => {
    console.log(props)

    const users = props.messagesData.usersData.map((el, index) => <User name={el.name} id={el.id} imgSrc={el.imgSrc} key={index} />)

    const messages = props.messagesData.messageData.map((el, index) => <Message message={el.message} name={el.name} imgSrc={el.imgSrc} key={index} />)

    return (
        <div className={style.Messages}>
            <div className={style.div}>
                {users}
            </div>
            <div className={style.div2}>
                <div className={style.div3} >
                    {messages}
                </div>

                <NewMessage
                    //  inputData={props.messagesData.inputData} dispatch={props.dispatch}
                    {...props}
                />
            </div>
        </div>
    )
}

export default Messages;