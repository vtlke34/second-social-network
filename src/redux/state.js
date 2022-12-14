import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _rerender() { console.log('dd') },

    _state: {
        messagesPage: {
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
        },

        profilePage: {
            postData: [
                { id: 1, name: 'name', text: 'hello', likeCount: '3' },
                { id: 2, name: 'name', text: 'i am student', likeCount: '6' },
                { id: 3, name: 'name', text: 'i am hero', likeCount: '-1' }
            ],
            inputData: ''
        },

        sidebar: {
            bestFriendsData: [
                { id: 1, name: 'lera', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' },
                { id: 2, name: 'alex', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' },
                { id: 3, name: 'vlad', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' }
            ]
        }
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._rerender(this.state)
    },

    subscribe(observer) {
        this._rerender = observer
    }
}

export default store