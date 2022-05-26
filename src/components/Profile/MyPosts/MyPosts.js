import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";
import {Field, reduxForm} from "redux-form";

const NewPostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Enter your post"} name={"newPostText"} component={"textarea"}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
    );
};

const NewPostReduxForm = reduxForm({
    form: 'newPost'
})(NewPostForm);

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id}/>);

    const addNewPost = (formData)=> {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={s.MyPosts}>
            <NewPostReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;