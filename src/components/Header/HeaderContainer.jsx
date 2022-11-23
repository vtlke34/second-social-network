import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthData, thunkAuthData } from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {
    componentDidMount() {
        // axios.get('https://social-network.samuraijs.com/api/1.0//auth/me', { withCredentials: true })
        //     .then(response => {
        //         this.props.setAuthData(response.data.data)
        //     })
        this.props.thunkAuthData()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { setAuthData, thunkAuthData })(HeaderContainer)