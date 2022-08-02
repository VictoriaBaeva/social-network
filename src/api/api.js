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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    addAsFriend (id) {
        return instance.post(`/follow/${id}`);
    },
    deleteFromFriends (id) {
        return instance.delete(`/follow/${id}`);
    }
};


export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`);
    },
    getProfileStatus (userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateProfileStatus (status) {
        return instance.put(`profile/status`, {status});
    }
};

export const authAPI = {
    getAuth () {
        return instance.get(`auth/me`);
    },
    login (email, password, rememberMe) {
        return instance.post(`/auth/login`, {email, password, rememberMe});
    },
    logout () {
        return instance.delete(`/auth/login`);
    }
};