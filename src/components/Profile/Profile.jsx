import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div className={style.Profile}>
        <ProfileInfo />
        <MyPosts
            store={props.store}
        // state={props.profileData}
        // dispatch={props.dispatch}
        />
    </div>
}

export default Profile;