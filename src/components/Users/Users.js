import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>

            <div className={styles.pageNumber}>
                {
                    pages.map(p => <div className={props.currentPage === p && styles.selectedPage} onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</div>)
                }
            </div>

            {
                props.users.map(u =>
                    <div className={styles.users} key={u.id}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.usersPhoto} alt="user photo"/>
                            </NavLink>
                            <div>
                                <button disabled={props.followingInProgress.includes(u.id)}
                                        onClick={() => {
                                            if (u.followed) {
                                                props.deleteFromFriends(u.id);
                                            } else {
                                                props.addAsFriend(u.id);
                                            }
                                        }
                                        }>{u.followed ? 'Отписаться' : 'Подписаться'}</button>
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
};

export default Users;