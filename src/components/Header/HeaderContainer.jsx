import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthData } from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0//auth/me', { withCredentials: true })
            .then(response => {
                // console.log(response.data.data)
                this.props.setAuthData(response.data.data)
            })
    }

    render() {
        console.log(this.props)
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { setAuthData })(HeaderContainer)