import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import { setUserData, thunkAuthId } from "../../redux/profile-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import withRoute from "../../hoc/withRoute";
import { compose } from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        const userID = this.props.param.userId || this.props.authId
        this.props.thunkAuthId(userID)
    }

    render() {
        return <div className={style.Profile}>
            <ProfileInfo userData={this.props.userData} />
            <MyPosts store={this.props.store} />
        </div>
    }
}


const mapStatetoProps = (state) => {
    return {
        userData: state.profilePage.userData,
        postData: state.profilePage.postData,
        userID: state.profilePage.userID,
        authId: state.auth.id,
    }
}


export default compose(
    connect(mapStatetoProps, { setUserData, thunkAuthId }),
    withAuthRedirect,
    withRoute
)(
    ProfileContainer
)
