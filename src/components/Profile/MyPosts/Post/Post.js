import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.Post}>
            <div className={s.item}>{props.message}</div>
        </div>
    );
};

export default Post;