import Preloader from "../../common/Preloader/Preloader";
import React from "react";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>;
    }


    return (
        <div>
            {/*            <div>
                <img src="https://miro.medium.com/max/1200/1*HsFBOH0ncItzjWJgLIuVIg.png" alt=""/>
            </div>*/}
            <div>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={props.status}
                               getProfileStatus={props.getProfileStatus}
                               updateProfileStatus={props.updateProfileStatus} />
            </div>

        </div>
    );
};

export default ProfileInfo;