import React from "react";
import { NavLink } from "react-router-dom";
import BestFriends from "./BestFriends/BestFriends";
import style from './Navbar.module.css'

const Navbar = (props) => {
    const isActive = ({ isActive }) => (isActive ? style.active : style.link)

    return (
        <div className={style.Navbar}>
            <nav>
                <NavLink to='/profile' className={isActive}>Profile</NavLink>
                <NavLink to='/messages' className={isActive}>Messages</NavLink>
                <NavLink to='/news' className={isActive}>News</NavLink>
                <NavLink to='/music' className={isActive}>Music</NavLink>
                <NavLink to='/settings' className={isActive}>Settings</NavLink>
                <NavLink to='/users' className={isActive}>Users</NavLink>
            </nav>

            <BestFriends {...props} />
        </div >
    )
}

export default Navbar;