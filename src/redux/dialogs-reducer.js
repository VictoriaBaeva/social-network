const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'User1'},
        {id: 2, name: 'User2'},
        {id: 3, name: 'User3'}
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Wow!'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageTextActionCreator = (text) =>
    ({type: UPDATE_MESSAGE_TEXT, newText: text});

export default dialogsReducer;