import {
    ADD_NEW_POST,
    DELETE_POST,
    LOAD_POSTS,
    UPVOTE_POST,
    DOWNVOTE_POST
} from '../actionTypes';

// const INITIAL_STATE = {
//     posts: []
// };

export default function rootReducer(state = [], action) {

    if (action.type === ADD_NEW_POST) {
        let newPost = action.payload;
        newPost.comments=[];
        newPost.votes=[];
        return [ ...state, newPost];
    }

    else if (action.type === DELETE_POST) {
        const updatedPosts = state.posts.filter(p => p.id !== action.payload)
        return updatedPosts;
    }

    else if (action.type === LOAD_POSTS) {
        return [...action.payload]
    }

    else if (action.type === UPVOTE_POST) {
        const updatedPosts = state.posts.map(p => p.id == action.payload.postID ? p.votes++ : p)
        return updatedPosts;
    }

    else if (action.type === DOWNVOTE_POST) {
        const updatedVotes = state.posts.map(p => p.id == action.payload.postID ? p.votes-- : p)
        return { ...state, posts: updatedVotes }
    }

    else {
        return state;
    }

}