import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import * as React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = props.state.messages.map(m => <MessageItem message={m.message} id={m.id} />);

    const newMessageElement = React.useRef();

    let changeMessageText = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    };

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
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
                            <textarea onChange={changeMessageText} ref={newMessageElement} value={props.newMessageText}/>
                        </div>
                        <div>
                            <button onClick={addMessage}>Add message</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dialogs;