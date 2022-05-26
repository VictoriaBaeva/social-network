import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
