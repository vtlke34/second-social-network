const SET_AUTH_DATA = 'SET-AUTH-DATA'

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state


    }
}

export const setAuthData = (data) => {
    return {
        type: SET_AUTH_DATA,
        data
    }
}

export default authReducer