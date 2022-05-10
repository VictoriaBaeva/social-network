import React from 'react';
import {connect} from 'react-redux';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });

    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
};

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));

