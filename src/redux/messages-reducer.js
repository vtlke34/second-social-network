const ADD_MESSAGE = 'ADD-MESSAGE';
const INPUT_MESSAGE = 'INPUT-MESSAGE'

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {
                id: 4,
                message: state.inputData,
                name: 'name',
                imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'
            }

            state.messageData.push(message)
            state.inputData = ''
            return state

        case INPUT_MESSAGE:
            state.inputData = action.inputText
            return state

        default:
            return state

    }

}

export const addMessageActionCreator = {
    type: ADD_MESSAGE,
}

export const inputMessageActionCreator = {
    type: INPUT_MESSAGE,
    inputText: ''
}

export default messagesReducer