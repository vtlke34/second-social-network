import axios from "axios"

const api = {
    getProfile(userID) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => response.data)
    },
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
    getAuthData() {
        return axios.get('https://social-network.samuraijs.com/api/1.0//auth/me', { withCredentials: true })
            .then(response => response.data)
    }
}

export default api