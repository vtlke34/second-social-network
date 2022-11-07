const ADD_POST = 'ADD-POST'
const INPUT_POST = 'INPUT-POST'
const initialState = {
    postData: [
        { id: 1, name: 'name', text: 'hello', likeCount: '3' },
        { id: 2, name: 'name', text: 'i am hero', likeCount: '-1' }
    ],
    inputData: ''
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
            // state.inputData = action.inputText
            return {
                ...state,
                inputData: action.inputText
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const inputPostActionCreator = (text) => {
    return {
        type: INPUT_POST,
        inputText: text
    }
}

export default profileReducer