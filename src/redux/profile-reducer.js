const ADD_POST = 'ADD-POST'
const INPUT_POST = 'INPUT-POST'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const post = {
                id: 5,
                name: 'name',
                text: state.inputData,
                likeCount: '3'
            }

            state.postData.push(post);
            state.inputData = '';
            return state

        case INPUT_POST:
            state.inputData = action.inputText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = {
    type: ADD_POST
}

export const inputPostActionCreator = {
    type: INPUT_POST,
    inputText: ''
}

export default profileReducer