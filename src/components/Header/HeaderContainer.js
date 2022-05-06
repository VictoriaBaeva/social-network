import Header from "./Header";
import React from "react";
import {setUserData} from "../../redux/auth-reducer";
import {connect} from 'react-redux';
import * as axios from "axios/index";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode == 0) {
                    this.props.setUserData({...response.data.data, isLogin: true});
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