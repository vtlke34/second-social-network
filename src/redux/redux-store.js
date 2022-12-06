import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


const reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;