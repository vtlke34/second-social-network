import React from "react";
import style from './User.module.css';
import { NavLink } from "react-router-dom";

const User = (props) => {
    return (
        <NavLink to={`${props.id}`} className={({ isActive }) => (isActive ? style.active : style.user)}>
            <img src={props.imgSrc} />
            <span>{props.name}</span>
        </NavLink>
    )
}

export default User