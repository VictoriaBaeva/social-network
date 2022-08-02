import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'MyPost1'},
        {id: 2, message: 'MyPost2'},
        {id: 3, message: 'MyPost3'},
        {id: 4, message: 'MyPost4'},
        {id: 5, message: 'MyPost5'}
    ]
};

test('length of posts should be increased', () => {
    let action = addPostActionCreator('новый пост тест');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(6);
});

test('length of posts should be decrement', () => {
    let action = deletePost(5);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});



