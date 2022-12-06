import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import { getUserProfile, getStatusThunk, updateStatusThunk } from "../../redux/profile-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import withRoute from "../../hoc/withRoute";
import { compose } from "redux";
import { getAuthID, getPostData, getStatus, getUserData } from "../../redux/selectors";


class ProfileContainer extends React.Component {
    componentDidMount() {
        const userID = this.props.param.userId || this.props.authId
        this.props.getUserProfile(userID)
        this.props.getStatusThunk(userID)
    }

    render() {
        return <div className={style.Profile}>
            <ProfileInfo userData={this.props.userData} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} />
            <MyPosts store={this.props.store} />
        </div>
    }
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
    connect(mapStatetoProps, { getUserProfile, getStatusThunk, updateStatusThunk }),
)(
    ProfileContainer
)
