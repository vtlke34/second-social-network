import axios from "axios"

const instance = instance.create({ withCredentials: true, headers: { 'API-KEY': '6b0e5207-c540-48b8-bc3a-78eeb677981a' } })

export const apiUsers = {
    getUsers(count = 10, page = 1) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`,)
            .then(response => response.data)
    },
    getFriends(friend = true) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?friend=${friend}`)
            .then(data => data.data.items)
    },
    follow(id) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {})
    },
    unfollow(id) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },
}


export const apiAuth = {
    getAuthData() {
        return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')
            .then(response => response.data)
    },
    login(data) {
        return instance.post('https://social-network.samuraijs.com/api/1.0/auth/login', { ...data })
            .then(response => response.data)
    },
    logout() {
        return instance.post('https://social-network.samuraijs.com/api/1.0/auth/logout', {})
            .then(response => console.log(response))
    }
}


export const apiProfile = {
    getProfile(userID) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put('https://social-network.samuraijs.com/api/1.0/profile/status', { status })
    }
}