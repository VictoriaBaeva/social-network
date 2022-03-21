import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} id={m.id} />)

    return (
        <div>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                </div>

            </div>

        </div>
    );
};

export default Dialogs;