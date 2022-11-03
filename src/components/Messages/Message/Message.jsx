import React from "react"
import style from './Message.module.css'

const Message = (props) => {
    return (
        <div className={style.message}>
            <img className={style.img} src={props.imgSrc} />
            <div>
                <h6 className={style.name} >{props.name}</h6>
                <p>{props.message}</p>
            </div>

        </div>
    )
}

export default Message;