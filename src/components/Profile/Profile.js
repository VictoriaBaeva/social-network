import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         getProfileStatus={props.getProfileStatus}
                         updateProfileStatus={props.updateProfileStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;