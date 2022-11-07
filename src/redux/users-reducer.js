const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'



const initialState = {
    usersData: [
        { id: 1, name: 'name', status: 'status', location: { city: 'city', country: 'cOuntry' }, followed: true },
        { id: 1, name: 'name', status: 'status', location: { city: 'city', country: 'country' }, followed: false },
        { id: 1, name: 'name', status: 'status', location: { city: 'city', country: 'country' }, followed: true }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.userId) {
                        user.followed = true
                    }
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.userId) {
                        user.followed = false
                    }
                })
            }

        default:
            return state
    }
}

export const followAC = (id) => {
    return {
        type: FOLLOW,
        userId: id
    }
}

export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        userId: id
    }
}

export default usersReducer