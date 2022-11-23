import React from "react";
import Preloader from "../../Common/Preloader";
import style from './ProfileInfo.module.css';
import Status from "./Status";

const ProfileInfo = (props) => {
    if (!props.userData) {
        return <Preloader />
    }

    const contacts = props.userData.contacts
    const keys = Object.keys(contacts)

    return (
        <div className={style.ProfileInfo}>
            <div className={style.information}>
                {
                    props.userData.photos.large
                        ? <img className={style.logo} src={props.userData.photos.large} />
                        : <img className={style.logo} src={'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'} />
                }

                <div>
                    <h2 className={style.name}>
                        {props.userData.fullName}
                    </h2>
                    <Status />
                    <ul className={style.description}>

                        {
                            keys.map(key => {
                                return <li key={key} className={style.descriptionItem}>
                                    {`${key}: ${contacts[key] ? contacts[key] : '-'}`}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default ProfileInfo;