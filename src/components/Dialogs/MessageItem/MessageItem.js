import s from './MessageItem.module.css';
import * as React from "react";

const MessageItem = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    );
};

export default MessageItem;