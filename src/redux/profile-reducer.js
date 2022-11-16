const ADD_POST = 'ADD-POST'
const INPUT_POST = 'INPUT-POST'
const SET_USER_DATA = 'SET-USER-DATA'


const initialState = {
    userData: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0",
        }
    },
    postData: [
        { id: 1, name: 'name', text: 'hello', likeCount: '3' },
        { id: 2, name: 'name', text: 'i am hero', likeCount: '-1' }
    ],
    inputData: '',
    userID: 2
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

export default profileReducer