import React from "react";
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header className={style.Header}>
            <h1>Реакт</h1>
            <div>
                {
                    props.isAuth
                        ? <div className={style.login}>
                            <span>{props.login}{'( '}</span>
                            <span className={style.exit} onClick={props.logoutThunk}>выйти</span>
                            <span>{' )'}</span>
                        </div>
                        : undefined
                }

            </div>
        </header>
    )
}

export default Header;