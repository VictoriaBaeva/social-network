import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id}/>);

    const newPostElement = React.useRef();

    let onChangePostText = () => {
        let text = newPostElement.current.value;
        props.changePostText(text);
    };

    let onAddPost = () => {
        props.addPost();
    };

    return (
        <div className={s.MyPosts}>
            My Posts
            <div>
                New Post
                <div>
                    <textarea onChange={onChangePostText} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;