import api from "../api/api"

const ADD_POST = 'ADD-POST'
const INPUT_POST = 'INPUT-POST'
const SET_USER_DATA = 'SET-USER-DATA'
const SET_AUTH_ID = 'SET-AUTH-ID'


const initialState = {
    userData: null,
    postData: [
        { id: 1, name: 'name', text: 'hello', likeCount: '3' },
        { id: 2, name: 'name', text: 'i am hero', likeCount: '-1' }
    ],
    inputData: '',
    authId: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const post = {
                id: 5,
                name: 'name',
                text: state.inputData,
                likeCount: '3'
            }
            return {
                ...state,
                postData: [...state.postData, post],
                inputData: ''
            }
        case INPUT_POST:
            return {
                ...state,
                inputData: action.inputText
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData
            }
        case SET_AUTH_ID:
            return {
                ...state,
                authId: action.id
            }
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const inputPost = (text) => {
    return {
        type: INPUT_POST,
        inputText: text
    }
}
export const setUserData = (userData) => {
    return {
        type: SET_USER_DATA,
        userData
    }
}

const setAuthId = (id) => {
    return {
        type: SET_AUTH_ID,
        id
    }
}

export const thunkAuthId = (userID) => {
    return (dispatch) => {
        api.getAuthData()
            .then(data => {
                dispatch(setAuthId(data.data.id))
                api.getProfile(userID).then(data => {
                    dispatch(setUserData(data))
                })
            })
    }
}

export default profileReducer