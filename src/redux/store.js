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
        }

    },
    getState() {
        return this._state;
    },
    updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addPost() {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    }
};

export default store;