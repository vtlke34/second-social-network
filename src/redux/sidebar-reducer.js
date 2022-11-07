const initialState = {
    bestFriendsData: [
        { id: 1, name: 'lera', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' },
        { id: 2, name: 'alex', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' },
        { id: 3, name: 'vlad', imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer