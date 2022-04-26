import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>

                <div className={styles.pageNumber}>
                    {
                        pages.map(p => <div className={this.props.currentPage === p && styles.selectedPage}
                                            onClick={() => {this.onPageChanged(p)}}>{p}</div>)
                    }
                </div>

                {
                    this.props.users.map(u =>
                        <div className={styles.users} key={u.id}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.usersPhoto} alt="user photo"/>
                                <div>
                                    <button
                                        onClick={() => this.props.toggleFollow(u.id)}>{u.followed ? 'Followed' : 'UnFollowed'}</button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        )
    }
}

export default Users;