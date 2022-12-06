const ADD_MESSAGE = 'ADD-MESSAGE';
const INPUT_MESSAGE = 'INPUT-MESSAGE';
const initialState = {
    usersData: [
        { id: 1, name: 'lera', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' },
        { id: 2, name: 'alina', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' },
        { id: 3, name: 'andrey', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' },
        { id: 4, name: 'dima', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' },
    ],
    messageData: [
        { id: 1, message: "hy, you're idiot", name: 'name', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' },
        { id: 2, message: 'i am not idiot!!!', name: 'name', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' }
    ],
    inputData: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {
                id: 4,
                message: state.inputData,
                name: 'name',
                imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'
            }
            return {
                ...state,
                messageData: [
                    ...state.messageData,
                    message
                ],
                inputData: ''
            }

        case INPUT_MESSAGE:
            return {
                ...state,
                inputData: action.inputText
            }

        default:
            return state

    }

}

export const addMessage = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export const inputMessage = (inputText) => {
    return {
        type: INPUT_MESSAGE,
        inputText
    }
}

export default messagesReducer