import React from "react";
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header className={style.Header}>
            <h1>Реакт</h1>
            <div>
                {
                    props.isAuth
                        ? <div className={style.login}>{props.login}</div>
                        : <a className={style.login} href="https://social-network.samuraijs.com/">Login</a>
                }

            </div>
        </header>
    )
}

export default Header;