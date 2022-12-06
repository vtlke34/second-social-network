import { apiAuth } from "../api/api"

const SET_AUTH_DATA = 'SET-AUTH-DATA'
const UNSET_AUTH_DATA = 'UNSET-AUTH-DATA'
const SET_WARNING = 'SET-WARNING'
const UNSET_WARNING = 'UNSET-WARNING'

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    warning: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case UNSET_AUTH_DATA:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false,
                warning: false,
            }
        case SET_WARNING:
            return {
                ...state,
                warning: true
            }
        case UNSET_WARNING:
            return {
                ...state,
                warning: false
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

export const unsetAuthData = () => {
    return {
        type: UNSET_AUTH_DATA,
    }
}

export const setWarning = () => {
    return {
        type: SET_WARNING
    }
}

export const unsetWarning = () => {
    return {
        type: UNSET_WARNING
    }
}

export const thunkAuthData = () => {
    return (dispatch) => {
        return apiAuth.getAuthData()
            .then(response => {
                if (response.resultCode == 0) {
                    dispatch(setAuthData(response.data))
                }
            })
    }
}

export const loginThunk = (data) => {
    return (dispatch) => {
        apiAuth.login(data)
            .then(data => {
                console.log(data)
                if (data.resultCode === 0) {
                    dispatch(unsetWarning())
                    apiAuth.getAuthData()
                        .then(response => {
                            if (response.resultCode == 0) {
                                dispatch(setAuthData(response.data))
                            }
                        })
                } else {
                    dispatch(setWarning())
                }
            })
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        apiAuth.logout()
            .then(() => {
                dispatch(unsetAuthData())
            })

    }
}

export default authReducer