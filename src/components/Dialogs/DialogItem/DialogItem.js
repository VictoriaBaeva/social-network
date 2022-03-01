import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/"+props.name} className = {s.dialog}>{props.name}</NavLink>
        </div>
    );
};
export default DialogItem;