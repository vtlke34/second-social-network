import { combineReducers, legacy_createStore as createStore } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    users: usersReducer
})

const store = createStore(reducers);

export default store;