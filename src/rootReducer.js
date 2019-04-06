import uuid from 'uuid/v4';

import {
    ADD_NEW_POST,
    DELETE_POST,
    UPDATE_POST,
    ADD_NEW_COMMENT,
    DELETE_COMMENT,
    LOAD_POSTS,
    LOAD_POST
} from './actionTypes';

const INITIAL_STATE = {
    posts: []
};

export default function rootReducer(state = INITIAL_STATE, action) {

    if (action.type === ADD_NEW_POST) {
        let newPost = action.payload;
        newPost.comments =[];
        newPost.id = uuid();
        return { posts: [...state.posts, newPost] };
    }

    else if (action.type === DELETE_POST) {
        const posts = state.posts.filter(p => p.id === action.payload.id)
        return { posts };
    }

    else if (action.type === UPDATE_POST) {
        // payload: { postID, updatePost }
        console.log('In root reducer update post',  action.payload, state.posts)

        const updatedPosts = state.posts.map(
            p => p.id === action.payload.postID
                ? p = {...action.payload.updatedPost, id: p.id}
                : p
        );

        console.log('updated post is', updatedPosts)

        return { posts: updatedPosts };
    }

    else if (action.type === ADD_NEW_COMMENT) {
        let newComment = action.payload.comment
        newComment.id = uuid();
        // payload: {postID, comment}
        let updatedPosts = state.posts.map(
            p => (p.id === action.payload.postID)
                ? {
                    ...p,
                    comments: [...p.comments, newComment]
                }
                : p);
        return { posts: updatedPosts };
    }

    else if (action.type === DELETE_COMMENT) {
        // payload: {postID, commentID}
        let updatedPosts = state.posts.map(
            p => p.id === action.payload.postID
                ? {
                    ...p,
                    comments:
                        p.comments.filter(
                            c => c.id !== action.payload.commentID)
                }
                : p)
        return { posts: updatedPosts };
    }

    else if (action.type === LOAD_POSTS) {
        return { posts: action.payload}
    }

    else if (action.type === LOAD_POST) {
        console.log("HELLO FROM THE ROOTREDUCER FOR LOAD_POST")
        return { post: action.payload }
    }

    else {
        return state;
    }


}