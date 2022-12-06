import axios from "axios"

export const apiUsers = {
    getUsers(count = 10, page = 1) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`, { withCredentials: true })
            .then(response => response.data)
    },
    follow(id) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, { withCredentials: true })
    },
    unfollow(id) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { withCredentials: true })
    },
}


export const apiAuth = {
    getAuthData() {
        return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
            .then(response => response.data)
    },
    login(data) {
        return axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', { ...data }, { withCredentials: true })
            .then(response => response.data)
    },
    logout() {
        return axios.post('https://social-network.samuraijs.com/api/1.0/auth/logout', {}, { withCredentials: true })
            .then(response => console.log(response))
    }
}


export const apiProfile = {
    getProfile(userID) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return axios.put('https://social-network.samuraijs.com/api/1.0/profile/status', { status }, { withCredentials: true })
    }
}