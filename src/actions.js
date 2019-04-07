import axios from 'axios';
import { ADD_NEW_POST,
         DELETE_POST,
         UPDATE_POST,
         ADD_NEW_COMMENT,
         DELETE_COMMENT,
         LOAD_POSTS,
         LOAD_POST,
         UPVOTE_POST,
         DOWNVOTE_POST
        } from './actionTypes';

const HOST_NAME = "http://localhost:5001/api"

export function sendPostToAPI({ title, description, body}) {
    return async function(dispatch) {
        const res = await axios.post(
            `${HOST_NAME}/posts`,
            {
                title, 
                description,
                body
            }
        )
        const newPost = res.data;
        dispatch(addNewPost(newPost));
    }
}

export function addNewPost(newPost){
    return { 
        type: ADD_NEW_POST, 
        payload: newPost 
    };
}

export function deletePostFromAPI(postID) {
    return async function(dispatch) {
        await axios.delete(
            `${HOST_NAME}/posts/${postID}`
        )
        // const message = res.data;
        dispatch(deletePost(postID));
    }
}

export function deletePost(postID){
    return { 
        type: DELETE_POST,
        payload: postID
    };
}

export function updatePostWithAPI(postID, {title, description, body}) {
    return async function(dispatch) {
        const res = await axios.put(
            `${HOST_NAME}/posts/${postID}`,
            {
                title,
                description,
                body
            }
        )
        const updatedPost = res.data;
        dispatch(updatePost(postID, updatedPost));
    }
}

export function updatePost(postID, updatedPost){
    return { 
        type: UPDATE_POST,
        payload: { postID, updatedPost }
    };
}

export function sendCommentToAPI(postID, {comment}){
    return async function(dispatch){
        const res = await axios.post(
            `${HOST_NAME}/posts/${postID}/comments`,
            {
                text: comment
            }
        )
        const newComment = res.data;
        dispatch(addNewComment(postID, newComment));
    }
}

export function addNewComment(postID, comment){
    return { 
        type: ADD_NEW_COMMENT, 
        payload: { postID, comment }
    };
}

export function deleteCommentFromAPI(postID, commentID) {
    return async function(dispatch) {
        await axios.delete(
            `${HOST_NAME}/posts/
            ${postID}/comments/${commentID}`
        )
        dispatch(deleteComment(postID, commentID));
    }
}

export function deleteComment(postID, commentID){
    return { 
        type: DELETE_COMMENT, 
        payload: { postID, commentID }
    };
}

export function getAllPostsFromAPI(){
    return async function(dispatch){
        const res = await axios.get(
            `${HOST_NAME}/posts`); 
        const posts = res.data;
        dispatch(gotPosts(posts));
    }
}

export function gotPosts(posts){
    return { 
        type: LOAD_POSTS, 
        payload: posts
    };
}

export function getPostFromAPI(postID) {
    return async function(dispatch){
        const res = await axios.get(
            `${HOST_NAME}/posts/${postID}`); 
            const post = res.data;
        console.log(getPostFromAPI, post)
        dispatch(gotPost(post));
    }
}

export function gotPost(post){
    return { 
        type: LOAD_POST, 
        payload: post
    };
}

export function upVotePostFromAPI(postID) {
    return async function(dispatch){
        const res = await axios.post(
            `${HOST_NAME}/posts/${postID}/vote/up`); 
        const updatedVotes = res.data;
        dispatch(upVotePost(postID, updatedVotes));
    }
}

export function upVotePost(postID, votes){
    return { 
        type: UPVOTE_POST, 
        payload: {postID, votes}
    };
}

export function downVotePostFromAPI(postID) {
    return async function(dispatch){
        const res = await axios.post(
            `${HOST_NAME}/posts/${postID}/vote/down`); 
        const updatedVotes = res.data;
        dispatch(downVotePost(postID, updatedVotes));
    }
}

export function downVotePost(postID, votes){
    return { 
        type: DOWNVOTE_POST, 
        payload: {postID, votes}
    };
}

