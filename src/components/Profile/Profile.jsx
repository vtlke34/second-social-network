import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={style.Profile}>
        <img className={style.folder} src='https://images.pexels.com/photos/982263/pexels-photo-982263.jpeg?cs=srgb&dl=pexels-pok-rie-982263.jpg&fm=jpg'></img>
        <div className={style.information}>
            <img className={style.logo} src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'></img>
            <div>
                <h2 className='name'>Name Name</h2>
                <ul className='description'>
                    <li>City</li>
                    <li>Age</li>
                    <li>Education</li>
                </ul>
            </div>
        </div>
        <MyPosts />
    </div>
}

export default Profile;