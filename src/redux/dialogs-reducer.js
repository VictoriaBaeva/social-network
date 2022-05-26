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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;