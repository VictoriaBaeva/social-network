const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

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
         if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
             this._state.dialogsPage.newMessageText = action.newText;
             this._callSubscriber(this._state);
         } else if (action.type === ADD_MESSAGE) {
             let newMessage = {
                 id: 4,
                 message: this._state.dialogsPage.newMessageText
             }
             this._state.dialogsPage.messages.push(newMessage);
             this._state.dialogsPage.newMessageText = '';
             this._callSubscriber(this._state);
         }
    }

};


export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextActionCreator = (text) =>
    ({type: UPDATE_POST_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageTextActionCreator = (text) =>
    ({type: UPDATE_MESSAGE_TEXT, newText: text});

export default store;