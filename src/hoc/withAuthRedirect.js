import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const withAuthRedirect = (Component) => {

    const redirectComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to='/login' />
        }
        return <Component {...props} />
    }

    const mapStatetoProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect(mapStatetoProps, {})(redirectComponent)

}

export default withAuthRedirect