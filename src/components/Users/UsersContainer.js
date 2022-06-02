import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {
    addAsFriend, deleteFromFriends,
    getUsers,
    setCurrentPage,
    toggleIsFetching
} from '../../redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   deleteFromFriends={this.props.deleteFromFriends}
                   addAsFriend={this.props.addAsFriend}
            />
        </>
    }
}

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

export default compose(connect(mapStateToProps, {
    setCurrentPage,
    toggleIsFetching,
    getUsers,
    addAsFriend,
    deleteFromFriends
}))(UsersContainer);
