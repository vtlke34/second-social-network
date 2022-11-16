import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import axios from "axios";
import { setUserData } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        const userID = this.props.param.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID || 2}`).then(response => {
            this.props.setUserData(response.data)

        })
    }

    render() {
        return <div className={style.Profile}>
            <ProfileInfo userData={this.props.userData} />
            <MyPosts
                store={this.props.store}
            />
        </div>
    }
}

const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}


const mapStatetoProps = (state) => {
    return {
        userData: state.profilePage.userData,
        postData: state.profilePage.postData,
        userID: state.profilePage.userID
    }
}


export default connect(mapStatetoProps, { setUserData })(TakeParams);