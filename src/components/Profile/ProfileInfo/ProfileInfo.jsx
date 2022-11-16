import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    const contacts = props.userData.contacts
    const keys = Object.keys(contacts)

    return (
        <div className={style.ProfileInfo}>
            <img className={style.folder} src='https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg?cs=srgb&dl=pexels-pok-rie-982263.jpg&fm=jpg'></img>
            <div className={style.information}>
                <img className={style.logo} src={props.userData.photos.large}></img>
                <div>
                    <h2 className={style.name}>
                        {props.userData.fullName}
                    </h2>
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