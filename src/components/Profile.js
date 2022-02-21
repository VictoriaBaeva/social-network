import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>

            <div>
                <img src="https://miro.medium.com/max/1200/1*HsFBOH0ncItzjWJgLIuVIg.png" alt=""/>
            </div>

            <div>
                ava +discriptiion
            </div>

            <div>
                My Posts
                <div>New Post</div>

                <div className={s.posts}>
                    <div className={s.item}>Post1</div>
                    <div className={s.item}>Post2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;