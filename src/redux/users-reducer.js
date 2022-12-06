import api, { apiUsers } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING'


const initialState = {
    usersData: [],
    totalCount: 66,
    count: 10,
    page: 1,
    isFetching: false,
    isFollowing: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    } else {
                        return user
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    } else {
                        return user
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                usersData: action.users
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                page: action.page
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.processFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const follow = (id) => {
    return {
        type: FOLLOW,
        userId: id
    }
}

export const unfollow = (id) => {
    return {
        type: UNFOLLOW,
        userId: id
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleIsFollowing = (userId, processFollowing) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        userId,
        processFollowing

    }
}

export const getUsers = (count, page) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        apiUsers.getUsers(count, page)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
                dispatch(toggleIsFetching(false))
            })

    }
}

export const followProcess = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(id, true))
        apiUsers.follow(id)
            .then(() => {
                dispatch(follow(id))
                dispatch(toggleIsFollowing(id, false))
            })
    }
}

export const unfollowProcess = (id) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(id, true))
        apiUsers.unfollow(id)
            .then(() => {
                dispatch(unfollow(id))
                dispatch(toggleIsFollowing(id, false))
            })
    }
}

export default usersReducer