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

export const getFriendsThunk = () => async (dispatch) => {
    const response = await apiUsers.getFriends()
    if (!response.error) {
        dispatch(getFriends(response.items))
    }
}

export default sidebarReducer