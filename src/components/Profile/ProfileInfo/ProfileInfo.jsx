import React from "react";
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={style.ProfileInfo}>
            <img className={style.folder} src='https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg?cs=srgb&dl=pexels-pok-rie-982263.jpg&fm=jpg'></img>
            <div className={style.information}>
                <img className={style.logo} src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'></img>
                <div>
                    <h2 className={style.name}>Name Name</h2>
                    <ul className={style.description}>
                        <li className={style.descriptionItem}>City:</li>
                        <li className={style.descriptionItem}>Age:</li>
                        <li className={style.descriptionItem}>Education:</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;