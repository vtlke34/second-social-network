import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";
import Login from "./Login";

const LoginContainer = (props) => {
    return <Login {...props} />
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { loginThunk })(LoginContainer)
