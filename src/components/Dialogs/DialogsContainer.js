import * as React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "./../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let changeMessageText = (text) => {
                store.dispatch(updateMessageTextActionCreator(text));
            };
            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            };

            return <Dialogs changeMessageText={changeMessageText}
                            addMessage={addMessage}
                            dialogsPage={store.getState().dialogsPage}/>
        }}
    </StoreContext.Consumer>;
};

export default DialogsContainer;