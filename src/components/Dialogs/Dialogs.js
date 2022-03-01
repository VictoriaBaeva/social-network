import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    <DialogItem name="User1" id="1"/>
                    <DialogItem name="User2" id="2"/>
                    <DialogItem name="User3" id="3"/>
                </div>

                <div className={s.messages}>
                    <MessageItem message="Hi"/>
                    <MessageItem message="How are you?"/>
                    <MessageItem message="Wow?"/>
                </div>

            </div>

        </div>
    );
};

export default Dialogs;