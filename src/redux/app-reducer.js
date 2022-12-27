import { thunkAuthData } from "./auth-reducer"

const TOGGLE_INITIALAZED = 'TOGGLE-INITIALAZED'

const initialState = {
    initialazed: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_INITIALAZED:
            return {
                ...state,
                initialazed: true
            }
        default:
            return state
    }


}

export const toggleInitialazed = () => {
    return {
        type: TOGGLE_INITIALAZED
    }
}

export const initialazeApp = () => {
    return (dispatch) => {
        dispatch(thunkAuthData())
            .then(() => {
                dispatch(toggleInitialazed())
            })
    }
}

export default appReducer