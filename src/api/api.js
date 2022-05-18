import * as axios from "axios/index";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            "API-KEY": "bdb3b2d0-9409-4abc-ab57-22897e9357a8"
        }
    }
);

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    addAsFriend (id) {
        return instance.post(`/follow/${id}`).then(response => response.data);
    },
    deleteFromFriends (id) {
        return instance.delete(`/follow/${id}`).then(response => response.data);
    }
};


export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getProfileStatus (userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateProfileStatus (status) {
        return instance.put(`profile/status`, {status});
    }
};

export const authAPI = {
    getAuth () {
        return instance.get(`auth/me`).then(response => response.data);
    }
};