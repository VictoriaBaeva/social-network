import Preloader from "../../common/Preloader/Preloader";
import React from "react";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>;
    }


    return (
        <div>

            <div>
                <img src="https://miro.medium.com/max/1200/1*HsFBOH0ncItzjWJgLIuVIg.png" alt=""/>
            </div>

            <div>
                <img src={props.profile.photos.large} alt=""/>
                Info
            </div>

        </div>
    );
};

export default ProfileInfo;