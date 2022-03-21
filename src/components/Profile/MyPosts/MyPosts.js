import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";

const MyPosts = (props) => {


    let postsElements = props.posts.map(p => <Post message={p.message}/>);

    const newPostElement = React.useRef();

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    return (
        <div className={s.MyPosts}>
            My Posts
            <div>
                New Post
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;