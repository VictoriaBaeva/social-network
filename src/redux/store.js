import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _callSubscriber() {
        console.log('rerender');
    },
    _state:  {

        profilePage: {

            posts: [
                {id: 1, message: 'MyPost1'},
                {id: 2, message: 'MyPost2'},
                {id: 3, message: 'MyPost3'},
                {id: 4, message: 'MyPost4'},
                {id: 5, message: 'MyPost5'}
            ],
            newPostText: ''
        },

        dialogsPage: {
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
        }

    },
    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

};

export default store;