import {rerenderEntireTree} from "../render";

let state = {

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

};

window.state = state;

export let updatePostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};



export default state;