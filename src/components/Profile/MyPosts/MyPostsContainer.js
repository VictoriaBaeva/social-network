import * as React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import StoreContext from "./../../../StoreContext";

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();
            let changePostText = (text) => {
                store.dispatch(updatePostTextActionCreator(text));
            };
            let addPost = () => {
                store.dispatch(addPostActionCreator());
            };
            return <MyPosts changePostText={changePostText}
                            addPost={addPost}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}/>
        }
        }

    </StoreContext.Consumer>
};

export default MyPostsContainer;
