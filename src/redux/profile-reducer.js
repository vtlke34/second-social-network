import { apiProfile } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_DATA = 'SET-USER-DATA'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS'


const initialState = {
    userData: null,
    postData: [
        { id: 1, name: 'name', text: 'hello', likeCount: '3' },
        { id: 2, name: 'name', text: 'i am hero', likeCount: '1' }
    ],
    status: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const post = {
                id: Date.now(),
                name: 'name',
                text: action.text,
                likeCount: '0'
            }
            return {
                ...state,
                postData: [...state.postData, post],
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(post => post.id !== action.postId)
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: { ...state.userData, ...action.userData }
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_PHOTO_SUCCESS:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    photos: action.photos
                }
            }
        default:
            return state
    }
}

export const addPost = (text) => {
    return {
        type: ADD_POST,
        text
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}
export const setUserData = (userData) => {
    return {
        type: SET_USER_DATA,
        userData
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const setPhotoSuccess = (photos) => {
    return {
        type: UPDATE_PHOTO_SUCCESS,
        photos
    }
}


export const getUserProfile = (userID) => {
    return (dispatch) => {
        apiProfile.getProfile(userID)
            .then(data => {
                dispatch(setUserData(data))
            })
    }
}
export const updateProfileThunk = (data) => async (dispatch) => {
    const response = await apiProfile.updateProfile(data)
    if (response.resultCode === 0) {
        dispatch(setUserData(data))
    }
}
export const getStatusThunk = (id) => {
    return (dispatch) => {
        apiProfile.getStatus(id)
            .then(data => {
                // console.log(data)
                dispatch(setStatus(data))
            })
    }
}
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        apiProfile.updateStatus(status)
            .then(response => {
                // console.log(response)
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}
export const updatePhotoThunk = (photo) => async (dispatch) => {
    const response = await apiProfile.updatePhoto(photo)
    if (response.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.photos))
    }
}


export default profileReducer