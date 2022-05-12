import Header from "./Header";
import React from "react";
import {getAuth} from "../../redux/auth-reducer";
import {connect} from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth();
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

export default connect(mapStateToProps, {getAuth})(HeaderContainer);