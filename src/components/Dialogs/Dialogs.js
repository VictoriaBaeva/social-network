import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import * as React from "react";
import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"newMessageText"} component={"textarea"}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    );
};

const AddMessageReduxForm = reduxForm({
    form: 'newMessage'
})(AddMessageForm);

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} key={m.id} id={m.id}/>);

    const addNewMessage = (formData) => {
        props.addMessage(formData.newMessageText);
    };

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>

                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;