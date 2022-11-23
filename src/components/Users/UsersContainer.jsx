import { connect } from 'react-redux'
import { follow, followProcess, getUsers, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, toggleIsFollowing, unfollow, unfollowProcess } from '../../redux/users-reducer'
import Users from './Users'
import React from "react"

class UsersContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUsers(this.props.count, this.props.page)
    }

    setCurPage = (page) => {
        this.props.getUsers(this.props.count, page)
    }

    render = () => {
        return <Users
            usersData={this.props.usersData}
            totalCount={this.props.totalCount}
            count={this.props.count}
            page={this.props.page}
            isFetching={this.props.isFetching}
            isFollowing={this.props.isFollowing}
            toggleIsFollowing={this.props.toggleIsFollowing}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUsers={this.props.setUsers}
            setCurPage={this.setCurPage}
            followProcess={this.props.followProcess}
            unfollowProcess={this.props.unfollowProcess}
        />
    }
}

const mapStatetoProps = (state) => {
    return {
        usersData: state.users.usersData,
        totalCount: state.users.totalCount,
        count: state.users.count,
        page: state.users.page,
        isFetching: state.users.isFetching,
        isFollowing: state.users.isFollowing,

    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow(id) {
//             dispatch(follow(id))
//         },
//         unfollow(id) {
//             dispatch(unfollow(id))
//         },
//         setUsers(users) {
//             dispatch(setUsers(users))
//         },
//         setTotalCount(totalCount) {
//             dispatch(setTotalCount(totalCount))
//         },
//         setCurrentPage(page) {
//             dispatch(setCurrentPage(page))
//         },
//         toggleIsFetching(isFetching) {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }

export default connect(mapStatetoProps,
    { follow, unfollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching, toggleIsFollowing, getUsers, followProcess, unfollowProcess })(UsersContainer)