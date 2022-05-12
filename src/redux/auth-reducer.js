import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isLogin: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData
            };
        default:
            return state;
    }
};

export const setUserData = (userData) => ({type: SET_USER_DATA, userData});
export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData({...data.data, isLogin: true}));
            }
        });
    }
};

export default authReducer;