import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
            <header className={s.header}>
                <div>
                    <img className={s.img} src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt=''/>
                </div>
                <div>
                    {props.isLogin ? props.login : <NavLink to="/login">Login</NavLink>}
                </div>
            </header>

    );
};

export default Header;