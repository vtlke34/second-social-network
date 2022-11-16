import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollow } from '../../redux/users-reducer'
import Users from './Users'
import axios from "axios"
import React from "react"
import Preloader from '../Common/Preloader'

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    setCurPage = (page) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${page}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render = () => {
        return <Users
            usersData={this.props.usersData}
            totalCount={this.props.totalCount}
            count={this.props.count}
            page={this.props.page}
            isFetching={this.props.isFetching}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUsers={this.props.setUsers}
            setCurPage={this.setCurPage} />


    }
}

const mapStatetoProps = (state) => {
    return {
        usersData: state.users.usersData,
        totalCount: state.users.totalCount,
        count: state.users.count,
        page: state.users.page,
        isFetching: state.users.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow(id) {
            dispatch(follow(id))
        },
        unfollow(id) {
            dispatch(unfollow(id))
        },
        setUsers(users) {
            dispatch(setUsers(users))
        },
        setTotalCount(totalCount) {
            dispatch(setTotalCount(totalCount))
        },
        setCurrentPage(page) {
            dispatch(setCurrentPage(page))
        },
        toggleIsFetching(isFetching) {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}


export default connect(mapStatetoProps, { follow, unfollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching })(UsersContainer)