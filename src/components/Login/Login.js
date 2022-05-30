import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {InputType} from "../common/FormsControls/FormsControls";
import {connect} from 'react-redux';
import {login} from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const maxLength10 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={"login"}
                       typeField="input"
                       component={InputType}
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={"password"}
                       typeField="input"
                       type="password"
                       component={InputType}
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/>  Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData)=> {
        let {login, password, rememberMe} = formData;
        props.login(login, password, rememberMe);
    };

    if(props.isLogin) {
        return <Navigate to='/profile'/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};


let mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin
    }
};

export default connect(mapStateToProps, {login} )(Login);