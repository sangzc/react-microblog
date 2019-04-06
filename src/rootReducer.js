import {
    ADD_NEW_POST,
    DELETE_POST,
    UPDATE_POST,
    ADD_NEW_COMMENT,
    DELETE_COMMENT,
    LOAD_POSTS,
    LOAD_POST,
    UPVOTE_POST,
    DOWNVOTE_POST
} from './actionTypes';

const INITIAL_STATE = {
    posts: []
};

export default function rootReducer(state = INITIAL_STATE, action) {

    if (action.type === ADD_NEW_POST) {
        let newPost = action.payload;
        newPost.comments =[];
        return { ...state, posts: [...state.posts, newPost] };
    }

    else if (action.type === DELETE_POST) {
        const posts = state.posts.filter(p => p.id !== action.payload)
        return { ...state, posts };
    }

    else if (action.type === UPDATE_POST) {
        // payload: { postID, updatePost }
        let updatedPost = action.payload.updatedPost
        updatedPost.comments = [];
        return { ...state, post: action.payload.updatedPost };
    }

    else if (action.type === ADD_NEW_COMMENT) {
        const newComment = action.payload.comment;
        let updatedPost = {
            ...state.post, 
            comments: [...state.post.comments, newComment]
        }
        return { ...state, post: updatedPost };
    }

    else if (action.type === DELETE_COMMENT) {
        // payload: {postID, commentID}
        const updatedComments = state.post.comments.filter(
            p => p.id !== action.payload.commentID
        )
        let updatedPost = {...state.post, comments: updatedComments}
        return { ...state, post: updatedPost };
    }

    else if (action.type === LOAD_POSTS) {
        return { ...state, posts: action.payload}
    }

    else if (action.type === LOAD_POST) {
        return { ...state, post: action.payload }
    }

    else if (action.type === UPVOTE_POST) {
        // state => { posts: [] }
        console.log("UP_VOTE, state", state)
        return { ...state }
    }

    else if (action.type === DOWNVOTE_POST) {
        console.log("DOWN_VOTE, state", state)
        return { ...state }
    }

    else {
        return state;
    }


}