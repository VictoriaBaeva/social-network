import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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

export const setUserData = (id, email, login, isLogin) => ({
    type: SET_USER_DATA,
    userData: {id, email, login, isLogin}
});

export const getAuth = () => {
    return (dispatch) => {
        return authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
    }
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuth());
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
    }
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        });
    }
};

export default authReducer;