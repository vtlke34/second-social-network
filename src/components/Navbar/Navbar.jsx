import React from "react";
import { Link, NavLink } from "react-router-dom";
import BestFriends from "./BestFriends/BestFriends";
import style from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={style.Navbar}>
            <nav>
                <NavLink to='/profile' className={({ isActive }) => (isActive ? style.active : style.link)}>Profile</NavLink>
                <NavLink to='/messages' className={({ isActive }) => (isActive ? style.active : style.link)}>Messages</NavLink>
                <NavLink to='/news' className={({ isActive }) => (isActive ? style.active : style.link)}>News</NavLink>
                <NavLink to='/music' className={({ isActive }) => (isActive ? style.active : style.link)}>Music</NavLink>
                <NavLink to='/settings' className={({ isActive }) => (isActive ? style.active : style.link)}>Settings</NavLink>
            </nav>

            <BestFriends bestFriends={props.sidebarData} />
        </div >
    )
}

export default Navbar;