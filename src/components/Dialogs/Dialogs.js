import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import * as React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/> );
    let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} key={m.id} id={m.id} />);

    const newMessageElement = React.useRef();

    let onChangeMessageText = () => {
        let text = newMessageElement.current.value;
        props.changeMessageText(text);
    };

    let onAddMessage = () => {
        props.addMessage();
    };

    return (
        <div>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>


                <div className={s.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <div>
                        New message
                        <div>
                            <textarea onChange={onChangeMessageText} ref={newMessageElement} value={props.dialogsPage.newMessageText}/>
                        </div>
                        <div>
                            <button onClick={onAddMessage}>Add message</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dialogs;