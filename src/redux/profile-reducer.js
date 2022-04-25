const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'MyPost1'},
        {id: 2, message: 'MyPost2'},
        {id: 3, message: 'MyPost3'},
        {id: 4, message: 'MyPost4'},
        {id: 5, message: 'MyPost5'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextActionCreator = (text) =>
    ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;