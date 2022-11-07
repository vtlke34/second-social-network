import { connect } from 'react-redux'
import Users from './Users'

const mapStatetoProps = (state) => {
    return {
        users: state.users.usersData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const UsersContainer = connect(mapStatetoProps, mapDispatchToProps)(Users)

export default UsersContainer