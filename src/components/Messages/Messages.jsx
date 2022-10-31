import React from "react";
import { NavLink, Route } from "react-router-dom";
import style from './Messages.module.css'

const usersData = [
    { id: 1, name: 'lera' },
    { id: 2, name: 'alina' },
    { id: 3, name: 'andrey' },
    { id: 4, name: 'dima' },
];

const messageData = [
    { id: 1, message: "hy, you're idiot" },
    { id: 2, message: 'i am not idiot!!!' }
]

const User = (props) => {
    return (
        <NavLink to={`${props.id}`} className={style.user}>
            {props.name}
        </NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )


}

const Messages = (props) => {
    return (
        <div className={style.Messages}>
            <div className={style.users}>
                <User name={usersData[0].name} id={usersData[0].id} />
                <User name={usersData[1].name} id={usersData[1].id} />
                <User name={usersData[2].name} id={usersData[2].id} />
                <User name={usersData[3].name} id={usersData[3].id} />
            </div>
            <div className={style.dialog}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
            </div>
        </div>
    )
}

export default Messages;