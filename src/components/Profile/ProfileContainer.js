import React from 'react';
import {connect} from 'react-redux';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Profile from "./Profile";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 23832;
        }
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        getProfileStatus={this.props.getProfileStatus}
                        updateProfileStatus={this.props.updateProfileStatus}
        />;
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
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    )(ProfileContainer);


