import React, { useEffect } from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import { getUserProfile, getStatusThunk, updateStatusThunk, updateProfileThunk } from "../../redux/profile-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import withRoute from "../../hoc/withRoute";
import { compose } from "redux";
import { getAuthID, getPostData, getStatus, getUserData } from "../../redux/selectors";

const ProfileContainer = (props) => {
    useEffect(() => {
        const userID = props.param.userId || props.authId
        props.getUserProfile(userID)
        props.getStatusThunk(userID)
    }, [props.param.userId, props.authId])

    return <div className={style.Profile}>
        <ProfileInfo userData={props.userData} status={props.status} updateStatusThunk={props.updateStatusThunk} updateProfileThunk={props.updateProfileThunk} />
        <MyPosts store={props.store} />
    </div>
}

const mapStatetoProps = (state) => {
    return {
        userData: getUserData(state),
        postData: getPostData(state),
        authId: getAuthID(state),
        status: getStatus(state)
    }
}

export default compose(
    withAuthRedirect,
    withRoute,
    connect(mapStatetoProps, { getUserProfile, getStatusThunk, updateStatusThunk, updateProfileThunk }),
)(
    ProfileContainer
)
