import Header from "./Header";
import React from "react";
import {setUserData} from "../../redux/auth-reducer";
import {connect} from 'react-redux';
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuth().then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserData({...data.data, isLogin: true});
                }
            });
    }
    render() {
        return <Header {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.email,
        isLogin: state.auth.isLogin
    }
};

export default connect(mapStateToProps, {setUserData})(HeaderContainer);