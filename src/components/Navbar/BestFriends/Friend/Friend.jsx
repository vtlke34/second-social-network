import React from "react";
import style from './Friend.module.css';
import { NavLink } from "react-router-dom";

const Friend = (props) => {
    return (
        <NavLink to={`${props.id}`} className={style.friend}>
            <img src={`${props.imgSrc}`} alt="" />
            <p>{props.name}</p>
        </NavLink>
    )
}

export default Friend