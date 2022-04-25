import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div>
                <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
            </div>

            <div>
                <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </div>

            <div>
                <NavLink to="/users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
            </div>

        </nav>
    );
};

export default Navbar;