import React from 'react';
import {connect} from 'react-redux';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import Profile from "./Profile";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId ;
            if (!userId) {
                this.props.history.push("/login");
            }
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
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isLogin
    }
};

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}),
    withRouter,withAuthRedirect
    )(ProfileContainer);


