import {getAuth} from "./auth-reducer";

const SET_INITIALIZED = 'auth/SET-INITIALIZED';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const setInitialized = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise]).then(() => {
        dispatch(setInitialized());
    });
};

export default appReducer;