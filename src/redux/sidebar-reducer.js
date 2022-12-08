import { apiUsers } from "../api/api"

const GET_FRIENDS = 'GET_FRIENDS'

const initialState = {
    friendsData: []
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS:
            return {
                ...state,
                friendsData: [...action.friends]
            }
        default:
            return state
    }
}

const getFriends = (friends) => {
    return {
        type: GET_FRIENDS,
        friends
    }
}

export const getFriendsThunk = () => {
    return (dispatch) => {
        apiUsers.getFriends()
            .then((data) => {
                dispatch(getFriends(data))
                console.log(data)
            })
    }
}


export default sidebarReducer