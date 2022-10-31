import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from './Navbar.module.css'

const Navbar = () => {
    return <nav className={style.Navbar}>
        <NavLink to='/profile' className={({ isActive }) => (isActive ? style.active : "")}>Profile</NavLink>
        <NavLink to='/messages' className={({ isActive }) => (isActive ? style.active : "")}>Messages</NavLink>
        <NavLink to='/news' className={({ isActive }) => (isActive ? style.active : "")}>news</NavLink>
        <NavLink to='/music' className={({ isActive }) => (isActive ? style.active : "")}>Music</NavLink>
        <NavLink to='/settings' className={({ isActive }) => (isActive ? style.active : "")}>Settings</NavLink>
    </nav >
}

export default Navbar;