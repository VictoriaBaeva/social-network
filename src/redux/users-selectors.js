
/*
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};
*/

import {createSelector} from "reselect";

const  getUser = (state) => {
    return state.usersPage.users;
};

/*
export const  getUserSelector = (state) => {
    return getUser(state).filter(u => true);
};
*/

export const getUserSuperSelector = createSelector(getUser, (users) => {
    return users.filter(u => true);
});

export const  getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const  getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const  getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const  getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const  getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
