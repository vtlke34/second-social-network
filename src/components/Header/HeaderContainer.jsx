import React from "react";
import { connect } from "react-redux";
import { logoutThunk, thunkAuthData } from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {
    componentDidMount() {
        // this.props.thunkAuthData()
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

export default connect(mapStateToProps, { thunkAuthData, logoutThunk })(HeaderContainer)